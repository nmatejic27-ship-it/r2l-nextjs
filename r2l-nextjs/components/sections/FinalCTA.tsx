"use client";

import { ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics";

export default function FinalCTA() {
  return (
    <section
      className="px-5 sm:px-10 py-28 text-center"
      style={{
        background:
          "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(11,31,77,0.5) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="font-heading text-xs font-bold tracking-[0.22em] uppercase mb-4 flex items-center justify-center gap-2.5"
          style={{ color: "var(--accent)" }}
        >
          Last Chance
        </p>

        <h2
          className="font-display leading-none tracking-wide mb-5"
          style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
        >
          One Spot.
          <br />
          One Decision.
        </h2>

        <p
          className="text-lg font-light leading-relaxed max-w-xl mx-auto mb-10"
          style={{ color: "var(--gray)" }}
        >
          Stop waiting for the right time. The right time is now. One spot
          remains at $99. When it&apos;s gone, it&apos;s gone.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#apply"
            className="btn-primary"
            onClick={() => track("click_apply")}
          >
            <ArrowRight size={15} aria-hidden />
            Apply for Your Spot
          </a>
          <a href="#faq" className="btn-ghost">
            Read the FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
