import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ==========================================
// 1. IN-MEMORY RATE LIMITER (Spam Prevention)
// ==========================================
interface RateLimitEntry {
  count: number;
  firstRequestTime: number;
}

const ipRateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10-minute sliding window
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 10 minutes per IP

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();
  return "unknown-ip";
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();

  // Housekeeping: clean expired records periodically
  if (ipRateLimitMap.size > 500) {
    ipRateLimitMap.forEach((value, key) => {
      if (now - value.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
        ipRateLimitMap.delete(key);
      }
    });
  }

  const record = ipRateLimitMap.get(ip);

  if (!record) {
    ipRateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return { allowed: true };
  }

  if (now - record.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    // Window expired, reset counter
    ipRateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil(
      (record.firstRequestTime + RATE_LIMIT_WINDOW_MS - now) / 1000
    );
    return { allowed: false, retryAfterSeconds };
  }

  record.count += 1;
  return { allowed: true };
}

// ==========================================
// 2. DOMAIN / ORIGIN RESTRICTION
// ==========================================
function isOriginAllowed(req: NextRequest): boolean {
  // Allow all origins in local development
  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const host = req.headers.get("host");

  const allowedOrigins = (process.env.ALLOWED_ORIGIN || "")
    .split(",")
    .map((o) => o.trim().toLowerCase())
    .filter(Boolean);

  // If host is present, allow requests from the same host
  if (origin) {
    const originLower = origin.toLowerCase();
    if (host && originLower.includes(host.toLowerCase())) return true;
    if (allowedOrigins.some((allowed) => originLower === allowed || originLower.endsWith(allowed))) {
      return true;
    }
    return false;
  }

  if (referer) {
    try {
      const refererUrl = new URL(referer);
      const refererOrigin = refererUrl.origin.toLowerCase();
      if (host && refererOrigin.includes(host.toLowerCase())) return true;
      if (allowedOrigins.some((allowed) => refererOrigin === allowed || refererOrigin.endsWith(allowed))) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  // Deny if both origin and referer are missing in production
  return false;
}

// ==========================================
// 3. SANITIZATION & VALIDATION HELPERS
// ==========================================
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// ==========================================
// 4. API POST ROUTE HANDLER
// ==========================================
export async function POST(req: NextRequest) {
  // Step A: Domain / Origin restriction check
  if (!isOriginAllowed(req)) {
    return NextResponse.json(
      { error: "Forbidden: Cross-origin request denied." },
      { status: 403 }
    );
  }

  // Step B: Rate limiting check
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: `Too many submissions. Please wait ${rateLimit.retryAfterSeconds} seconds before sending another message.`,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds || 60),
        },
      }
    );
  }

  try {
    const body = await req.json();
    const { name, email, subject, message, _gotcha, _timestamp } = body;

    // Step C: Bot Protection - Honeypot Trap
    // Automated spambots fill in every hidden field. Humans won't.
    if (_gotcha && String(_gotcha).trim().length > 0) {
      // Return fake success silently so the bot believes it succeeded
      return NextResponse.json({
        success: true,
        message: "Message received successfully.",
      });
    }

    // Step D: Bot Protection - Time-based verification
    // Humans take at least 2 seconds to complete and submit a form
    if (_timestamp) {
      const elapsed = Date.now() - Number(_timestamp);
      if (elapsed < 1500) {
        // Submitted in less than 1.5 seconds - likely automated
        return NextResponse.json({
          success: true,
          message: "Message received successfully.",
        });
      }
    }

    // Step E: Server-Side Input Validation
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const cleanSubject = typeof subject === "string" ? subject.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }
    if (cleanName.length > 100) {
      return NextResponse.json(
        { error: "Name must be 100 characters or less." },
        { status: 400 }
      );
    }

    if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (cleanEmail.length > 254) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 }
      );
    }

    if (cleanSubject.length > 200) {
      return NextResponse.json(
        { error: "Subject must be 200 characters or less." },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }
    if (cleanMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message must be 5000 characters or less." },
        { status: 400 }
      );
    }

    // Step F: Validate Resend configuration
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_your_api_key_here" || !apiKey.startsWith("re_")) {
      return NextResponse.json(
        {
          error:
            "Resend API key is not configured yet. Please add your RESEND_API_KEY in frontend/.env.local.",
        },
        { status: 500 }
      );
    }

    // Step G: Send Email via Resend
    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "gunjanvishwakarma418@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const emailSubject = cleanSubject
      ? `[Portfolio Contact] ${cleanSubject}`
      : `[Portfolio Contact] New message from ${cleanName}`;

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeSubject = escapeHtml(cleanSubject || "General Inquiry");
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br/>");
    const timestampFormatted = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f172a; color: #f8fafc; border-radius: 16px; border: 1px solid #334155;">
        <div style="border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="margin: 0 0 8px 0; color: #38bdf8; font-size: 20px; font-weight: 700;">
            📬 New Portfolio Message Received
          </h2>
          <p style="margin: 0; color: #94a3b8; font-size: 13px;">
            Submitted on ${timestampFormatted} (IST)
          </p>
        </div>

        <div style="background: #1e293b; padding: 20px; border-radius: 12px; margin-bottom: 24px; border: 1px solid #334155;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #94a3b8; width: 90px; font-weight: 600;">Name:</td>
              <td style="padding: 6px 0; color: #f8fafc; font-weight: 600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Email:</td>
              <td style="padding: 6px 0; color: #38bdf8;">
                <a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Subject:</td>
              <td style="padding: 6px 0; color: #f8fafc;">${safeSubject}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 24px;">
          <h4 style="margin: 0 0 10px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">
            Message Content:
          </h4>
          <div style="background: #020617; padding: 18px; border-radius: 12px; border: 1px solid #1e293b; color: #e2e8f0; font-size: 14px; line-height: 1.6;">
            ${safeMessage}
          </div>
        </div>

        <div style="border-top: 1px solid #1e293b; padding-top: 16px; font-size: 12px; color: #64748b; text-align: center;">
          <p style="margin: 0;">Sent directly from Gunjan Vishwakarma's Portfolio Website</p>
          <p style="margin: 4px 0 0 0;">Sender IP: ${clientIp}</p>
        </div>
      </div>
    `;

    const plainTextContent = `
New Portfolio Message:
--------------------------------
Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject || "General Inquiry"}
Time: ${timestampFormatted} (IST)
Sender IP: ${clientIp}

Message:
${cleanMessage}
    `.trim();

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: cleanEmail,
      subject: emailSubject,
      text: plainTextContent,
      html: htmlContent,
    });

    if (result.error) {
      console.error("[Resend Error]:", result.error);
      return NextResponse.json(
        {
          error:
            result.error.message || "Failed to send message. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      id: result.data?.id,
    });
  } catch (err: unknown) {
    console.error("[Contact API Exception]:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
