import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Legal",
  description: "Privacy Policy and Terms of Service for Refuse2LoseFIT.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        label="Legal"
        heading={<>LEGAL <span className="text-[#3d8bff]">INFORMATION.</span></>}
        sub="Privacy Policy and Terms of Service for Refuse2LoseFIT."
      />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
        <div className="max-w-[860px] mx-auto space-y-20">
          <AnimatedSection>
            <div className="border-b border-white/[0.06] pb-16">
              <h2 className="font-display font-black text-[32px] uppercase tracking-wide mb-8 text-[#3d8bff]">
                Privacy Policy
              </h2>
              <div className="space-y-6 text-muted text-[15px] leading-[1.85]">
                <p>
                  <span className="text-offwhite font-semibold">Last updated:</span> {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
                <p>
                  Refuse2LoseFIT (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information and your right to privacy. This policy explains how we collect, use, and share information about you when you use our services.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, such as when you complete an application, fill out a contact form, or communicate with us. This includes your name, email address, phone number, fitness goals, and health information relevant to your coaching program.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">How We Use Your Information</h3>
                <p>
                  We use your information solely to provide and improve our coaching services. We do not sell, rent, or share your personal information with third parties for marketing purposes. Your data is used to customize your training program, communicate with you, and track your progress.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">Your Rights</h3>
                <p>
                  You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at coach@refuse2losefit.com.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div>
              <h2 className="font-display font-black text-[32px] uppercase tracking-wide mb-8 text-[#3d8bff]">
                Terms of Service
              </h2>
              <div className="space-y-6 text-muted text-[15px] leading-[1.85]">
                <p>
                  By accessing and using the Refuse2LoseFIT website and coaching services, you agree to the following terms and conditions.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">Services</h3>
                <p>
                  Refuse2LoseFIT provides online personal training and transformation coaching services. Results vary based on individual commitment, consistency, and effort. We make no guarantees of specific outcomes, though our track record speaks for itself.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">Health Disclaimer</h3>
                <p>
                  Before beginning any exercise or nutrition program, consult with a licensed healthcare professional. By using our services, you acknowledge that you are physically capable of participating in our programs and that you have disclosed any known health conditions or injuries.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">Payment Terms</h3>
                <p>
                  Subscription services are billed monthly. Cancellations must be made at least 48 hours before the next billing cycle to avoid charges. All payments are non-refundable after services have been rendered. Custom coaching packages have specific terms outlined in your coaching agreement.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">Intellectual Property</h3>
                <p>
                  All content, programs, and materials provided by Refuse2LoseFIT are proprietary and protected by copyright. You may not reproduce, distribute, or resell any of our content without express written permission.
                </p>
                <h3 className="text-white font-display font-bold text-[18px] uppercase tracking-wide">Contact</h3>
                <p>
                  For legal inquiries, contact us at coach@refuse2losefit.com.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
