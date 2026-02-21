import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Results | Refuse2LoseFIT",
  description:
    "Real results from real clients. 500+ transformations, 92% success rate. See what elite coaching looks like.",
};

const results = [
  { name: "Marcus D.", stats: "−31 lbs | 16 weeks", program: "1:1 Coaching", quote: "I&apos;ve tried everything. This is the only program that actually delivered." },
  { name: "Alicia R.", stats: "−22 lbs | Built muscle", program: "Online Coaching", quote: "Within 8 weeks my whole body had changed. The coaching is next level." },
  { name: "James T.", stats: "−45 lbs | Full transformation", program: "Elite Hybrid", quote: "Worth every dollar. I look and feel 10 years younger." },
  { name: "Dre W.", stats: "−18 lbs | 10 weeks", program: "Online Coaching", quote: "The accountability alone changed everything for me." },
  { name: "Sophia K.", stats: "−27 lbs | 14 weeks", program: "1:1 Coaching", quote: "I finally have a body I&apos;m proud of. This coaching is the real deal." },
  { name: "Carlos M.", stats: "−38 lbs | 20 weeks", program: "Elite Hybrid", quote: "My confidence has completely transformed. The results speak for themselves." },
];

const stats = [
  { value: "500+", label: "Clients Coached" },
  { value: "92%", label: "Success Rate" },
  { value: "18lbs", label: "Average Fat Loss" },
  { value: "6+", label: "Years of Excellence" },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-32 px-4 sm:px-6">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-3">
          The Proof Is In The Results
        </p>
        <h1 className="font-display text-[clamp(3rem,10vw,6.5rem)] uppercase leading-tight text-white mb-4">
          Real
          <br />
          <span className="text-brand-blue">Transformations</span>
        </h1>
        <p className="text-white/60 text-base leading-relaxed">
          We don&apos;t make promises — we deliver results. 500+ clients transformed.
          92% success rate. The numbers don&apos;t lie.
        </p>
      </header>

      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {stats.map((s) => (
          <div key={s.label} className="text-center bg-brand-card border border-brand-border rounded-sm p-6">
            <p className="font-display text-5xl text-brand-blue stat-number">{s.value}</p>
            <p className="text-white/50 text-xs font-bold tracking-widest uppercase mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Results grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {results.map((r) => (
          <article key={r.name} className="bg-brand-card border border-brand-border rounded-sm p-6 flex flex-col gap-4">
            <span className="self-start text-[10px] font-bold tracking-widest uppercase bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-sm border border-brand-blue/20">
              {r.program}
            </span>

            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-white/5 rounded-sm flex items-end justify-center pb-2">
                <span className="text-[10px] text-white/30 font-bold tracking-widest uppercase">Before</span>
              </div>
              <div className="aspect-square bg-brand-blue/10 rounded-sm flex items-end justify-center pb-2">
                <span className="text-[10px] text-brand-blue font-bold tracking-widest uppercase">After</span>
              </div>
            </div>

            <blockquote>
              <p className="text-white/70 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: `"${r.quote}"` }} />
            </blockquote>

            <footer>
              <p className="text-white font-bold text-sm">{r.name}</p>
              <p className="text-brand-blue text-xs font-bold tracking-wide">{r.stats}</p>
            </footer>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-white/50 text-sm mb-6">Ready to be the next success story?</p>
        <Link href="/apply" className="btn-primary inline-flex px-12 py-5 text-sm rounded-sm min-h-[60px]">
          Apply for Coaching
        </Link>
      </div>
    </div>
  );
}
