import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel, SectionHeading, GlowCard } from "@/components/ui/index";
import { testimonials } from "@/components/sections/TestimonialsPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Real transformations from real clients. See the fat loss, muscle building, and life-changing results from Refuse2LoseFIT coaching.",
};

const caseStudies = [
  {
    name: "Marcus T.",
    age: 28,
    goal: "Fat Loss + Definition",
    program: "30-Day GRIND",
    duration: "10 weeks",
    result: "Down 24 lbs, visible abs for the first time",
    challenge:
      "Marcus had struggled with yo-yo dieting for 4 years. He'd lose weight, fall off, and gain it back. He needed a system, not a diet.",
    plan: "Custom high-protein nutrition protocol, progressive overload training 5x/week, weekly accountability check-ins, and mindset reframing sessions.",
    outcome:
      "24 lbs of fat lost in 10 weeks. Marcus now has visible ab definition and — more importantly — has kept the weight off for 7 months.",
  },
  {
    name: "Jasmine R.",
    age: 31,
    goal: "Full Body Transformation",
    program: "ELITE 1-on-1",
    duration: "8 weeks",
    result: "Dropped 2 dress sizes, built lean muscle",
    challenge:
      "Jasmine was working long hours, eating reactively, and had no structured workout plan. She felt stuck and discouraged despite trying hard.",
    plan: "Lifestyle-adapted training 4x/week, macro-based meal structure with 3 easy template meals, and bi-weekly strategy calls to stay on track.",
    outcome:
      "8 weeks. 2 dress sizes down. Lean muscle visible in arms and legs. Jasmine now calls it the best investment she's ever made.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        label="Results"
        heading={
          <>
            PROOF, NOT{" "}
            <span className="text-[#3d8bff]">PROMISES.</span>
          </>
        }
        sub="Real people. Real transformations. Real accountability. No filters, no fake results."
      />

      {/* Stats */}
      <section className="py-16 bg-[#0d0d12] border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {[
            { num: "500+", label: "Clients Transformed" },
            { num: "92%", label: "Completion Rate" },
            { num: "18lbs", label: "Average Fat Loss" },
            { num: "4.9★", label: "Average Rating" },
          ].map((s) => (
            <div key={s.label} className="py-8 px-6 md:px-10 text-center">
              <div className="font-display font-black text-[48px] leading-none tracking-tight text-white">
                {s.num}
              </div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Grid */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-12">
            <SectionLabel>Transformations</SectionLabel>
            <SectionHeading>
              BEFORE <span className="text-[#3d8bff]">&amp;</span> AFTER.
            </SectionHeading>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
            {[
              { name: "Marcus T.", result: "−24 lbs", weeks: "10 wks" },
              { name: "Jasmine R.", result: "−18 lbs", weeks: "8 wks" },
              { name: "Derek M.", result: "+18 lbs muscle", weeks: "16 wks" },
              { name: "Aaliyah K.", result: "Full transformation", weeks: "12 wks" },
              { name: "Chris V.", result: "−30 lbs", weeks: "14 wks" },
              { name: "Nadia S.", result: "−16 lbs + abs", weeks: "12 wks" },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 60}>
                <div className="relative bg-[#0d0d12] border border-white/[0.06] aspect-[4/5] overflow-hidden group hover:border-[rgba(26,111,255,0.3)] transition-colors duration-300">
                  {/* Placeholder visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a35] to-[#050508]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="font-display font-black text-[100px] leading-none select-none pointer-events-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(26,111,255,0.06)",
                      }}
                    >
                      R2L
                    </div>
                  </div>
                  {/* Labels */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <span className="bg-[#050508]/80 font-mono text-[9px] tracking-[0.15em] uppercase text-muted px-2 py-1">
                      BEFORE
                    </span>
                    <span className="bg-[#1a6fff]/90 font-mono text-[9px] tracking-[0.15em] uppercase text-white px-2 py-1">
                      AFTER
                    </span>
                  </div>
                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#050508] to-transparent">
                    <div className="font-display font-black text-[16px] uppercase tracking-wide">
                      {t.name}
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono text-[11px] text-[#3d8bff] tracking-wider">
                        {t.result}
                      </span>
                      <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                        {t.weeks}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
              Photos replaced with client images upon deployment
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0d0d12] border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16">
            <SectionLabel>Testimonials</SectionLabel>
            <SectionHeading>
              WORDS FROM{" "}
              <span className="text-[#3d8bff]">CLIENTS.</span>
            </SectionHeading>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 70}>
                <GlowCard className="h-full">
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, si) => (
                        <svg key={si} width="13" height="13" viewBox="0 0 24 24" fill="#3d8bff">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[14px] text-offwhite leading-relaxed italic flex-1 mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a6fff] to-[#0a1a40] flex items-center justify-center font-display font-black text-[13px] text-white flex-shrink-0">
                        {t.initials}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[13px] text-white">{t.name}</p>
                        <p className="font-mono text-[11px] text-[#3d8bff] mt-0.5">{t.result}</p>
                      </div>
                      <div className="font-mono text-[10px] text-muted uppercase tracking-wider">{t.timeframe}</div>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16">
            <SectionLabel>Deep Dives</SectionLabel>
            <SectionHeading>
              CASE{" "}
              <span className="text-[#3d8bff]">STUDIES.</span>
            </SectionHeading>
          </AnimatedSection>
          <div className="space-y-[2px]">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.name} delay={i * 100}>
                <GlowCard>
                  <div className="p-10 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3d8bff] mb-2">Client</div>
                      <h3 className="font-display font-black text-[28px] uppercase">{cs.name}</h3>
                      <div className="text-muted text-[13px] mt-2">Age {cs.age} · {cs.goal}</div>
                      <div className="mt-4 border-t border-white/[0.06] pt-4">
                        <div className="font-mono text-[10px] uppercase text-muted tracking-wider mb-1">Program</div>
                        <div className="text-offwhite text-[13px]">{cs.program}</div>
                        <div className="font-mono text-[10px] uppercase text-muted tracking-wider mb-1 mt-3">Duration</div>
                        <div className="text-offwhite text-[13px]">{cs.duration}</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">The Challenge</div>
                      <p className="text-offwhite text-[14px] leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">The Plan</div>
                      <p className="text-offwhite text-[14px] leading-relaxed">{cs.plan}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3d8bff] mb-3">The Result</div>
                      <p className="font-display font-bold text-[18px] uppercase text-white mb-3">{cs.result}</p>
                      <p className="text-muted text-[14px] leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
