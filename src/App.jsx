import { useEffect, useMemo, useRef, useState } from "react";

// Tailwind v2/v3 compatible (no arbitrary values).
export default function AssessmentPortfolio() {
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction to Professional Skills", body: sampleIntro },
      { id: "ch2", title: "Teamwork & Collaboration", body: "Effective teamwork involves clear goals, defined roles, and open communication. Common tools include Kanban boards, daily stand-ups, and retrospectives." },
      { id: "ch3", title: "Communication Skills", body: "Active listening, concise writing, and confident presentations are core. Use the 7Cs: clear, concise, concrete, correct, coherent, complete, courteous." },
      { id: "ch4", title: "Leadership & Ethics", body: "Leadership blends vision with responsibility. Ethical behaviour drives trust and long-term outcomes." },
      { id: "ch5", title: "Problem Solving", body: "Define the problem, explore causes, generate options, test, and reflect. Tools: Fishbone, 5-Whys, Pareto." },
      { id: "ch6", title: "Time Management", body: "Plan → Prioritize → Protect focus. Use Pomodoro and time-boxing." },
      { id: "ch7", title: "Emotional Intelligence", body: "Self-awareness, self-regulation, empathy, motivation, social skills." },
      { id: "ch8", title: "Interview Prep", body: "STAR answers, portfolio evidence, and mock interviews." },
      { id: "ch9", title: "CV & Cover Letter", body: "Results-focused bullet points and tailored summaries." },
      { id: "ch10", title: "Dining & Business Etiquette", body: "Professional behaviour in formal settings." },
      { id: "ch11", title: "Research Writing", body: "Sources, citations, and avoiding plagiarism." },
    ],
    []
  );

  const [active, setActive] = useState(chapters[0].id);
  const sectionRefs = useRef({});
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    chapters.forEach((c) => sectionRefs.current[c.id] && obs.observe(sectionRefs.current[c.id]));
    return () => obs.disconnect();
  }, [chapters]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
      {/* Top bar (mobile only) */}
      <header className="sticky top-0 z-30 bg-slate-900 bg-opacity-80 backdrop-filter backdrop-blur border-b border-slate-800 md:hidden">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-base font-semibold tracking-tight text-slate-100">Assessment Portfolio</h1>
          <a
            href="#ch1"
            onClick={(e)=>{e.preventDefault();scrollTo("ch1")}}
            className="text-xs underline text-indigo-300 hover:text-indigo-200"
          >
            Go to Start
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-24 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky" style={{ top: "1.5rem" }}>
            <div className="mb-4 text-xs font-semibold tracking-wider uppercase text-slate-400">
              Assessment Portfolio
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 shadow-lg shadow-black/30">
              {/* independent scroll with thin bar */}
              <div className="sidebar-scroll pr-2" style={{ maxHeight: "calc(100vh - 9rem)" }}>
                <nav className="space-y-3">
                  {chapters.map((c, idx) => (
                    <button
                      key={c.id}
                      onClick={() => scrollTo(c.id)}
                      title={c.title}
                      className="w-full text-left"
                    >
                      <div
                        className={
                          "flex items-center justify-between rounded-full border px-4 py-2 transition " +
                          (active === c.id
                            ? "bg-slate-800 border-indigo-500 shadow-md shadow-indigo-900/40"
                            : "bg-slate-900 border-slate-700 hover:border-slate-500 hover:bg-slate-800")
                        }
                      >
                        <span className={"text-sm font-semibold " + (active === c.id ? "text-slate-100" : "text-slate-300")}>
                          Chapter
                        </span>
                        <span
                          className={
                            "h-8 w-8 grid place-items-center rounded-full border text-sm font-bold " +
                            (active === c.id
                              ? "bg-indigo-500 text-white border-indigo-500"
                              : "bg-slate-800 text-slate-200 border-slate-600")
                          }
                        >
                          {idx + 1}
                        </span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <section className="md:col-span-9">
          {chapters.map((c, idx) => (
            <article
              key={c.id}
              id={c.id}
              ref={(el) => (sectionRefs.current[c.id] = el)}
              className="scroll-mt-24 bg-slate-900/70 border border-slate-800 rounded-2xl shadow-xl shadow-black/30 p-6 md:p-8 mb-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:space-x-6 space-y-4 md:space-y-0">
                <div className="md:flex-1">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-indigo-300 via-indigo-200 to-sky-200 bg-clip-text text-transparent">
                    {idx === 0 ? "Introduction to Professional Skills" : c.title}
                  </h2>
                  <p className="text-slate-300">
                    {idx === 0
                      ? "Start here — same layout, new dark theme: glowing accents, glassy cards, and a sticky chapter rail."
                      : "Chapter overview"}
                  </p>
                </div>
                <div className="md:w-5/12 md:self-start">
                  <div className="w-full h-56 md:h-64 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden grid place-items-center text-slate-400 text-sm">
                    Add an image here
                  </div>
                </div>
              </div>

              <div className="mt-6 leading-7 text-slate-200">
                <p className="whitespace-pre-line">{c.body}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <ReadingProgress />
    </div>
  );
}

function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setPct(Math.min(100, Math.max(0, (st / h) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-6 right-6 hidden md:flex items-center bg-slate-900/80 border border-slate-700 shadow-xl shadow-black/30 rounded-full px-3 py-2">
      <div className="h-2 w-40 rounded-full bg-slate-800 overflow-hidden mr-2">
        <div className="h-2 bg-gradient-to-r from-indigo-400 to-sky-400" style={{ width: pct + "%" }} />
      </div>
      <span className="text-xs font-medium text-slate-300">{Math.round(pct)}%</span>
    </div>
  );
}

const sampleIntro = `If you read the introduction, the insight regarding the term 'Professional skills' had emerged that expressed how important it is to have clarity regarding this domain. To further exploration, the very first lecture was conducted by Miss Ishara Ravihara Weerasinghe encompassing almost all the aspects of professional skills.

The other terms for professional skills are soft skills or employability skills demonstrating the same meaning of non-technical, interpersonal abilities that are essential for success in the workplace. The technical skills would restrict their abilities to a particular sector but professional skills are not like that. They are transferable meaning that they can be applied across various roles and industries. For general examples, teamwork, problem-solving, adaptability, leadership and communication can be considered as employability skills. Indeed, workplace skills are divided into three classifications. They are technical skills, soft skills, and transferable skills.

The next topic is about the descriptions of values, beliefs, attitudes, and character…`;
