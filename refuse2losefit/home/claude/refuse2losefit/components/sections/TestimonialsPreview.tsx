import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel, SectionHeading, GlowCard } from "@/components/ui/index";

export const testimonials = [
  {
    name: "Marcus T.",
    handle: "@marcus_lifts",
    result: "Lost 24 lbs in 10 weeks",
    timeframe: "10 weeks",
    initials: "MT",
    text: "I've tried everything — apps, YouTube, cheap plans. Nothing compared to this. The program is ruthlessly effective, and the coaching accountability changes everything. Down 24 lbs and my confidence is through the roof.",
  },
  {
    name: "Jasmine R.",
    handle: "@jas_fit",
    result: "Dropped 2 dress sizes",
    timeframe: "8 weeks",
    initials: "JR",
    text: "Refuse2LoseFIT is the real deal. I was skeptical about online coaching, but the personalization blew me away. My plan was designed for my body and my life. 8 weeks in and I look like a different person.",
  },
  {
    name: "Derek M.",
    handle: "@derek_built",
    result: "+18 lbs lean muscle",
    timeframe: "16 weeks",
    initials: "DM",
    text: "I'd been training for years with no real structure. The ELITE coaching program gave me a system that actually works. 16 weeks, 18 lbs of lean muscle. I wish I'd done this years ago.",
  },
  {
    name: "Aaliyah K.",
    handle: "@a.kfit",
    result: "Completely transformed",
    timeframe: "12 weeks",
    initials: "AK",
    text: "More than physical — this program changed how I think about discipline. The mindset work combined with elite training? I'm unstoppable now. Best investment I've ever made in myself.",
  },
  {
    name: "Chris V.",
    handle: "@chrisv",
    result: "Lost 30 lbs, kept it off",
    timeframe: "14 weeks",
    initials: "CV",
    text: "Not just a trainer — a whole system. Nutrition, training, mindset. Everything dialed in. 30 lbs gone. More energy than I've had in years. The ROI is insane.",
  },
  {
    name: "Nadia S.",
    handle: "@nadia_strong",
    result: "Finally got abs",
    timeframe: "12 weeks",
    initials: "NS",
    text: "I told myself I couldn't get abs because of my genetics. This program proved me wrong. Completely custom plan, constant support, real accountability. 12 weeks changed my entire perspective on what's possible.",
  },
];

export default function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3);
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <AnimatedSection>
            <SectionLabel>Results</SectionLabel>
            <SectionHeading>
              REAL PEOPLE.
              <br />
              <span className="text-[#3d8bff]">REAL RESULTS.</span>
            </SectionHeading>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 font-display font-bold text-[13px] tracking-[0.12em] uppercase text-[#3d8bff] hover:text-white transition-colors group"
            >
              View All Results
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {preview.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 100}>
              <GlowCard className="h-full">
                <div className="p-8 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#3d8bff">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[15px] text-offwhite leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a6fff] to-[#0a1a40] flex items-center justify-center font-display font-black text-[14px] text-white flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-[13px] text-white">
                        {t.name}
                      </p>
                      <p className="font-mono text-[11px] text-[#3d8bff] mt-0.5">
                        {t.result}
                      </p>
                    </div>
                    <div className="ml-auto font-mono text-[10px] text-muted uppercase tracking-wider">
                      {t.timeframe}
                    </div>
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
