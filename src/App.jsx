import { useEffect, useMemo, useRef, useState } from "react";

import Chapter1Section from "./pages/chapter/Chapter1";
import Chapter2Section from "./pages/chapter/Chapter2";
import Chapter3Section from "./pages/chapter/Chapter3";
import Chapter4Section from "./pages/chapter/Chapter4";
import Chapter5Section from "./pages/chapter/Chapter5";
import Chapter6Section from "./pages/chapter/Chapter6";
import Chapter7Section from "./pages/chapter/Chapter7";
import Chapter8Section from "./pages/chapter/Chapter8";
import Chapter9Section from "./pages/chapter/Chapter9";
import Chapter10Section from "./pages/chapter/Chapter10";
import Chapter11Section from "./pages/chapter/Chapter11";

export default function AssessmentPortfolio() {
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction to Professional Skills", body: sampleIntro },
      { id: "ch2", title: "CV & Cover Letter Writing", body: "" },
      { id: "ch3", title: "Job Hunting & Interview Skills", body: "" },
      { id: "ch4", title: "Portfolio Management", body: "" },
      { id: "ch5", title: "Meetings & Speaking Skills", body: "" },
      { id: "ch6", title: "Project Proposal Writing & Evaluation", body: "" },
      { id: "ch7", title: "Food Festival – Ralahami Kadé", body: "" },
      { id: "ch8", title: "Emotional Intelligence", body: "" },
      { id: "ch9", title: "Dining Etiquette & Table Manners", body: "" },
      //{ id: "ch10", title: "Dining & Business Etiquette", body: "" },
      //{ id: "ch11", title: "Research Writing", body: "" },
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

    chapters.forEach((c) => {
      if (sectionRefs.current[c.id]) obs.observe(sectionRefs.current[c.id]);
    });

    return () => obs.disconnect();
  }, [chapters]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const renderChapter = (id) => {
    switch (id) {
      case "ch1": return <Chapter1Section />;
      case "ch2": return <Chapter2Section />;
      case "ch3": return <Chapter3Section />;
      case "ch4": return <Chapter4Section />;
      case "ch5": return <Chapter5Section />;
      case "ch6": return <Chapter6Section />;
      case "ch7": return <Chapter7Section />;
      case "ch8": return <Chapter8Section />;
      case "ch9": return <Chapter9Section />;
      //case "ch10": return <Chapter10Section />;
      //case "ch11": return <Chapter11Section />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">

      {/* MOBILE TOP BAR */}
      <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur border-b border-slate-800 md:hidden">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-base font-semibold">Assessment Portfolio</h1>
          <button
            onClick={() => scrollTo("ch1")}
            className="text-xs text-indigo-300 underline"
          >
            Go to Start
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-24 grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* SIDEBAR */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky" style={{ top: "1.5rem" }}>
            <div className="mb-4 text-xs font-semibold uppercase text-slate-400">
              Assessment Portfolio
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 shadow-xl shadow-black/30">
              <div className="sidebar-scroll pr-2" style={{ maxHeight: "calc(100vh - 9rem)" }}>
                <nav className="space-y-3">
                  {chapters.map((c, idx) => (
                    <button
                      key={c.id}
                      onClick={() => scrollTo(c.id)}
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

        {/* CONTENT AREA */}
        <section className="md:col-span-9">
          {chapters.map((c, idx) => (
            <article
              key={c.id}
              id={c.id}
              ref={(el) => (sectionRefs.current[c.id] = el)}
              className="scroll-mt-24 bg-slate-900/70 border border-slate-800 rounded-2xl shadow-xl shadow-black/30 p-6 md:p-8 mb-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 space-y-4 md:space-y-0">
                <div className="md:flex-1">
                  {/*<h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-300 via-indigo-200 to-sky-200 bg-clip-text text-transparent mb-2">
                    {c.title}
                  </h2>*/}
                </div>
              </div>

              {/* 📌 YOUR CHAPTER COMPONENT RENDER */}
              <div className="mt-6 leading-7 text-slate-200">
                {renderChapter(c.id)}
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
      setPct((st / h) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 hidden md:flex items-center bg-slate-900/80 border border-slate-700 shadow-xl shadow-black/30 rounded-full px-3 py-2">
      <div className="h-2 w-40 rounded-full bg-slate-800 overflow-hidden mr-2">
        <div className="h-2 bg-gradient-to-r from-indigo-400 to-sky-400" style={{ width: pct + "%" }} />
      </div>
      <span className="text-xs text-slate-300">{Math.round(pct)}%</span>
    </div>
  );
}

const sampleIntro = `If you read the introduction ...`;
