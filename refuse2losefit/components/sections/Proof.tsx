const stats = [
  { value: "500+", label: "Clients Coached" },
  { value: "92%", label: "Success Rate" },
  { value: "6+", label: "Years Coaching" },
  { value: "18lbs", label: "Avg Fat Loss" },
];

const testimonials = [
  {
    name: "Marcus D.",
    result: "Lost 31 lbs in 16 weeks",
    quote:
      "I've tried everything. This is the only program that actually got me results. The accountability alone changed everything.",
    tag: "1:1 Coaching",
  },
  {
    name: "Alicia R.",
    result: "Lost 22 lbs, built muscle",
    quote:
      "I was skeptical, but within 8 weeks my whole body had changed. The coaching is elite-level, no BS.",
    tag: "Online Coaching",
  },
  {
    name: "James T.",
    result: "Down 45 lbs, total transformation",
    quote:
      "Worth every single dollar. I look and feel 10 years younger. This program is the real deal.",
    tag: "Elite Hybrid",
  },
];

export default function Proof() {
  return (
    <section className="bg-brand-black py-20 sm:py-28 px-4 sm:px-6" aria-label="Proof and results">
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <header className="text-center mb-16">
          <p className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Real People. Real Results.
          </p>
          <h2 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] uppercase leading-tight text-white">
            The Proof Is
            <br />
            <span className="text-brand-blue">Undeniable</span>
          </h2>
        </header>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-brand-card border border-brand-border rounded-sm p-6"
            >
              <p className="font-display text-5xl sm:text-6xl text-brand-blue stat-number">
                {stat.value}
              </p>
              <p className="mt-2 text-white/50 text-xs font-bold tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Before/After Placeholder Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-brand-card border border-brand-border rounded-sm p-6 flex flex-col gap-4"
            >
              {/* Tag */}
              <span className="self-start text-[10px] font-bold tracking-widest uppercase bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-sm border border-brand-blue/20">
                {t.tag}
              </span>

              {/* Transformation placeholder */}
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square bg-white/5 rounded-sm flex items-end justify-center pb-2">
                  <span className="text-[10px] text-white/30 font-bold tracking-widest uppercase">
                    Before
                  </span>
                </div>
                <div className="aspect-square bg-brand-blue/10 rounded-sm flex items-end justify-center pb-2">
                  <span className="text-[10px] text-brand-blue font-bold tracking-widest uppercase">
                    After
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote>
                <p className="text-white/70 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <footer>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-brand-blue text-xs font-bold tracking-wide">
                  {t.result}
                </p>
              </footer>
            </article>
          ))}
        </div>

        {/* ── Gradient divider ── */}
        <div className="gradient-divider" />
      </div>
    </section>
  );
}
