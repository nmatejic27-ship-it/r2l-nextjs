import { Counter } from "@/components/ui/Counter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { end: 500, suffix: "+", label: "Clients Trained" },
  { end: 92, suffix: "%", label: "Transformation Rate" },
  { end: 6, suffix: "+", label: "Years Coaching" },
  { end: 18, suffix: "lbs", label: "Avg Fat Loss" },
];

export default function StatsSection() {
  return (
    <section className="py-0 bg-[#0d0d12] border-y border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map((s, i) => (
            <AnimatedSection
              key={s.label}
              delay={i * 80}
              className="py-14 px-8 text-center group hover:bg-[#141420] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1a6fff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="font-display font-black text-[64px] leading-none tracking-tight text-white">
                <Counter end={s.end} suffix={s.suffix} />
              </div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted mt-3">
                {s.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
