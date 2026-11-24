"use client";

import React from "react";
import { Award, ExternalLink, Sparkles, CheckCircle } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "MERN Stack Certification",
      issuer: "Webgurukul",
      focus: "Full-Stack Web Development",
      desc: "Comprehensive training covering MongoDB, Express.js, React.js, and Node.js for architecting end-to-end full stack web applications.",
      link: "https://drive.google.com/file/d/10bRa271IQ1qo8SKNDfVY1heBF8WHvbdA/view?usp=drive_link",
      badgeText: "View Certificate",
    },
    {
      title: "HTML & CSS Certification",
      issuer: "Sololearn",
      focus: "Frontend Fundamentals",
      desc: "Core grounding in semantic HTML5 markup, CSS3 styling, responsive page structures, and cross-browser styling techniques.",
      link: null,
      badgeText: "Verified Credential",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Continuous Learning</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Industry credentials validating full-stack and frontend development proficiency.
          </p>
        </div>

        {/* 2 Cert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                  <Award className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono font-semibold text-indigo-400 block mb-2">
                  {cert.issuer} &bull; {cert.focus}
                </span>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                  {cert.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/50 underline-offset-4"
                  >
                    <span>{cert.badgeText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {cert.badgeText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
