import {
  BarChart2,
  Zap,
  RefreshCw,
  Users,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import { offerItems } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  "bar-chart-2": <BarChart2 size={20} aria-hidden />,
  zap: <Zap size={20} aria-hidden />,
  "refresh-cw": <RefreshCw size={20} aria-hidden />,
  users: <Users size={20} aria-hidden />,
  "message-circle": <MessageCircle size={20} aria-hidden />,
  lightbulb: <Lightbulb size={20} aria-hidden />,
};

export default function Offer() {
  return (
    <section id="offer" className="px-5 sm:px-10 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">The Solution</p>
        <h2 className="section-h2">
          Everything You Need.
          <br />
          Nothing You Don&apos;t.
        </h2>
        <p className="section-sub">
          A complete system designed to build your body and your identity —
          because real results require both.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {offerItems.map((item) => (
            <div
              key={item.title}
              className="card group relative overflow-hidden p-9"
            >
              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--accent), transparent)",
                }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center mb-5"
                style={{
                  background: "rgba(30,79,255,0.1)",
                  border: "1px solid rgba(30,79,255,0.2)",
                  color: "var(--accent)",
                }}
              >
                {iconMap[item.icon]}
              </div>

              <h3 className="font-heading text-base font-bold text-white mb-2.5 tracking-wide">
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-light"
                style={{ color: "var(--gray)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
