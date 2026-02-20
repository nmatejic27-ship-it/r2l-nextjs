import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel, SectionHeading } from "@/components/ui/index";

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Complete our quick application form. Tell us your goals, current situation, and why you're ready to commit.",
  },
  {
    num: "02",
    title: "Strategy Call",
    desc: "We review your application and schedule a free 20-minute strategy call to align on your transformation plan.",
  },
  {
    num: "03",
    title: "Custom Plan",
    desc: "Your personalized training + nutrition program is built from scratch based on your body, goals, and lifestyle.",
  },
  {
    num: "04",
    title: "Transformation",
    desc: "Execute. We track every rep, every meal, every milestone. You show up — we make sure you transform.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0d0d12] border-y border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel>Process</SectionLabel>
          <SectionHeading>
            HOW IT{" "}
            <span className="text-[#3d8bff]">WORKS.</span>
          </SectionHeading>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(26,111,255,0.3)] to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 120} className="flex flex-col items-center text-center px-6 py-4">
              {/* Number bubble */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-8 group">
                <div className="absolute inset-0 rounded-full border border-[rgba(26,111,255,0.3)] bg-[#141420] transition-all duration-300 group-hover:bg-[#1a6fff] group-hover:border-[#1a6fff] group-hover:shadow-[0_0_32px_rgba(26,111,255,0.4)]" />
                <span className="relative font-display font-black text-[28px] text-[#3d8bff] group-hover:text-white transition-colors duration-300">
                  {step.num}
                </span>
              </div>

              <h3 className="font-display font-black text-[22px] uppercase tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-muted text-[14px] leading-relaxed">
                {step.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
