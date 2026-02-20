"use client";

import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel, SectionHeading } from "@/components/ui/index";
import FinalCTA from "@/components/sections/FinalCTA";
import Link from "next/link";

const faqs = [
  {
    q: "Do I need access to a gym?",
    a: "No. We design programs for both gym and home settings. During your application, you'll tell us your equipment availability and we'll build your plan around it. Results don't require a gym — they require consistency.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients notice visible changes within 2–3 weeks of starting their plan — increased energy, better sleep, early visual shifts. Significant physical transformation typically becomes clear by week 4–6. Our average client loses 18 lbs in their first 10 weeks of GRIND coaching.",
  },
  {
    q: "What if I have injuries or physical limitations?",
    a: "We work with your body, not against it. During onboarding, you'll detail any injuries, limitations, or medical conditions. Your program will be fully adapted to keep you safe while still pushing your limits intelligently. We've successfully coached clients with knee injuries, back issues, post-surgery recovery, and more.",
  },
  {
    q: "What does a typical week look like?",
    a: "For GRIND clients: 4–6 training sessions (45–60 min each), daily nutrition tracking, and a weekly check-in with your coach. You'll also have access to our coaching chat for questions anytime. For ELITE clients, you get all of this plus bi-weekly 1-on-1 strategy calls.",
  },
  {
    q: "Do you handle nutrition coaching too?",
    a: "Yes — and we consider it non-negotiable. Training accounts for about 30% of your results. Nutrition is the other 70%. Every program includes a personalized nutrition framework with target macros, meal timing guidance, and flexible food selection so it fits your actual life.",
  },
  {
    q: "Is this fully online?",
    a: "Yes. Refuse2LoseFIT is a fully remote coaching service. All communication happens through our coaching platform, video calls, and direct messaging. This means you get elite coaching regardless of where you live — and our clients are spread across multiple countries.",
  },
  {
    q: "How does payment work?",
    a: "The 7-Day Challenge is completely free. The GRIND program is billed monthly at $97/month with no lock-in contract. ELITE coaching is custom-priced based on your goals and package length — apply to discuss options. All payments are processed securely through Stripe.",
  },
  {
    q: "Can I cancel anytime?",
    a: "For the GRIND program: yes, you can cancel anytime before your next billing cycle with no penalties. For ELITE coaching, we work on agreed package lengths to protect the integrity of your transformation — we'll discuss terms during your strategy call.",
  },
  {
    q: "What makes this different from other online coaches?",
    a: "Most online programs are generic PDFs with your name slapped on top. We build everything from scratch for your body, your goals, your schedule, and your lifestyle. We combine elite programming, proven nutrition protocols, and real accountability — not an algorithm, not a chatbot, not a templated PDF.",
  },
  {
    q: "What if I don't get results?",
    a: "In 6+ years and 500+ clients, the single common thread among those who don't hit their goals is inconsistency. Our job is to make consistency as easy as possible. We track everything, we adjust weekly, and we're in your corner the whole time. If you show up and follow the system, results are inevitable.",
  },
];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 40}>
      <div className={`border-b border-white/[0.06] transition-colors duration-300 ${open ? "bg-[#0d0d12]" : ""}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left group"
        >
          <span className={`font-display font-bold text-[18px] uppercase tracking-wide transition-colors duration-200 ${open ? "text-[#3d8bff]" : "text-white group-hover:text-[#3d8bff]"}`}>
            {q}
          </span>
          <span
            className={`flex-shrink-0 w-6 h-6 border border-[rgba(26,111,255,0.3)] flex items-center justify-center text-[#3d8bff] transition-all duration-300 ${open ? "rotate-45 bg-[#1a6fff] border-[#1a6fff]" : ""}`}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-350 ease-in-out"
          style={{ maxHeight: open ? "400px" : "0px" }}
        >
          <p className="px-8 pb-6 text-muted text-[15px] leading-[1.8]">{a}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        heading={
          <>
            GOT{" "}
            <span className="text-[#3d8bff]">QUESTIONS?</span>
            <br />
            WE GOT ANSWERS.
          </>
        }
        sub="Every objection. Answered straight. No fluff."
      />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
        <div className="max-w-[900px] mx-auto">
          <AnimatedSection className="mb-12">
            <SectionLabel>Common Questions</SectionLabel>
            <SectionHeading>
              FREQUENTLY
              <br />
              <span className="text-[#3d8bff]">ASKED.</span>
            </SectionHeading>
          </AnimatedSection>

          <div className="border border-white/[0.06] bg-[#0a0a10]">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <AnimatedSection delay={200} className="mt-16 border border-[rgba(26,111,255,0.2)] bg-[#0d1020] p-10 text-center">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#3d8bff] mb-3">
              Still have questions?
            </p>
            <h3 className="font-display font-black text-[28px] uppercase mb-4">
              Let&apos;s talk directly.
            </h3>
            <p className="text-muted text-[14px] mb-8">
              Book a free 15-minute call and we&apos;ll answer everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="border border-[rgba(26,111,255,0.35)] text-[#3d8bff] hover:bg-[#1a6fff] hover:text-white font-display font-black text-[13px] tracking-[0.12em] uppercase px-8 py-4 clip-btn transition-all duration-250"
              >
                Contact Us
              </Link>
              <Link
                href="/apply"
                className="bg-[#1a6fff] hover:bg-[#3d8bff] text-white font-display font-black text-[13px] tracking-[0.12em] uppercase px-8 py-4 clip-btn transition-all duration-250 hover:shadow-[0_8px_32px_rgba(26,111,255,0.4)]"
              >
                Apply Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
