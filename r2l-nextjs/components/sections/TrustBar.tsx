import { Shield, Users, Zap, Heart, Clock } from "lucide-react";
import { trustItems } from "@/lib/content";

const icons = [Shield, Users, Zap, Heart, Clock];

export default function TrustBar() {
  return (
    <div className="px-5 sm:px-10 pb-16">
      <div
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(8px)",
        }}
      >
        {trustItems.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={item.title}
              className="px-6 py-7 text-center"
              style={{
                borderRight:
                  i < trustItems.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              <Icon
                size={32}
                className="mx-auto mb-3"
                style={{ color: "var(--accent)" }}
                aria-hidden
              />
              <strong className="font-heading block text-sm font-bold text-white mb-1">
                {item.title}
              </strong>
              <p
                className="font-heading text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--gray)" }}
              >
                {item.sub}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
