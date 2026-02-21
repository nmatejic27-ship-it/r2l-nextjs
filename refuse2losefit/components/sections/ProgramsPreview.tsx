import Link from "next/link";

const programs = [
  {
    title: "1:1 Coaching",
    tier: "Most Personal",
    description:
      "Fully customized training and nutrition built around your life. Direct access to your coach, weekly check-ins, real-time adjustments. This is the pinnacle of personal coaching.",
    features: ["Custom training plan", "Custom nutrition protocol", "Weekly 1:1 check-ins", "Direct messaging access"],
    cta: "Apply for 1:1",
    highlight: false,
  },
  {
    title: "Online Coaching",
    tier: "Most Popular",
    description:
      "Professional programming and nutrition delivered remotely. Everything you need to transform your body from anywhere in the world — no gym required.",
    features: ["Tailored workout program", "Macro-based nutrition plan", "Bi-weekly progress reviews", "App-based coaching portal"],
    cta: "Apply Now",
    highlight: true,
  },
  {
    title: "Elite Hybrid",
    tier: "Ultimate Results",
    description:
      "The full elite experience. In-person and remote combined. For those who are serious about maximum results, complete accountability, and transforming every area of performance.",
    features: ["In-person + remote sessions", "Full lifestyle optimization", "Priority response & support", "Monthly strategy calls"],
    cta: "Apply for Elite",
    highlight: false,
  },
];

export default function ProgramsPreview() {
  return (
    <section
      className="bg-brand-dark py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      aria-label="Programs overview"
    >
      {/* Background accent */}
      <div
        className="glow-orb absolute"
        style={{ width: "500px", height: "500px", bottom: "-100px", left: "50%", transform: "translateX(-50%)", opacity: 0.15 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <header className="text-center mb-16">
          <p className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Built For The Serious
          </p>
          <h2 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] uppercase leading-tight text-white">
            Choose Your
            <br />
            <span className="text-brand-blue">Path</span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Every program is built to deliver one thing: results. No fluff, no
            filler — only elite coaching.
          </p>
        </header>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <article
              key={program.title}
              className={`program-card rounded-sm flex flex-col p-7 ${
                program.highlight
                  ? "bg-brand-blue/10 border border-brand-blue/40"
                  : "bg-brand-card border border-brand-border"
              }`}
            >
              {/* Tier badge */}
              <span
                className={`self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-5 ${
                  program.highlight
                    ? "bg-brand-blue text-white"
                    : "bg-white/5 text-white/50 border border-white/10"
                }`}
              >
                {program.tier}
              </span>

              {/* Title */}
              <h3 className="font-display text-3xl sm:text-4xl uppercase text-white mb-4 leading-tight">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-8 flex-1" role="list">
                {program.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="text-brand-blue mt-0.5 shrink-0" aria-hidden="true">
                      ▸
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/apply"
                className={`btn-primary w-full py-3.5 text-sm rounded-sm min-h-[48px] ${
                  !program.highlight ? "!bg-white/10 hover:!bg-brand-blue" : ""
                }`}
              >
                {program.cta}
              </Link>
            </article>
          ))}
        </div>

        {/* ── View all programs ── */}
        <div className="text-center mt-10">
          <Link
            href="/programs"
            className="btn-secondary px-10 py-3.5 text-sm rounded-sm inline-flex min-h-[48px]"
          >
            View Full Program Details
          </Link>
        </div>
      </div>
    </section>
  );
}
