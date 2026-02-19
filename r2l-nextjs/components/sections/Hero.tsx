"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics";
import { heroStats } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-109px)] flex items-center px-5 sm:px-10 py-20"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(11,31,77,0.7) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 50%, rgba(30,79,255,0.07) 0%, transparent 60%)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: Copy */}
        <div>
          <p
            className="font-heading text-xs font-bold tracking-[0.2em] uppercase mb-5 flex items-center gap-2.5"
            style={{ color: "var(--accent)" }}
          >
            <span className="w-8 h-px block" style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
            Elite Fitness Coaching
          </p>

          <h1 className="font-display leading-none tracking-wide mb-7"
            style={{ fontSize: "clamp(52px, 7vw, 96px)" }}>
            Transform Your Body.
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
              }}
            >
              Rebuild Your
            </span>
            <br />
            Discipline.
          </h1>

          <p
            className="text-lg leading-relaxed font-light max-w-md mb-10"
            style={{ color: "var(--gray)" }}
          >
            Personalized coaching + accountability that forces real results. No
            excuses. No shortcuts. Just the version of you that refuses to lose.
          </p>

          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="#apply"
              className="btn-primary"
              onClick={() => track("click_apply")}
            >
              <ArrowRight size={15} aria-hidden />
              Apply Now
            </a>
            <a
              href="#offer"
              className="btn-ghost"
              onClick={() => track("click_see_included")}
            >
              See What&apos;s Included
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-12 pt-8 flex gap-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {heroStats.map((s) => (
              <div key={s.num}>
                <div
                  className="font-display text-4xl leading-none tracking-wide"
                >
                  {s.num}
                </div>
                <div
                  className="font-heading text-xs font-semibold tracking-widest uppercase mt-1"
                  style={{ color: "var(--gray)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Brand mark */}
        <div
          className="hidden lg:flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="relative w-96 h-96 rounded-full flex items-center justify-center"
            style={{ border: "1px solid rgba(30,79,255,0.12)" }}
          >
            {/* Outer ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "-20px",
                border: "1px solid rgba(30,79,255,0.06)",
              }}
            />
            {/* Glow */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "-80px",
                background:
                  "radial-gradient(circle, rgba(30,79,255,0.12) 0%, transparent 70%)",
              }}
            />
            <Image
              src="/logo.png"
              alt=""
              width={260}
              height={260}
              className="object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
