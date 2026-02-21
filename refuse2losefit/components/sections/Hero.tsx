import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-16"
      aria-label="Hero"
    >
      {/* ── Noise overlay ── */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── Background glow orbs ── */}
      <div
        className="glow-orb glow-pulse"
        style={{ width: "600px", height: "600px", top: "-100px", left: "50%", transform: "translateX(-50%)" }}
        aria-hidden="true"
      />
      <div
        className="glow-orb"
        style={{ width: "300px", height: "300px", bottom: "10%", right: "-50px", opacity: 0.2 }}
        aria-hidden="true"
      />

      {/* ── Grid pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,111,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p className="animate-fade-in text-brand-blue text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-6">
          Elite Transformation Coaching
        </p>

        {/* Main headline */}
        <h1 className="font-display text-[clamp(3.5rem,14vw,9rem)] leading-[0.9] uppercase tracking-wider mb-6 animate-fade-up">
          <span className="block text-white">Transform</span>
          <span className="block shimmer-text">Your Body.</span>
          <span className="block text-white">Master</span>
          <span className="block text-white">Discipline.</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up-delay-1 text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-body">
          Stop making excuses. We deliver elite 1-on-1 coaching for serious men
          and women who refuse to settle for average. Your transformation starts
          with one decision.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/apply"
            className="btn-primary w-full sm:w-auto px-10 py-4 text-sm rounded-sm min-h-[52px]"
          >
            Apply for Coaching
          </Link>
          <Link
            href="/programs"
            className="btn-secondary w-full sm:w-auto px-10 py-4 text-sm rounded-sm min-h-[52px]"
          >
            View Programs
          </Link>
        </div>

        {/* Social proof micro-line */}
        <p className="animate-fade-up-delay-3 mt-10 text-white/30 text-xs tracking-[0.3em] uppercase">
          500+ Clients Transformed · 6+ Years · 92% Success Rate
        </p>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
