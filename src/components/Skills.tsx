"use client";

import React from "react";
import {
  Code,
  Network,
  Database,
  Wrench,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      desc: "Creating reactive, accessible, high-performance UIs",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      color: "from-cyan-500/20 to-indigo-500/20",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Web Design",
        "Component Architecture",
        "SEO Best Practices",
        "Context API",
      ],
    },
    {
      title: "API Integration & Backend",
      desc: "Data orchestration, authentication, and server endpoints",
      icon: <Network className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/20 to-purple-500/20",
      skills: [
        "REST APIs",
        "JWT Authentication",
        "CRUD Operations",
        "Node.js",
        "Express.js",
        "Secured Endpoints",
      ],
    },
    {
      title: "Databases",
      desc: "Relational and document storage systems",
      icon: <Database className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/20",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "SQL Queries",
        "Data Modeling",
      ],
    },
    {
      title: "Tools & Practices",
      desc: "Modern toolchain, testing, and team collaboration",
      icon: <Wrench className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Peer Code Reviews",
        "API Debugging",
      ],
    },
  ];

  const competencies = [
    { name: "React.js & Next.js UI Engineering", level: "90%" },
    { name: "JavaScript (ES6+) & Modern Web Standards", level: "88%" },
    { name: "Tailwind CSS & Responsive Layouts", level: "92%" },
    { name: "REST API Integration & JWT Authentication", level: "85%" },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Core Skills & Arsenal
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Languages, frameworks, databases, and workflows I use to build scalable products.
          </p>
        </div>

        {/* 4 Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} border border-white/15 flex items-center justify-center shadow-lg`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400">{cat.desc}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="glass-pill px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-400/40 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Progress */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl max-w-4xl mx-auto">
          <h3 className="font-heading text-xl font-bold text-white text-center mb-8">
            Proficiency & Technical Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {competencies.map((comp, cIdx) => (
              <div key={cIdx} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-200">{comp.name}</span>
                  <span className="text-cyan-400 font-mono">{comp.level}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/[0.06] border border-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-md shadow-cyan-400/30 transition-all duration-1000"
                    style={{ width: comp.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
