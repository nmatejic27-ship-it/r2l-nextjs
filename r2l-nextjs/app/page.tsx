import Header from "@/components/site/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Offer from "@/components/sections/Offer";
import ValueStackPricing from "@/components/sections/ValueStackPricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ApplicationForm from "@/components/sections/ApplicationForm";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Urgency Banner */}
      <div
        className="text-center px-5 py-2.5 font-heading text-xs font-semibold tracking-widest uppercase border-b"
        style={{
          background: "linear-gradient(90deg, var(--dark-blue), #0d2a6e, var(--dark-blue))",
          borderColor: "var(--border)",
        }}
      >
        ⚡ Final Coaching Spot —{" "}
        <span
          className="line-through mx-1"
          style={{ color: "var(--gray)" }}
        >
          Regular $199
        </span>{" "}
        <span style={{ color: "#60a5fa" }}>Today Only: $99</span>
        &nbsp;·&nbsp;Limited Availability
      </div>

      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Offer />
        <ValueStackPricing />
        <Testimonials />
        <FAQ />
        <ApplicationForm />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
