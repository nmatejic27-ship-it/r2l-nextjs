import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel, SectionHeading, GlowCard } from "@/components/ui/index";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Three tiers of elite transformation coaching. From our free 7-Day Discipline Challenge to bespoke 1-on-1 ELITE coaching.",
};

const programs = [
  {
    id: "challenge",
    tier: "Free — Entry Level",
    name: "7-Day Discipline Challenge",
    tagline: "Your first step to transformation",
    price: "FREE",
    priceNote: "No credit card required",
    who: "New to structured training, or want to test our methodology before committing.",
    commitment: "20–40 min/day, 7 days",
    outcomes: [
      "Establish a training habit",
      "Learn the core discipline framework",
      "See what real results feel like in 1 week",
      "Build momentum for your full transformation",
    ],
    includes: [
      "7 full daily workouts (home or gym)",
      "Nutrition framework document",
      "Daily mindset challenges",
      "Access to private community",
      "Email support",
    ],
    cta: "Start Free",
    href: "/apply?program=challenge",
    featured: false,
  },
  {
    id: "grind",
    tier: "Core Program",
    name: "30-Day GRIND Program",
    tagline: "Serious results, proven system",
    price: "$97",
    priceNote: "Per month, cancel anytime",
    who: "Committed individuals who want a full training + nutrition system with real accountability.",
    commitment: "45–60 min/day, 4–6 days/week",
    outcomes: [
      "8–18 lbs fat loss in 30 days",
      "Visible muscle definition",
      "Sustainable habits installed",
      "Complete metabolic transformation",
    ],
    includes: [
      "Personalized 30-day training plan",
      "Custom macro-based nutrition plan",
      "Weekly check-in + adjustments",
      "24/7 coaching chat access",
      "Progress tracking dashboard",
      "Monthly strategy review call",
    ],
    cta: "Apply Now",
    href: "/apply?program=grind",
    featured: true,
    badge: "Most Popular",
  },
  {
    id: "elite",
    tier: "Premium — High Ticket",
    name: "ELITE 1-on-1 AI Coaching",
    tagline: "The highest level of transformation",
    price: "Custom",
    priceNote: "Apply to discuss investment",
    who: "Driven individuals who want the absolute best — full customization, direct access, elite results.",
    commitment: "Fully built around your schedule",
    outcomes: [
      "Complete physical transformation",
      "Elite performance optimization",
      "Lifestyle and identity upgrade",
      "Results that last a lifetime",
    ],
    includes: [
      "Fully bespoke training program",
      "Advanced nutrition + supplement protocol",
      "Bi-weekly 1-on-1 strategy calls",
      "Direct coach phone/DM access",
      "AI-assisted progress analytics",
      "Lifestyle + sleep optimization",
      "Mindset + accountability system",
      "Unlimited plan adjustments",
    ],
    cta: "Apply for Elite",
    href: "/apply?program=elite",
    featured: false,
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        label="Programs"
        heading={
          <>
            CHOOSE YOUR{" "}
            <span className="text-[#3d8bff]">LEVEL.</span>
          </>
        }
        sub="Three precision-built tiers. One goal: your complete transformation. No filler, no fluff."
      />

      {/* Programs */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
        <div className="max-w-[1400px] mx-auto space-y-[2px]">
          {programs.map((prog, i) => (
            <AnimatedSection key={prog.id} delay={i * 100} id={prog.id}>
              <GlowCard featured={prog.featured}>
                {prog.badge && (
                  <div className="absolute top-5 right-5 bg-[#1a6fff] font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 text-white z-20">
                    {prog.badge}
                  </div>
                )}
                <div className="p-10 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                  {/* Left: info */}
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#3d8bff] mb-3 block">
                      {prog.tier}
                    </span>
                    <h2 className="font-display font-black text-[32px] md:text-[40px] uppercase leading-[1.0] tracking-wide mb-4">
                      {prog.name}
                    </h2>
                    <p className="text-muted text-[14px] mb-6">{prog.tagline}</p>

                    <div className="border-t border-white/[0.06] pt-6">
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                        Best For
                      </div>
                      <p className="text-offwhite text-[14px] leading-relaxed">{prog.who}</p>
                    </div>
                    <div className="border-t border-white/[0.06] pt-5 mt-5">
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                        Time Commitment
                      </div>
                      <p className="text-offwhite text-[14px]">{prog.commitment}</p>
                    </div>
                  </div>

                  {/* Middle: includes + outcomes */}
                  <div className="space-y-8">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
                        What&apos;s Included
                      </div>
                      <ul className="space-y-2.5">
                        {prog.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-3 text-[14px] text-offwhite">
                            <span className="text-[#3d8bff] font-mono text-[11px] mt-0.5 flex-shrink-0">→</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
                        Expected Outcomes
                      </div>
                      <ul className="space-y-2.5">
                        {prog.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-3 text-[14px] text-offwhite">
                            <span className="text-green-400 font-mono text-[11px] mt-0.5 flex-shrink-0">✓</span>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: price + CTA */}
                  <div className="flex flex-col justify-between">
                    <div className="border border-white/[0.06] p-8 bg-[#050508]/50">
                      <div className="font-display font-black text-[56px] leading-none tracking-tight mb-2">
                        {prog.price}
                      </div>
                      <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mb-8">
                        {prog.priceNote}
                      </div>
                      <Link
                        href={prog.href}
                        className={`block w-full text-center font-display font-black text-[14px] tracking-[0.15em] uppercase py-4 clip-btn transition-all duration-250 ${
                          prog.featured
                            ? "bg-[#1a6fff] hover:bg-[#3d8bff] text-white hover:shadow-[0_8px_32px_rgba(26,111,255,0.4)]"
                            : "border border-[rgba(26,111,255,0.35)] text-[#3d8bff] hover:bg-[#1a6fff] hover:text-white hover:border-[#1a6fff]"
                        }`}
                      >
                        {prog.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Comparison note */}
      <section className="py-16 px-6 md:px-10 bg-[#0d0d12] border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-4">
              Not sure which to choose?
            </p>
            <h3 className="font-display font-black text-[28px] md:text-[36px] uppercase mb-4">
              Start with the{" "}
              <span className="text-[#3d8bff]">7-Day Challenge.</span>
            </h3>
            <p className="text-muted text-[15px] max-w-md mx-auto mb-8">
              It&apos;s free, it&apos;s real, and it will show you exactly what this
              system can do for you.
            </p>
            <Link
              href="/apply?program=challenge"
              className="inline-block border border-[rgba(26,111,255,0.35)] text-[#3d8bff] hover:bg-[#1a6fff] hover:text-white font-display font-black text-[14px] tracking-[0.12em] uppercase px-10 py-4 clip-btn transition-all duration-250"
            >
              Start Free Today
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
