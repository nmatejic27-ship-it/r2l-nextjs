import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import StatsSection from "@/components/sections/StatsSection";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Refuse2LoseFIT — Elite Transformation Coaching",
  description:
    "Elite personal transformation coaching for serious individuals. Fat loss, muscle building, and elite performance — no excuses.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <StatsSection />
      <ProgramsPreview />
      <HowItWorks />
      <TestimonialsPreview />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
