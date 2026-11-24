"use client";

import React from "react";
import { GraduationCap, Landmark, Sparkles, Award } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "G H Raisoni College of Engineering and Management",
      location: "Nagpur, India",
      period: "Aug 2023 – Jun 2025",
      desc: "Specialized in Advanced Web Technologies, Software Engineering, Database Systems, Data Structures, Algorithms, and Distributed Application Development.",
      badge: "Post Graduate Degree",
    },
    {
      degree: "Bachelor of Commerce in Computer Application (BCCA)",
      institution: "Tirpude Institute of Management Education",
      location: "Nagpur, India",
      period: "Aug 2020 – May 2023",
      desc: "Core foundation in Computer Programming, Database Management, Web Fundamentals, Business Logic, and Information Technology Systems.",
      badge: "Graduate Degree",
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My academic degrees and foundation in computer applications.
          </p>
        </div>

        {/* 2 Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono font-semibold text-cyan-400 block mb-2">
                  {edu.period}
                </span>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>

                <h4 className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-4">
                  <Landmark className="w-4 h-4 text-indigo-400" />
                  <span>
                    {edu.institution} &bull; <span className="text-slate-400">{edu.location}</span>
                  </span>
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {edu.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <Award className="w-3.5 h-3.5" />
                  {edu.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
