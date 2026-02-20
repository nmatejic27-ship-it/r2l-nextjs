"use client";

import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/index";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-[#0a0a10] border border-white/[0.08] text-white placeholder:text-muted text-[14px] px-5 py-4 focus:outline-none focus:border-[#1a6fff] focus:shadow-[0_0_0_1px_rgba(26,111,255,0.3)] transition-all duration-200";

  return (
    <>
      <PageHero
        label="Contact"
        heading={
          <>
            LET&apos;S{" "}
            <span className="text-[#3d8bff]">CONNECT.</span>
          </>
        }
        sub="Have questions or want to chat before applying? Reach out directly."
      />

      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#050508]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Info */}
          <AnimatedSection direction="left">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-display font-black text-[40px] md:text-[52px] uppercase leading-[0.95] mb-8">
              QUESTIONS?
              <br />
              <span className="text-[#3d8bff]">WE&apos;RE HERE.</span>
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-12">
              Whether you&apos;re ready to apply, have questions about our programs,
              or just want to talk through your goals — reach out. We respond to
              every message within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { label: "Email", value: "coach@refuse2losefit.com", icon: "✉" },
                { label: "Instagram", value: "@refuse2losefit", icon: "◈" },
                { label: "TikTok", value: "@refuse2losefit", icon: "◈" },
                { label: "Service Area", value: "Online · Worldwide", icon: "◍" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-[#3d8bff] text-[16px] mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-1">
                      {item.label}
                    </div>
                    <div className="text-white text-[15px]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-10">
              {["Instagram", "TikTok", "YouTube", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="border border-white/[0.08] text-muted hover:border-[#1a6fff] hover:text-[#3d8bff] font-mono text-[10px] tracking-[0.1em] uppercase px-4 py-2.5 transition-all duration-200"
                >
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={150}>
            {status === "sent" ? (
              <div className="border border-[rgba(26,111,255,0.3)] bg-[#0d1020] p-12 text-center">
                <div className="text-[#3d8bff] text-[40px] mb-4">✓</div>
                <h3 className="font-display font-black text-[28px] uppercase mb-3">
                  Message Received
                </h3>
                <p className="text-muted text-[15px]">
                  We&apos;ll get back to you within 24 hours. In the meantime, check
                  out our FAQ or apply for coaching.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
                      Name *
                    </label>
                    <input
                      required
                      className={inputClass}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
                      Phone
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Optional"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
                    Primary Goal
                  </label>
                  <select
                    className={`${inputClass} appearance-none cursor-pointer`}
                    value={form.goal}
                    onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  >
                    <option value="">Select your goal</option>
                    <option>Fat Loss</option>
                    <option>Muscle Building</option>
                    <option>Body Recomposition</option>
                    <option>Athletic Performance</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 font-mono text-[11px] tracking-wider">
                    Something went wrong. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#1a6fff] hover:bg-[#3d8bff] disabled:opacity-60 text-white font-display font-black text-[15px] tracking-[0.15em] uppercase py-5 clip-btn transition-all duration-250 hover:shadow-[0_8px_32px_rgba(26,111,255,0.4)]"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted text-center">
                  We never share your info. No spam — ever.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
