import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="relative bg-brand-dark py-24 sm:py-36 px-4 sm:px-6 overflow-hidden text-center"
      aria-label="Call to action"
    >
      {/* ── Glow ── */}
      <div
        className="glow-orb glow-pulse absolute"
        style={{ width: "700px", height: "700px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.25 }}
        aria-hidden="true"
      />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-5">
          Your Move
        </p>

        <h2 className="font-display text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.9] text-white mb-6">
          Your
          <br />
          <span className="text-brand-blue">Transformation</span>
          <br />
          Starts Now
        </h2>

        <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Every day you wait is a day behind. The body you want, the discipline
          you crave — it&apos;s on the other side of one decision. We&apos;ll do the rest.
        </p>

        <Link
          href="/apply"
          className="btn-primary inline-flex w-full sm:w-auto px-14 py-5 text-base rounded-sm min-h-[60px]"
        >
          Apply for Coaching Today
        </Link>

        <p className="mt-6 text-white/30 text-xs tracking-widest uppercase">
          Limited spots available · Applications reviewed within 24 hours
        </p>
      </div>
    </section>
  );
}
