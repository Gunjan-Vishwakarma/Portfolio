"use client";

import React from "react";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Orb 1: Violet / Indigo Top Right */}
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-indigo-600/35 via-purple-600/20 to-transparent blur-[120px] animate-pulse" />

      {/* Orb 2: Cyan / Blue Bottom Left */}
      <div className="absolute top-[45%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/15 to-transparent blur-[130px]" />

      {/* Orb 3: Subtle Emerald / Cyan Bottom Right */}
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-indigo-500/20 via-cyan-500/15 to-transparent blur-[120px]" />
    </div>
  );
}
