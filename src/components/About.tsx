"use client";

import React from "react";
import { Layers, ShieldCheck, Smartphone, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    { number: "2+", label: "Internship Roles", note: "Fintech & AI Technologies" },
    { number: "100%", label: "Responsive Layouts", note: "Mobile-first & Accessible" },
    { number: "10+", label: "Core Proficiencies", note: "React, Next.js, Node, SQL" },
    { number: "1", label: "Live Fintech App", note: "Mahir Screener in Production" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Passionate About Creating High-Impact Web Apps
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Bridging user-centric design with performant, production-ready frontend engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Card */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-5 leading-snug">
                Frontend-focused Software Developer with hands-on production experience.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                I am a Software Developer based in <strong className="text-white">Pune, India</strong> with
                practical experience in building responsive, production user interfaces using{" "}
                <strong className="text-cyan-400">React.js</strong> and{" "}
                <strong className="text-cyan-400">Next.js</strong>.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Currently contributing to the frontend of <strong className="text-white">Mahir Screener</strong>, a
                live stock market analysis platform (Fintech). I translate financial metrics and ratios
                into responsive, reusable UI components, data tables, and dynamic charts integrated with backend REST APIs.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                With a strong grounding in modern JavaScript (ES6+), Tailwind CSS, state management via the Context API,
                and Git-based team collaboration, I hold an <strong className="text-white">MCA degree</strong> and am eager
                to contribute to high-performing software engineering teams.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/10">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-300 shadow-lg shadow-indigo-500/10">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Component UI</h4>
                  <p className="text-xs text-slate-400">Reusable, modular design systems in React & Next.js.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/10">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Secure APIs</h4>
                  <p className="text-xs text-slate-400">RESTful integrations with JWT authentication & Postman testing.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-500/10">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Mobile-First</h4>
                  <p className="text-xs text-slate-400">Pixel-perfect responsiveness with modern Tailwind CSS.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-center items-center text-center relative group"
              >
                <span className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </span>
                <p className="text-sm font-bold text-slate-200 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-400">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
