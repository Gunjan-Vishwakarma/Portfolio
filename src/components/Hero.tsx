"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Mail,
  FileText,
  Github,
  Linkedin,
  Phone,
  Code2,
  Cpu,
  Sparkles,
  MapPin,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrases = [
      "React.js & Next.js Web Apps",
      "Fintech & Stock Market Platforms",
      "Responsive Production Interfaces",
      "REST API & JWT Integrations",
      "Clean Component Architectures",
    ];

    const currentPhrase = phrases[phraseIdx];
    const typeSpeed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIdx]);

  return (
    <section
      id="hero"
      className="min-h-screen pt-36 pb-20 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-sm shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Frontend & Software Developer Roles</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                Gunjan Vishwakarma
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-slate-300 font-heading">
              I build{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-2 underline-offset-4">
                {text}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            Software Developer with hands-on experience building responsive,
            production user interfaces with <strong className="text-white font-medium">React.js</strong> and{" "}
            <strong className="text-white font-medium">Next.js</strong>. Currently developing frontend
            features for a live stock market analysis platform (Fintech), integrating REST APIs,
            and crafting high-performance, modular UI systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-500/25 border border-white/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm flex items-center justify-center gap-2 border border-white/10 backdrop-blur-md hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contact Me</span>
            </a>

            <a
              href="mailto:gunjanvishwakarma418@gmail.com?subject=Resume%20Request%20-%20Gunjan%20Vishwakarma"
              className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 font-medium text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-cyan-500/30 transition-all w-full sm:w-auto"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mr-1">
              Connect:
            </span>

            <a
              href="https://github.com/Gunjan-Vishwakarma/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-indigo-500/30 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/gunjan-vishwakarma09/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:gunjanvishwakarma418@gmail.com"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all"
              aria-label="Email Gunjan"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="tel:+918788446929"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-emerald-600/30 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all"
              aria-label="Call Gunjan"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Glass Visual / Avatar */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Outer Animated Glowing Glass Ring */}
            <div className="absolute inset-0 rounded-full p-2.5 bg-gradient-to-tr from-indigo-500/40 via-purple-500/20 to-cyan-500/40 border border-white/15 shadow-2xl shadow-indigo-500/30 animate-spin-slow flex items-center justify-center" />

            {/* Inner Frosted Avatar Container */}
            <div className="relative w-full h-full rounded-full bg-[#0a0f1d]/85 border border-white/20 backdrop-blur-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/15 flex items-center justify-center">
                <Code2 className="w-24 h-24 text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
              </div>
            </div>

            {/* Floating Glass Badges */}
            <div className="absolute -top-2 -right-2 sm:-right-6 bg-[#0c1222]/85 border border-white/20 rounded-2xl p-2.5 flex items-center gap-2.5 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">React & Next.js</p>
                <p className="text-[10px] text-slate-400">Modern Frontend</p>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 sm:-left-6 bg-[#0c1222]/85 border border-white/20 rounded-2xl p-2.5 flex items-center gap-2.5 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">REST APIs & JWT</p>
                <p className="text-[10px] text-slate-400">Secure Integration</p>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-[#0c1222]/85 border border-white/20 rounded-2xl p-2 flex items-center gap-2 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">Pune, India</p>
                <p className="text-[9px] text-emerald-400">Available to Join</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-14 sm:mt-16 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 text-xs font-medium tracking-wider uppercase transition-colors"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
