"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is this coaching for?",
    a: "Refuse2LoseFIT is built for serious men and women who are ready to fully commit to their transformation. If you're looking for a quick fix or someone to hold your hand, this isn't for you. If you're ready to do the work and want elite-level guidance, you're in the right place.",
  },
  {
    q: "How is this different from other fitness coaches?",
    a: "We don't sell cookie-cutter programs. Every plan is custom-built around your body, lifestyle, schedule, and goals. You get real coaching with real accountability — not a PDF and a prayer.",
  },
  {
    q: "What results can I expect?",
    a: "Most clients see significant visible changes within 4–6 weeks. Our average client loses 18 pounds of fat while building muscle. Results vary, but our 92% success rate speaks for itself — and that's because we don't accept clients we don't believe we can transform.",
  },
  {
    q: "How does the application process work?",
    a: "Fill out the application form with your goals and current situation. We review every application personally and only accept clients we're confident we can deliver results for. If accepted, we'll schedule a 30-minute strategy call to map out your plan.",
  },
  {
    q: "Do I need a gym membership?",
    a: "Not necessarily. Our Online Coaching program can be run from home or the gym. Our 1:1 and Elite Hybrid programs are designed for clients with gym access, but we'll work with whatever equipment you have available.",
  },
  {
    q: "What's the investment?",
    a: "Coaching investment is discussed during your strategy call once you're accepted. Our programs are premium — this is not a $30/month app. It's elite coaching with elite results. If you're serious about transformation, the ROI speaks for itself.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <li className="border-b border-brand-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full text-left flex items-center justify-between gap-4 py-5 px-1 min-h-[64px] group"
      >
        <span className="font-bold text-white text-sm sm:text-base tracking-wide group-hover:text-brand-blue transition-colors">
          {q}
        </span>
        <span
          className={`text-brand-blue shrink-0 text-xl font-bold transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open && (
        <div id={id} role="region" className="faq-answer-open overflow-hidden">
          <p className="text-white/60 text-sm leading-relaxed pb-5 px-1">
            {a}
          </p>
        </div>
      )}
    </li>
  );
}

export default function FAQ() {
  return (
    <section
      className="bg-brand-black py-20 sm:py-28 px-4 sm:px-6"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto">
        {/* ── Header ── */}
        <header className="text-center mb-14">
          <p className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Got Questions
          </p>
          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight text-white">
            We've Got
            <br />
            <span className="text-brand-blue">Answers</span>
          </h2>
        </header>

        {/* ── Accordion ── */}
        <ul className="divide-y divide-brand-border border-t border-brand-border" role="list">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
