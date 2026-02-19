"use client";

import { Check, ArrowRight, AlertTriangle } from "lucide-react";
import { valueStack } from "@/lib/content";
import { track } from "@/lib/analytics";

export default function ValueStackPricing() {
  return (
    <section
      id="pricing"
      className="px-5 sm:px-10 py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(11,31,77,0.2), transparent)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="font-heading text-xs font-bold tracking-[0.22em] uppercase mb-4 flex items-center justify-center gap-2.5"
          style={{ color: "var(--accent)" }}
        >
          Investment
        </p>
        <h2 className="section-h2">
          What This Is Worth.
          <br />
          What You Pay Today.
        </h2>

        {/* Value stack table */}
        <div
          className="mt-12 overflow-hidden"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}
        >
          {valueStack.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-8 py-5 transition-colors duration-200"
              style={{
                borderBottom:
                  i < valueStack.length - 1
                    ? "1px solid rgba(255,255,255,0.04)"
                    : "none",
              }}
            >
              <span className="font-heading text-sm font-semibold text-white flex items-center gap-3">
                <Check
                  size={15}
                  style={{ color: "var(--accent)" }}
                  aria-hidden
                />
                {item.name}
              </span>
              <span
                className="font-display text-xl tracking-wide"
                style={{ color: "var(--gray)" }}
              >
                {item.value} VALUE
              </span>
            </div>
          ))}

          {/* Total row */}
          <div
            className="flex items-center justify-between px-8 py-5"
            style={{
              background: "rgba(30,79,255,0.06)",
              borderTop: "1px solid var(--border)",
            }}
          >
            <span
              className="font-heading text-sm font-extrabold tracking-widest uppercase text-white"
            >
              Total Real-World Value
            </span>
            <span
              className="font-display text-3xl tracking-wide line-through"
              style={{ color: "var(--gray)" }}
            >
              $582
            </span>
          </div>
        </div>

        {/* Pricing box */}
        <div
          className="relative overflow-hidden p-12 mt-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,79,255,0.12), rgba(11,31,77,0.6))",
            border: "1px solid rgba(30,79,255,0.35)",
            boxShadow: "0 0 60px rgba(30,79,255,0.1)",
          }}
          onClick={() => track("pricing_click")}
        >
          {/* Top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent), transparent)",
              boxShadow: "0 0 20px var(--accent)",
            }}
          />

          <div
            className="inline-block font-heading text-xs font-bold tracking-[0.14em] uppercase text-white px-4 py-1.5 mb-6"
            style={{
              background: "var(--accent)",
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            Final Spot — This Month Only
          </div>

          <p
            className="text-base mb-2"
            style={{ color: "var(--gray)" }}
          >
            Regular Price:{" "}
            <span className="line-through">$199/mo</span>
          </p>

          <div
            className="font-display leading-none tracking-wide text-white mb-2"
            style={{ fontSize: "clamp(64px, 10vw, 100px)" }}
          >
            <span
              className="font-display"
              style={{
                fontSize: "0.35em",
                verticalAlign: "top",
                marginTop: "16px",
                display: "inline-block",
                color: "var(--gray)",
              }}
            >
              $
            </span>
            99
          </div>

          <p
            className="font-heading text-xs tracking-widest uppercase mb-8"
            style={{ color: "var(--gray)" }}
          >
            per month · cancel anytime
          </p>

          <a
            href="#apply"
            className="btn-primary mx-auto"
            style={{ display: "inline-flex" }}
            onClick={() => track("click_apply")}
          >
            <ArrowRight size={15} aria-hidden />
            Claim Your Spot
          </a>

          <p
            className="mt-6 flex items-center justify-center gap-2 font-heading text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#fbbf24" }}
          >
            <AlertTriangle size={13} aria-hidden />1 spot remaining at this
            price
          </p>
        </div>
      </div>
    </section>
  );
}
