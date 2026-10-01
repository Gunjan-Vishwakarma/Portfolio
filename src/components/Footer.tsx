"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070e]/90 backdrop-blur-2xl py-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="#hero"
              className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-white mb-2"
            >
              <span className="flex items-center justify-center px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-mono text-xs rounded-md shadow-md shadow-indigo-500/30">
                &lt;GV/&gt;
              </span>
              <span>
                Gunjan<span className="text-cyan-400">.dev</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Building responsive production user interfaces with React.js, Next.js, and modern styling.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Gunjan Vishwakarma. Built with Next.js, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
