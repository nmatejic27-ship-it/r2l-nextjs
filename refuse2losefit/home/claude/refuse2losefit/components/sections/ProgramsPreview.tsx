import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel, SectionHeading, GlowCard } from "@/components/ui/index";

const programs = [
  {
    tier: "Free Entry",
    name: "7-Day Discipline\nChallenge",
    tagline: "Build the foundation",
    price: "FREE",
    desc: "A high-intensity 7-day program designed to ignite your transformation and prove what disciplined training can do.",
    features: [
      "Daily structured workouts",
      "Nutrition framework guide",
      "Mindset conditioning",
      "Private community access",
    ],
    cta: "Start Free",
    href: "/programs#challenge",
    featured: false,
  },
  {
    tier: "Core Program",
    name: "30-Day GRIND\nProgram",
    tagline: "The real work begins",
    price: "$97",
    priceSuffix: "/month",
    desc: "A complete 30-day transformation system built for those who want serious fat loss and muscle definition — fast.",
    features: [
      "Personalized training plan",
      "Macro-based nutrition plan",
      "Weekly check-ins",
      "24/7 coaching support",
      "Progress tracking system",
    ],
    cta: "Apply Now",
    href: "/apply",
    featured: true,
    badge: "Most Popular",
  },
  {
    tier: "High Performance",
    name: "ELITE 1-on-1\nCoaching",
    tagline: "The highest level",
    price: "Custom",
    desc: "Fully bespoke 1-on-1 coaching with complete program customization, direct access, and white-glove transformation.",
    features: [
      "Full program customization",
      "Daily coach access",
      "Bi-weekly strategy calls",
      "AI-assisted progress tracking",
      "Nutrition + supplement protocol",
      "Lifestyle optimization",
    ],
    cta: "Apply for Elite",
    href: "/apply",
    featured: false,
  },
];

export default function ProgramsPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <AnimatedSection>
            <SectionLabel>Programs</SectionLabel>
            <SectionHeading>
              CHOOSE YOUR
              <br />
              <span className="text-[#3d8bff]">LEVEL.</span>
            </SectionHeading>
          </AnimatedSection>
          <AnimatedSection delay={150} className="md:text-right">
            <p className="text-muted text-[15px] leading-relaxed max-w-xs md:ml-auto">
              Every tier is designed with one goal: get you undeniable results as
              fast as possible.
            </p>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 font-display font-bold text-[13px] tracking-[0.12em] uppercase text-[#3d8bff] hover:text-white transition-colors mt-4 group"
            >
              View All Programs
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {programs.map((prog, i) => (
            <AnimatedSection key={prog.name} delay={i * 100}>
              <GlowCard featured={prog.featured} className="h-full">
                {prog.badge && (
                  <div className="absolute top-5 right-5 bg-[#1a6fff] font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 text-white z-20">
                    {prog.badge}
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#3d8bff] mb-5">
                    {prog.tier}
                  </span>
                  <h3
                    className="font-display font-black text-[28px] uppercase leading-[1.05] tracking-wide mb-3"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {prog.name}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed mb-6">
                    {prog.desc}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {prog.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[14px] text-offwhite"
                      >
                        <span className="text-[#3d8bff] font-mono text-[11px] mt-0.5 flex-shrink-0">
                          →
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="font-display font-black text-[40px] tracking-tight leading-none">
                        {prog.price}
                      </span>
                      {prog.priceSuffix && (
                        <span className="text-muted text-[14px]">
                          {prog.priceSuffix}
                        </span>
                      )}
                    </div>
                    <Link
                      href={prog.href}
                      className={`block w-full text-center font-display font-black text-[13px] tracking-[0.15em] uppercase py-4 clip-btn transition-all duration-250 ${
                        prog.featured
                          ? "bg-[#1a6fff] hover:bg-[#3d8bff] text-white hover:shadow-[0_8px_32px_rgba(26,111,255,0.4)]"
                          : "border border-[rgba(26,111,255,0.3)] text-[#3d8bff] hover:bg-[#1a6fff] hover:text-white hover:border-[#1a6fff]"
                      }`}
                    >
                      {prog.cta}
                    </Link>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
