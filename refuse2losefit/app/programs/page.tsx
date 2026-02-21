import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching Programs | Refuse2LoseFIT",
  description:
    "Explore elite transformation coaching programs — 1:1, Online, and Elite Hybrid. Custom plans for serious results.",
};

const programs = [
  {
    title: "1:1 Coaching",
    tier: "Most Personal",
    price: "Premium Investment",
    description:
      "The gold standard. Your coach designs everything around you — your body type, your life, your schedule. Direct daily access and real-time adjustments ensure you're always moving forward.",
    features: [
      "Fully custom training program built for your goals",
      "Custom nutrition protocol with flexible dieting approach",
      "Weekly video check-in calls",
      "Direct messaging access (24–48hr response time)",
      "Bi-weekly program adjustments based on progress",
      "Access to private client portal & tracking tools",
      "Mindset & accountability coaching",
    ],
    ideal: "High performers who want maximum personalization and hands-on guidance.",
  },
  {
    title: "Online Coaching",
    tier: "Most Popular",
    price: "Mid-Tier Investment",
    description:
      "All the elite coaching you need, delivered remotely. Perfect for busy professionals who want proven programming without location constraints.",
    features: [
      "Personalized training plan updated monthly",
      "Macro-based nutrition plan with food flexibility",
      "Bi-weekly check-in reviews (written + video)",
      "App-based coaching portal with form feedback",
      "Access to exercise video library",
      "Monthly strategy & progress calls",
      "Email & portal support",
    ],
    ideal: "Motivated individuals who want professional programming with accountability, anywhere in the world.",
    highlight: true,
  },
  {
    title: "Elite Hybrid",
    tier: "Ultimate Results",
    price: "Elite Investment",
    description:
      "The complete performance ecosystem. Combines in-person sessions with remote programming for full-spectrum optimization of training, nutrition, recovery, and mindset.",
    features: [
      "Weekly in-person training sessions (local clients)",
      "Full remote coaching between sessions",
      "Complete lifestyle & performance optimization",
      "Priority support — guaranteed same-day response",
      "Monthly full-body assessment & metrics review",
      "Supplement & recovery protocol guidance",
      "Exclusive access to Elite Hybrid client community",
    ],
    ideal: "Executives and high-achievers who demand the absolute best and accept nothing less.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-32 px-4 sm:px-6">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-3">
          Elite Programming
        </p>
        <h1 className="font-display text-[clamp(3rem,10vw,6.5rem)] uppercase leading-tight text-white mb-4">
          Our
          <br />
          <span className="text-brand-blue">Programs</span>
        </h1>
        <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
          Each program is built to one standard: results. Choose the level of
          coaching that matches your ambition.
        </p>
      </header>

      {/* Programs */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {programs.map((p) => (
          <article
            key={p.title}
            className={`rounded-sm border p-8 sm:p-10 ${
              p.highlight
                ? "bg-brand-blue/10 border-brand-blue/40"
                : "bg-brand-card border-brand-border"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <span
                  className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm ${
                    p.highlight
                      ? "bg-brand-blue text-white"
                      : "bg-white/5 text-white/50 border border-white/10"
                  }`}
                >
                  {p.tier}
                </span>
                <h2 className="font-display text-4xl sm:text-5xl uppercase text-white mt-3">
                  {p.title}
                </h2>
              </div>
              <p className="text-brand-blue text-sm font-bold tracking-widest uppercase shrink-0">
                {p.price}
              </p>
            </div>

            <p className="text-white/60 leading-relaxed mb-8 text-base max-w-2xl">
              {p.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" role="list">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="text-brand-blue mt-0.5 shrink-0" aria-hidden="true">▸</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/apply"
                className="btn-primary px-10 py-4 text-sm rounded-sm min-h-[52px]"
              >
                Apply for {p.title}
              </Link>
              <p className="text-white/40 text-xs italic">
                Ideal for: {p.ideal}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
