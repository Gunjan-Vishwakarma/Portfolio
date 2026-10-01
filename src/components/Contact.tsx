"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  Sparkles,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gunjanvishwakarma418@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I am actively seeking an entry-level Frontend Engineer or Software Developer role. Feel free to reach out!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Contact Information
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Feel free to contact me directly via email, phone, or LinkedIn. I am based in Pune and open to on-site, hybrid, or remote positions.
              </p>

              {/* Info Items */}
              <div className="space-y-4 mb-8">
                {/* Email Item with Copy */}
                <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Email Address
                      </p>
                      <a
                        href="mailto:gunjanvishwakarma418@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        gunjanvishwakarma418@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.06] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Phone / Mobile
                    </p>
                    <a
                      href="tel:+918788446929"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      +91 8788446929
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Pune, India &bull; Open to Relocation / Remote
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials Box */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Follow & Connect
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Gunjan-Vishwakarma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-indigo-500/30 hover:border-indigo-400/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gunjan-vishwakarma09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600/30 hover:border-blue-400/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:gunjanvishwakarma418@gmail.com"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-400/50 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:+918788446929"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-emerald-600/30 hover:border-emerald-400/50 transition-all"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Frontend Developer Role / Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Gunjan, I saw your portfolio and would like to connect regarding..."
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 border border-white/20 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {success && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block font-semibold">Message Sent Successfully!</strong>
                    <span>Thank you for reaching out. I will get back to you promptly.</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
