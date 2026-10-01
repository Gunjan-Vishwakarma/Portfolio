"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Send } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "experience", "projects", "education", "certifications", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070913]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5 font-heading text-lg sm:text-xl font-bold tracking-tight text-white group"
        >
          <span className="flex items-center justify-center px-2 py-1 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-mono text-xs sm:text-sm rounded-md shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            &lt;GV/&gt;
          </span>
          <span>
            Gunjan<span className="text-cyan-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-indigo-500/20 shadow-sm border border-indigo-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3.5">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 border border-white/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
          >
            <span>Let&apos;s Talk</span>
            <Send className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e1c]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 flex flex-col gap-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-white/[0.06] px-4 py-2.5 rounded-xl font-medium text-base transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-xl text-sm"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}
