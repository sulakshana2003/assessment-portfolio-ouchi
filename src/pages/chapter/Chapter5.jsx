// src/pages/chapter/Chapter5.jsx
// Tailwind simple theme. Chapter: Research Paper Writing.

import React from "react";
import researchBanner from "../../assets/rp.jpg"; // 🖼️ banner added here

const chips = [
  "Overview",
  "Mastering Research",
  "Research Process",
  "Real-life Research",
  "Paper Components",
  "8-Step Method",
  "Guidelines",
  "Reflection",
];

function Chip({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-500 bg-emerald-900/60 text-emerald-50">
      <span className="h-2 w-2 rounded-full bg-emerald-300" />
      {label}
    </span>
  );
}

function SectionCard({ title, tone = "emerald", children }) {
  const tones = {
    emerald: {
      wrap: "border-emerald-500 bg-emerald-900/30",
      title: "text-emerald-100",
    },
    cyan: { wrap: "border-cyan-500 bg-cyan-900/30", title: "text-cyan-100" },
    amber: {
      wrap: "border-amber-500 bg-amber-900/30",
      title: "text-amber-100",
    },
    slate: {
      wrap: "border-slate-600 bg-slate-900/70",
      title: "text-slate-100",
    },
    violet: {
      wrap: "border-violet-500 bg-violet-900/30",
      title: "text-violet-100",
    },
  };
  const t = tones[tone] || tones.slate;
  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>
        {title}
      </h3>
      <div className="text-slate-200 leading-7 text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function Chapter5Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        {/* Banner Image */}
        <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <img
            src={researchBanner}
            alt="Research paper and academic study concept"
            className="h-40 w-full object-cover md:h-56"
          />
        </div>

        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 05
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Research Paper Writing
        </h1>

        <p className="mt-2 text-slate-300">
          Learn how to write a clear, structured research paper using academic
          sources, proper methods, and evidence-based writing.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Overview */}
      <SectionCard tone="emerald" title="Overview">
        <p>
          This session was conducted by <strong>Ms. Ishadi Nilawerese</strong>.
          The lecture focused on structures of research writing, how to present
          findings, and how to follow academic rules when preparing a research
          paper.
        </p>
      </SectionCard>

      {/* Mastering Research */}
      <SectionCard tone="cyan" title="Mastering Research Writing">
        <p>
          Research writing requires collecting information carefully, analyzing
          it, and presenting results in a professional and convincing way. It
          improves academic skills and supports knowledge-based decision making.
        </p>
      </SectionCard>

      {/* Process */}
      <SectionCard tone="amber" title="Research Writing Process">
        <ul className="list-disc pl-5 space-y-1">
          <li>Topic Selection</li>
          <li>Literature Review</li>
          <li>Methodology</li>
          <li>Data Collection</li>
          <li>Analysis</li>
          <li>Writing &amp; Presentation</li>
        </ul>
      </SectionCard>

      {/* Real life research */}
      <SectionCard tone="violet" title="Real-Life Examples of Research">
        <ul className="list-disc pl-5 space-y-1">
          <li>Comparing smartphones before buying</li>
          <li>Testing algorithms in IT development</li>
          <li>Observing customer behavior in shops</li>
          <li>Measuring student preferences and needs</li>
        </ul>
      </SectionCard>

      {/* Components */}
      <SectionCard tone="cyan" title="Key Components of a Research Paper">
        <ul className="list-disc pl-5 space-y-1">
          <li>Title</li>
          <li>Author Information</li>
          <li>Table of Contents</li>
          <li>Declaration</li>
          <li>Acknowledgements</li>
          <li>Abstract</li>
          <li>Introduction</li>
          <li>Literature Review</li>
          <li>Methodology</li>
          <li>Results &amp; Discussion</li>
          <li>Conclusion</li>
          <li>References</li>
        </ul>
      </SectionCard>

      {/* 8 steps */}
      <SectionCard tone="slate" title="8 Steps to Write a Research Paper">
        <ol className="list-decimal pl-5 space-y-1">
          <li>Carry out research</li>
          <li>Choose a good topic</li>
          <li>Write down useful notes</li>
          <li>Brainstorm and outline ideas</li>
          <li>Write prospectus &amp; outline</li>
          <li>Write the introduction properly</li>
          <li>Develop the main body clearly</li>
          <li>End with a strong conclusion</li>
        </ol>
      </SectionCard>

      {/* Guidelines */}
      <SectionCard
        tone="amber"
        title="Guidelines for Effective Research Writing"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>Use clear, simple, and formal writing.</li>
          <li>Avoid confusing or unnecessary words.</li>
          <li>Explain technical or scientific terms clearly.</li>
          <li>Support arguments using credible sources.</li>
          <li>Follow required academic formatting and rules.</li>
          <li>Proofread carefully before submitting.</li>
        </ul>
      </SectionCard>

      {/* Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 05)">
        <p>
          I completed a research study titled
          <strong>
            {" "}
            “The Impact of Emotional Intelligence on Team Performance.”{" "}
          </strong>
          This helped me learn how to find reliable sources, follow academic
          structures, and present findings in a formal and professional way.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter5Section from "./Chapter5.jsx" and render <Chapter5Section />
