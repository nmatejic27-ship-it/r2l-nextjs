import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "FAQ | Refuse2LoseFIT",
  description:
    "Answers to common questions about Refuse2LoseFIT coaching programs, application process, and expected results.",
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-16">
        <div className="max-w-3xl mx-auto text-center pt-16 pb-4 px-4">
          <p className="text-brand-blue text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Questions
          </p>
          <h1 className="font-display text-[clamp(3rem,10vw,6.5rem)] uppercase leading-tight text-white">
            Frequently
            <br />
            <span className="text-brand-blue">Asked</span>
          </h1>
        </div>
        <FAQ />
        <CTASection />
      </div>
    </>
  );
}
