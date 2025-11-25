// src/pages/chapter/Chapter1.jsx
// Tailwind v2/v3 friendly (no arbitrary values). Simple English + overview + points + short paras + self-reflection.

import React from "react";
import psIntroBanner from "../../assets/ps_intro.jpg";

// If you already use ChapterLayout, uncomment the next line and wrap <Chapter1Section /> below with it.
// import ChapterLayout from "../../layouts/ChapterLayout.jsx";

const chips = [
  "Professional skills",
  "Employability",
  "Communication",
  "Teamwork",
  "Problem-solving",
  "Adaptability",
  "Time management",
  "Leadership",
  "Values",
  "Beliefs",
  "Attitudes",
  "Character",
  "Johari Window",
];

const chipStyles = {
  "Professional skills": {
    wrapper: "border-emerald-500 bg-emerald-900/60 text-emerald-50",
    dot: "bg-emerald-300",
  },
  Employability: {
    wrapper: "border-cyan-500 bg-cyan-900/60 text-cyan-50",
    dot: "bg-cyan-300",
  },
  Communication: {
    wrapper: "border-amber-500 bg-amber-900/60 text-amber-50",
    dot: "bg-amber-300",
  },
  Teamwork: {
    wrapper: "border-indigo-500 bg-indigo-900/60 text-indigo-50",
    dot: "bg-indigo-300",
  },
  "Problem-solving": {
    wrapper: "border-rose-500 bg-rose-900/60 text-rose-50",
    dot: "bg-rose-300",
  },
  Adaptability: {
    wrapper: "border-violet-500 bg-violet-900/60 text-violet-50",
    dot: "bg-violet-300",
  },
  "Time management": {
    wrapper: "border-sky-500 bg-sky-900/60 text-sky-50",
    dot: "bg-sky-300",
  },
  Leadership: {
    wrapper: "border-teal-500 bg-teal-900/60 text-teal-50",
    dot: "bg-teal-300",
  },
  Values: {
    wrapper: "border-fuchsia-500 bg-fuchsia-900/60 text-fuchsia-50",
    dot: "bg-fuchsia-300",
  },
  Beliefs: {
    wrapper: "border-lime-500 bg-lime-900/60 text-lime-50",
    dot: "bg-lime-300",
  },
  Attitudes: {
    wrapper: "border-pink-500 bg-pink-900/60 text-pink-50",
    dot: "bg-pink-300",
  },
  Character: {
    wrapper: "border-slate-500 bg-slate-900/60 text-slate-50",
    dot: "bg-slate-300",
  },
  "Johari Window": {
    wrapper: "border-amber-500 bg-amber-900/60 text-amber-50",
    dot: "bg-amber-300",
  },
};

