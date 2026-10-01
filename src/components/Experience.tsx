"use client";

import React from "react";
import { Briefcase, Calendar, Building2, Sparkles, CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Mahir Investment Advisors Pvt. Ltd.",
      type: "Fintech",
      period: "Apr 2026 – Sept 2026",
      desc: "Building the frontend of a live stock market analysis platform with Next.js, focused on responsive, reusable UI components and real-time data streaming.",
      achievements: [
        "Building the frontend of a live stock market analysis platform with Next.js, focused on responsive, reusable UI components.",
        "Integrating frontend interfaces with backend REST APIs for real-time market data display and charting.",
        "Collaborating with the engineering team through Git-based version control and active peer code reviews.",
        "Implementing new UI features, fixing bugs, and improving frontend rendering performance.",
      ],
      tags: ["Next.js", "React.js", "JavaScript (ES6+)", "REST APIs", "Tailwind CSS", "Git"],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Ambe AI Technologies Pvt. Ltd.",
      type: "AI Tech",
      period: "Jan 2025 – Jun 2025",
      desc: "Designed and implemented mobile-first responsive web applications with React.js, secured endpoints with JWT authentication, and validated APIs with Postman.",
      achievements: [
        "Designed and implemented mobile-first, responsive UIs with React.js and modern CSS.",
        "Built reusable React components and managed client-side state using the Context API.",
        "Integrated frontend with secured RESTful APIs using JWT authentication.",
        "Tested and debugged API integrations using Postman to verify frontend functionality.",
      ],
      tags: ["React.js", "Context API", "JWT Auth", "REST APIs", "Postman", "Node.js"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on professional experience delivering production software.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l-2 border-indigo-500/30 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#070913] shadow-lg shadow-cyan-400/50 group-hover:scale-125 transition-transform" />

              {/* Glass Card */}
              <div className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-3xl">
                {/* Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-semibold text-cyan-400">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                    {exp.type}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {exp.role}
                </h3>
                <h4 className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 mb-5">
                  <Building2 className="w-4 h-4 text-indigo-400" />
                  <span>{exp.company}</span>
                </h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
