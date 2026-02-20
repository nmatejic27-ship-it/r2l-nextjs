import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/index";

export default function AboutPreview() {
  return (
    <section className="py-0 bg-[#0d0d12]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Visual side */}
        <AnimatedSection direction="left" className="relative overflow-hidden min-h-[560px] bg-gradient-to-br from-[#0d1020] to-[#080810] flex items-center justify-center border-r border-white/[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 30%, rgba(26,111,255,0.15), transparent 60%)",
            }}
          />
          {/* Photo frame */}
          <div className="relative w-[280px] md:w-[320px]">
            <div className="relative border border-[rgba(26,111,255,0.3)] bg-gradient-to-br from-[#0f1a35] to-[#060810] aspect-[3/4] overflow-hidden flex items-end justify-center">
              {/* Watermark text */}
              <div
                className="absolute inset-0 flex items-center justify-center font-display font-black text-[80px] leading-none text-center select-none pointer-events-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(26,111,255,0.08)",
                  letterSpacing: "-0.05em",
                }}
              >
                R2L
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent" />
              {/* Label */}
              <div className="relative z-10 p-6 text-center">
                <div className="font-display font-black text-[22px] uppercase tracking-wider">
                  Coach Name
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3d8bff] mt-1">
                  Elite Transformation Coach
                </div>
              </div>
            </div>
            {/* Corner accents */}
            {[
              "top-0 left-0 border-t-2 border-l-2",
              "top-0 right-0 border-t-2 border-r-2",
              "bottom-0 left-0 border-b-2 border-l-2",
              "bottom-0 right-0 border-b-2 border-r-2",
            ].map((cls, i) => (
              <span
                key={i}
                className={`absolute w-5 h-5 border-[#3d8bff] ${cls}`}
                style={{ margin: "-1px" }}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Content side */}
        <AnimatedSection direction="right" className="p-12 md:p-16 lg:p-20 flex flex-col justify-center bg-[#050508]">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-display font-black text-[40px] md:text-[52px] uppercase leading-[0.95] tracking-[-0.01em] mt-3 mb-6">
            BUILT BY SOMEONE
            <br />
            <span className="text-[#3d8bff]">WHO REFUSED</span>
            <br />
            TO SETTLE.
          </h2>
          <p className="text-muted text-[15px] leading-relaxed mb-6">
            Refuse2LoseFIT was born from obsession with results. Not motivation —
            discipline. Not quick fixes — systems that last. Our coaching
            methodology fuses elite programming, personalized nutrition, and
            mindset mastery into a system designed for one thing: your complete
            physical transformation.
          </p>
          <p className="text-muted text-[15px] leading-relaxed mb-10">
            We don't work with everyone. We work with the right people — those
            ready to commit, execute, and show up every single day.
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {[
              "NASM Certified Personal Trainer",
              "Sports Nutrition Specialist",
              "6+ Years of Elite Coaching",
              "500+ successful transformations",
            ].map((c) => (
              <div key={c} className="flex items-center gap-3 text-[14px] text-offwhite">
                <span className="w-1.5 h-1.5 bg-[#3d8bff] rotate-45 flex-shrink-0" />
                {c}
              </div>
            ))}
          </div>

          <Link
            href="/who-we-are"
            className="inline-flex items-center gap-3 font-display font-black text-[14px] tracking-[0.12em] uppercase text-white border border-white/[0.1] hover:border-[#1a6fff] px-8 py-4 clip-btn transition-all duration-250 hover:text-[#3d8bff] w-fit"
          >
            Our Full Story
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