function Chip({ label }) {
  const s =
    chipStyles[label] || {
      wrapper: "border-gray-500 bg-gray-900/60 text-gray-50",
      dot: "bg-gray-300",
    };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${s.wrapper}`}
    >
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      {label}
    </span>
  );
}

function SectionCard({ tone = "emerald", title, children }) {
  const tones = {
    emerald: {
      wrap: "border-emerald-500 bg-emerald-900/30",
      title: "text-emerald-100",
    },
    cyan: {
      wrap: "border-cyan-500 bg-cyan-900/30",
      title: "text-cyan-100",
    },
    amber: {
      wrap: "border-amber-500 bg-amber-900/30",
      title: "text-amber-100",
    },
    violet: {
      wrap: "border-violet-500 bg-violet-900/30",
      title: "text-violet-100",
    },
    slate: {
      wrap: "border-slate-600 bg-slate-900/70",
      title: "text-slate-100",
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

export default function Chapter1Section() {
  return (
    // If using ChapterLayout, wrap children with it instead of the outer div
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        {/* Topic banner */}
        <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <img
            src={psIntroBanner}
            alt="Illustration of professional skills and teamwork"
            className="h-40 w-full object-cover md:h-56"
          />
        </div>

        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 01
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Introduction to Professional Skills
        </h1>
        <p className="mt-2 text-slate-300">
          Simple overview + important bullet points + short explanations + a
          self-reflection at the end.
        </p>

        {/* Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Assessment Weights */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <SectionCard tone="amber" title="Continuous Assessment (100%)">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Assignment 1 (30%)</span> — CV,
              Cover Letter, Mock Interview
            </li>
            <li>
              <span className="font-semibold">Assignment 2 (20%)</span> — Food
              Festival &amp; Report
            </li>
            <li>
              <span className="font-semibold">Assignment 3 (50%)</span> —
              Self-Reflective Portfolio &amp; Presentation
            </li>
          </ul>
          <p className="mt-2 text-sm text-slate-300">
            <span className="font-medium">Attendance:</span> Compulsory •{" "}
            <span className="font-medium">Enrolment key:</span> PS25M#
          </p>
        </SectionCard>
        <SectionCard
          tone="cyan"
          title="What are Professional / Employability Skills?"
        >
          <p>
            Non-technical, people-focused skills that help us succeed at work.
            They are <span className="font-semibold">transferable</span> across
            roles and industries.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Communication</li>
            <li>Teamwork &amp; collaboration</li>
            <li>Problem-solving &amp; critical thinking</li>
            <li>Adaptability &amp; flexibility</li>
            <li>Time management</li>
            <li>Leadership</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Classifying Workplace Skills">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Technical skills:</span>{" "}
              job-specific tools &amp; methods.
            </li>
            <li>
              <span className="font-semibold">Soft skills:</span>{" "}
              communication, teamwork, ethics.
            </li>
            <li>
              <span className="font-semibold">Transferable skills:</span> useful
              anywhere (e.g., problem-solving).
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Values, Beliefs, Attitudes, Character */}
      <div className="space-y-4 mb-6">
        <SectionCard title="Values, Beliefs, Attitudes, and Character">
          <p className="mb-2">
            These explain <em>why</em> we act the way we do at work.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">Values</h4>
              <p className="mb-2">
                Core principles that guide choices. They act like a moral
                compass.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Honesty, Integrity, Respect</li>
                <li>Responsibility, Compassion, Fairness</li>
                <li>Courage, Excellence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Beliefs</h4>
              <p className="mb-2">
                What we think is true about ourselves and the world.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Self-efficacy, Growth mindset, Optimism</li>
                <li>Locus of control, Self-worth</li>
                <li>Prejudices, Fatalism (to be challenged)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Attitudes</h4>
              <p className="mb-2">
                Positive or negative leanings that shape our behaviour.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Positive attitude, Open-mindedness, Tolerance</li>
                <li>Confidence, Empathy</li>
                <li>Avoid: prejudice, cynicism</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Character</h4>
              <p className="mb-2">
                Consistent moral and ethical behaviour over time.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Trustworthiness, Respectfulness</li>
                <li>Responsibility, Caring, Citizenship</li>
                <li>Fairness, Courage</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard tone="violet" title="Johari Window (1955)">
          <p className="mb-2">
            A simple model to understand self-awareness in relationships.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Open</span> (known to self &amp;
              others)
            </li>
            <li>
              <span className="font-semibold">Blind</span> (others see, I don’t)
            </li>
            <li>
              <span className="font-semibold">Hidden</span> (I know, others
              don’t)
            </li>
            <li>
              <span className="font-semibold">Unknown</span> (no one knows yet)
            </li>
          </ul>
          <p className="mt-2">
            Goal: grow the <span className="font-semibold">Open</span> area by
            sharing and seeking feedback.
          </p>
        </SectionCard>

        <SectionCard tone="slate" title="Tips to Develop Professional Skills">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Continuous learning:</span> short
              courses, workshops, reading.
            </li>
            <li>
              <span className="font-semibold">Practice:</span> apply skills in
              projects, clubs, part-time work.
            </li>
            <li>
              <span className="font-semibold">Feedback:</span> ask
              mentors/peers; act on suggestions.
            </li>
            <li>
              <span className="font-semibold">Embrace challenges:</span> try new
              tasks; reflect after.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 01)">
        <p>
          I learned that professional skills are as important as technical
          knowledge. Good communication, teamwork, and time management make
          study and project work smoother. I also noticed some blind spots about
          my attitude under pressure. My next steps are: practice clear writing,
          join more group tasks to build collaboration, and ask for feedback to
          improve my open area in the Johari Window.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage examples:
// 1) Standalone page: export default Chapter1Section and render in a route.
// 2) Inside your AllChapters page, import { default as Chapter1Section } from './Chapter1.jsx' and place <Chapter1Section />.
