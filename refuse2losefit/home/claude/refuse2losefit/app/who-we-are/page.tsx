import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel, SectionHeading } from "@/components/ui/index";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "The Refuse2LoseFIT story — our mission, philosophy, and the discipline-first coaching system that transforms bodies and lives.",
};

const values = [
  {
    icon: "◈",
    title: "Discipline Over Motivation",
    desc: "Motivation fades. Discipline is a system. We build habits that become identity, and identity that drives results — every single day.",
  },
  {
    icon: "◈",
    title: "Results Without Compromise",
    desc: "We don't water down programs to feel good. We build you the exact plan your body needs, then hold you to it.",
  },
  {
    icon: "◈",
    title: "Whole-Person Transformation",
    desc: "Body, mindset, lifestyle. We address all three because sustainable results require all three.",
  },
  {
    icon: "◈",
    title: "Built on Trust",
    desc: "We only take on clients we can genuinely help. Your success is our reputation. We don't cut corners.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        heading={
          <>
            WE BUILD{" "}
            <span className="text-[#3d8bff]">ELITE</span>
            <br />
            TRANSFORMATIONS.
          </>
        }
        sub="Not a gym. Not an app. A complete transformation system built for people who refuse to settle."
      />

      {/* Mission */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <AnimatedSection direction="left">
            <SectionLabel>Our Mission</SectionLabel>
            <SectionHeading className="mb-6">
              REFUSE TO
              <br />
              <span className="text-[#3d8bff]">ACCEPT</span>
              <br />
              AVERAGE.
            </SectionHeading>
            <p className="text-muted text-[15px] leading-[1.85] mb-4">
              Refuse2LoseFIT exists for one reason: to help serious people build
              the body and the discipline they've always wanted. Not with hype,
              not with generic programs — but with a precision-built system that
              works.
            </p>
            <p className="text-muted text-[15px] leading-[1.85]">
              Our mission is simple: take driven individuals who are tired of
              spinning their wheels and give them the tools, the structure, and
              the accountability to finally transform — for good.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={150}>
            <div className="relative border border-white/[0.06] bg-[#0d0d12] p-10">
              <div className="absolute top-0 left-0 w-24 h-px bg-[#1a6fff]" />
              <div className="absolute top-0 left-0 w-px h-24 bg-[#1a6fff]" />
              <blockquote className="font-display font-black text-[32px] md:text-[40px] uppercase leading-[0.98] tracking-tight">
                &ldquo;The body achieves what the{" "}
                <span className="text-[#3d8bff]">mind believes</span> — and what
                the{" "}
                <span className="text-[#3d8bff]">discipline commands</span>.&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#3d8bff]">
                  — Refuse2LoseFIT
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0d0d12] border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <SectionLabel>Philosophy</SectionLabel>
            <SectionHeading>
              THE R2L{" "}
              <span className="text-[#3d8bff]">SYSTEM.</span>
            </SectionHeading>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
            {[
              {
                num: "01",
                title: "Train with Purpose",
                desc: "Every rep has a reason. Every session is programmed to your body's specific adaptation needs. We don't guess — we engineer.",
              },
              {
                num: "02",
                title: "Fuel with Precision",
                desc: "Nutrition is 70% of transformation. We build macro frameworks that fuel performance, accelerate fat loss, and preserve muscle.",
              },
              {
                num: "03",
                title: "Build Unbreakable Systems",
                desc: "Consistency beats intensity every time. We install habits and systems that become automatic — until discipline is your identity.",
              },
            ].map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 100}>
                <div className="bg-[#141420] border border-white/[0.06] p-10 h-full hover:border-[rgba(26,111,255,0.3)] transition-colors duration-300 group">
                  <div className="font-mono text-[#3d8bff] text-[13px] tracking-[0.15em] mb-6">
                    {p.num}
                  </div>
                  <h3 className="font-display font-black text-[24px] uppercase tracking-wide mb-4 group-hover:text-[#3d8bff] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-[1.8]">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16">
            <SectionLabel>Core Values</SectionLabel>
            <SectionHeading>
              WHAT WE{" "}
              <span className="text-[#3d8bff]">STAND FOR.</span>
            </SectionHeading>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 80}>
                <div className="bg-[#0d0d12] border border-white/[0.06] p-10 hover:border-[rgba(26,111,255,0.25)] transition-colors duration-300 group">
                  <span className="text-[#3d8bff] text-xl mb-4 block">{v.icon}</span>
                  <h3 className="font-display font-black text-[22px] uppercase tracking-wide mb-3 group-hover:text-[#3d8bff] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-[1.8]">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coach section */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0d0d12] border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto text-center">
          <AnimatedSection>
            <SectionLabel>The Coach</SectionLabel>
            <SectionHeading className="mb-6">
              MEET YOUR{" "}
              <span className="text-[#3d8bff]">COACH.</span>
            </SectionHeading>
            <p className="text-muted text-[15px] leading-relaxed max-w-xl mx-auto mb-12">
              Built from the ground up. Certified, proven, and obsessed with
              your results. Refuse2LoseFIT was founded on the belief that
              everyone deserves elite-level coaching — not just the privileged
              few.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="inline-flex flex-col md:flex-row gap-6 justify-center flex-wrap">
              {[
                "NASM Certified Trainer",
                "Sports Nutrition Specialist",
                "Fat Loss Expert",
                "Online Coaching Pioneer",
              ].map((cert) => (
                <div
                  key={cert}
                  className="border border-[rgba(26,111,255,0.25)] bg-[#1a1a28] px-6 py-3 font-mono text-[11px] tracking-[0.15em] uppercase text-[#3d8bff]"
                >
                  {cert}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={250} className="mt-12">
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 bg-[#1a6fff] hover:bg-[#3d8bff] text-white font-display font-black text-[15px] tracking-[0.15em] uppercase px-12 py-5 clip-btn transition-all duration-300 hover:shadow-[0_16px_48px_rgba(26,111,255,0.45)] hover:-translate-y-0.5"
            >
              Work With Me
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
