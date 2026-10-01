"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  LineChart,
  ListTodo,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "mahir-screener",
      title: "Mahir Screener — Stock Market Analysis Platform",
      category: "frontend",
      badge: "Live Production • Fintech",
      period: "Apr 2026 – Sept 2026",
      desc: "A screener-style stock market analysis platform for browsing, filtering, and comparing stocks with real-time financial metrics and ratios.",
      points: [
        "Building frontend screens for browsing and filtering stocks by financial metrics.",
        "Developing reusable UI components for data tables, charts, and stock detail views.",
        "Integrating frontend views with backend REST APIs to display real-time and historical market data.",
      ],
      tags: ["Next.js", "React.js", "REST APIs", "Tailwind CSS", "JavaScript (ES6+)"],
      icon: <LineChart className="w-10 h-10 text-cyan-300" />,
      gradient: "from-cyan-600/60 via-indigo-600/60 to-purple-700/60",
      liveLink: "https://www.mahirscreener.com/",
      githubLink: null,
    },
    {
      id: "taskmanager-mern",
      title: "TaskManager App — Multi-User MERN Suite",
      category: "fullstack",
      badge: "Full-Stack • MERN",
      period: "Jul 2025",
      desc: "A full-stack task management application supporting multi-user authentication, checklist workflows, and admin-driven delegation.",
      points: [
        "Enabled admins to create, assign, and manage tasks with due dates, priorities, and checklists.",
        "Automated dynamic task status updates based on checklist completion progress.",
        "Added downloadable task reports and secure role-based JWT authentication.",
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      icon: <ListTodo className="w-10 h-10 text-purple-300" />,
      gradient: "from-purple-600/60 via-indigo-600/60 to-blue-700/60",
      liveLink: null,
      githubLink: "https://github.com/Gunjan-Vishwakarma/",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Projects & Applications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world production platforms and full-stack software I have engineered.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { id: "all", label: "All Projects" },
            { id: "frontend", label: "Frontend & Next.js" },
            { id: "fullstack", label: "Full-Stack MERN" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 border border-white/20"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10 hover:bg-white/[0.08]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner */}
                <div
                  className={`h-48 relative flex items-center justify-center bg-gradient-to-r ${project.gradient} border-b border-white/10 overflow-hidden`}
                >
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 drop-shadow-2xl">
                    {project.icon}
                  </div>
                  <span className="absolute top-4 right-4 bg-[#070913]/80 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-slate-200">
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Links */}
                    <div className="flex items-center gap-2 shrink-0">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white hover:bg-indigo-500/30 flex items-center justify-center transition-colors"
                          title="View GitHub Repository"
                          aria-label="GitHub Link"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500 flex items-center justify-center transition-colors shadow-lg shadow-cyan-500/20"
                          title="Visit Live Application"
                          aria-label="Live Demo Link"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="px-8 pb-8 pt-2">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-indigo-500/10 border border-indigo-500/25 text-indigo-300"
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
