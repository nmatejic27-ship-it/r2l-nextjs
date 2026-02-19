import { X } from "lucide-react";
import { problemPoints } from "@/lib/content";

export default function Problem() {
  return (
    <section
      className="px-5 sm:px-10 py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(11,31,77,0.15), transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-label">The Problem</p>
        <h2 className="section-h2">
          You&apos;ve Tried.
          <br />
          Nothing Stuck.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-14 items-start">
          {/* Problem list */}
          <ul className="flex flex-col gap-5 list-none m-0 p-0">
            {problemPoints.map((point, i) => (
              <li key={i} className="flex gap-4 items-start">
                <X
                  size={20}
                  className="flex-shrink-0 mt-1"
                  style={{ color: "#ef4444", opacity: 0.8 }}
                  aria-hidden
                />
                <span
                  className="text-base leading-relaxed font-light"
                  style={{ color: "var(--gray)" }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Callout */}
          <div
            className="relative overflow-hidden p-10"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            {/* Decorative quote */}
            <span
              className="font-display absolute top-[-30px] right-5 leading-none pointer-events-none select-none"
              style={{
                fontSize: "200px",
                color: "rgba(30,79,255,0.06)",
              }}
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote
              className="font-heading text-xl font-semibold leading-relaxed text-white mb-5"
              style={{ position: "relative" }}
            >
              &ldquo;The difference between people who transform and those who
              don&apos;t isn&apos;t motivation — it&apos;s having the right
              system and someone who won&apos;t let you quit.&rdquo;
            </blockquote>
            <cite
              className="font-heading text-xs font-semibold tracking-widest uppercase not-italic"
              style={{ color: "var(--gray)" }}
            >
              — REFUSE2LOSEFIT Coaching Philosophy
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
