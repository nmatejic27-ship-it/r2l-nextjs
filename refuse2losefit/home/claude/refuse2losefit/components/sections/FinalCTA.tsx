import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-10 text-center overflow-hidden border-t border-white/[0.06]">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(26,111,255,0.13),transparent_65%)]" />
      <div className="absolute inset-0 bg-[#050508]" style={{ mixBlendMode: "multiply" }} />

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black whitespace-nowrap"
          style={{
            fontSize: "clamp(80px, 20vw, 280px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(26,111,255,0.04)",
            letterSpacing: "-0.05em",
          }}
        >
          REFUSE2LOSE
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#3d8bff]">
            Your Move
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2
            className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] my-6"
            style={{ fontSize: "clamp(48px, 9vw, 120px)" }}
          >
            YOU DON&apos;T NEED
            <br />
            <span
              style={{
                display: "block",
                color: "transparent",
                WebkitTextStroke: "2px rgba(255,255,255,0.2)",
              }}
            >
              MOTIVATION.
            </span>
            <span className="text-[#3d8bff]">YOU NEED</span>
            <br />
            DISCIPLINE.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-muted text-[17px] leading-relaxed max-w-[420px] mx-auto mb-10">
            Stop waiting for the right moment. The right moment is right now.
            Apply today and let&apos;s build the version of you that refuses to lose.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300} className="flex flex-col items-center gap-4">
          <Link
            href="/apply"
            className="relative overflow-hidden bg-[#1a6fff] hover:bg-[#3d8bff] text-white font-display font-black text-[18px] tracking-[0.2em] uppercase px-20 py-6 clip-btn-lg transition-all duration-300 hover:shadow-[0_24px_72px_rgba(26,111,255,0.5)] hover:-translate-y-1 group"
          >
            <span className="relative z-10">Secure Your Spot</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </Link>
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
            Limited spots available — Apply now
          </span>
        </AnimatedSection>
      </div>
    </section>
  );
}
