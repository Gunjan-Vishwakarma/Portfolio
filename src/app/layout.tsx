import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gunjan Vishwakarma | Software Developer & Frontend Engineer",
  description:
    "Portfolio of Gunjan Vishwakarma — Software Developer specializing in React.js, Next.js, modern JavaScript, Tailwind CSS, and scalable REST API integrations.",
  keywords: [
    "Gunjan Vishwakarma",
    "Software Developer",
    "Frontend Engineer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Pune",
  ],
  authors: [{ name: "Gunjan Vishwakarma" }],
  openGraph: {
    title: "Gunjan Vishwakarma | Software Developer Portfolio",
    description:
      "Explore projects, skills, real-world fintech experience, and education of Gunjan Vishwakarma.",
    url: "https://github.com/Gunjan-Vishwakarma/",
    siteName: "Gunjan Vishwakarma Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${firaCode.variable} dark`}
    >
      <body className="bg-[#070913] text-slate-100 min-h-screen relative antialiased selection:bg-indigo-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
