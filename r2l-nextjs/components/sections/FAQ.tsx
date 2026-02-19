"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section
      id="faq"
      className="px-5 sm:px-10 py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(11,31,77,0.15), transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p
          className="font-heading text-xs font-bold tracking-[0.22em] uppercase mb-4 flex items-center justify-center gap-2.5"
          style={{ color: "var(--accent)" }}
        >
          Common Questions
        </p>
        <h2 className="section-h2">
          Every Objection.
          <br />
          Answered Honestly.
        </h2>

        <div className="max-w-3xl mx-auto mt-14 flex flex-col gap-0.5 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="overflow-hidden transition-all duration-300"
                style={{
                  background: "var(--card-bg)",
                  border: `1px solid ${isOpen ? "rgba(30,79,255,0.35)" : "var(--border)"}`,
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-5 px-7 py-6 text-left transition-colors duration-200"
                  style={{
                    background: "none",
                    border: "none",
                    color: isOpen ? "white" : "var(--white)",
                    cursor: "pointer",
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                >
                  {faq.q}
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      border: "1px solid rgba(30,79,255,0.3)",
                      color: "var(--accent)",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      background: isOpen
                        ? "rgba(30,79,255,0.15)"
                        : "transparent",
                    }}
                    aria-hidden
                  >
                    <Plus size={13} />
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <div
                    className="px-7 pb-6 text-base leading-relaxed font-light"
                    style={{ color: "var(--gray)" }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
