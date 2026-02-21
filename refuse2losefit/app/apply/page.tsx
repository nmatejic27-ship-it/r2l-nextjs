import type { Metadata } from "next";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply for Coaching | Refuse2LoseFIT",
  description:
    "Apply for elite 1:1 fitness transformation coaching. Limited spots available. We review every application personally.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-32 px-4 sm:px-6">
      {/* ── Header ── */}
      <header className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-3">
          Limited Spots Available
        </p>
        <h1 className="font-display text-[clamp(3rem,10vw,6rem)] uppercase leading-tight text-white mb-4">
          Apply for
          <br />
          <span className="text-brand-blue">Coaching</span>
        </h1>
        <p className="text-white/60 text-base leading-relaxed">
          Fill out the form below. We review every application personally and
          only accept clients we&apos;re confident we can transform. If accepted,
          we&apos;ll schedule your strategy call within 24 hours.
        </p>
      </header>

      {/* ── Form ── */}
      <ApplyForm />
    </div>
  );
}
