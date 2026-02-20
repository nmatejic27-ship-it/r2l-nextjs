"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

type Step = 1 | 2 | 3;

interface FormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  program: string;
  primaryGoal: string;
  currentStruggles: string;
  experienceLevel: string;
  daysPerWeek: string;
  commitmentLevel: string;
  whyNow: string;
}

const defaultForm: FormData = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  program: "",
  primaryGoal: "",
  currentStruggles: "",
  experienceLevel: "",
  daysPerWeek: "",
  commitmentLevel: "",
  whyNow: "",
};

export default function ApplyPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(defaultForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-[#0a0a10] border border-white/[0.08] text-white placeholder:text-muted text-[15px] px-5 py-4 focus:outline-none focus:border-[#1a6fff] focus:shadow-[0_0_0_1px_rgba(26,111,255,0.3)] transition-all duration-200";

  const labelClass = "block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2";

  if (status === "done") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-32 bg-[#050508]">
        <div className="max-w-xl w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[#1a6fff] flex items-center justify-center mx-auto mb-8">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#3d8bff] block mb-4">
            Application Received
          </span>
          <h1 className="font-display font-black text-[48px] md:text-[64px] uppercase leading-[0.92] mb-6">
            YOU&apos;RE
            <br />
            <span className="text-[#3d8bff]">ONE STEP</span>
            <br />
            CLOSER.
          </h1>
          <p className="text-muted text-[16px] leading-relaxed mb-4">
            Your application has been received. Here&apos;s what happens next:
          </p>
          <div className="text-left border border-white/[0.06] bg-[#0d0d12] p-8 mb-8">
            {[
              { step: "01", action: "We review your application (within 24hrs)" },
              { step: "02", action: "You receive a scheduling link for your free strategy call" },
              { step: "03", action: "We hop on a 20-min call to align on your transformation plan" },
              { step: "04", action: "Your custom program is built and you begin" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-4 mb-4 last:mb-0">
                <span className="font-mono text-[#3d8bff] text-[13px] flex-shrink-0">{s.step}</span>
                <span className="text-offwhite text-[14px]">{s.action}</span>
              </div>
            ))}
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-white font-mono text-[12px] tracking-[0.15em] uppercase transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 md:px-10 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(26,111,255,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#3d8bff]" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#3d8bff]">
              Application
            </span>
            <span className="block w-8 h-px bg-[#3d8bff]" />
          </div>
          <h1 className="font-display font-black uppercase leading-[0.92] text-[48px] md:text-[72px] mb-4">
            READY TO{" "}
            <span className="text-[#3d8bff]">TRANSFORM?</span>
          </h1>
          <p className="text-muted text-[16px] leading-relaxed max-w-lg mx-auto">
            Complete your application below. It takes 3 minutes. We&apos;ll review it
            and be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6 md:px-10 bg-[#050508] min-h-screen">
        <div className="max-w-[720px] mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-12">
            {([1, 2, 3] as Step[]).map((s) => (
              <div key={s} className="flex items-center gap-3 flex-1">
                <div
                  className={`w-8 h-8 flex items-center justify-center font-mono text-[12px] font-bold transition-all duration-300 flex-shrink-0 ${
                    step >= s
                      ? "bg-[#1a6fff] text-white"
                      : "border border-white/[0.1] text-muted"
                  }`}
                >
                  {step > s ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                <span className={`font-mono text-[10px] tracking-[0.15em] uppercase hidden sm:block ${step >= s ? "text-white" : "text-muted"}`}>
                  {s === 1 ? "You" : s === 2 ? "Goals" : "Commit"}
                </span>
                {s < 3 && (
                  <div className={`flex-1 h-px transition-all duration-300 ${step > s ? "bg-[#1a6fff]" : "bg-white/[0.06]"}`} />
                )}
              </div>
            ))}
          </div>

          <AnimatedSection key={step}>
            {/* Step 1: Personal */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display font-black text-[32px] uppercase mb-1">Tell us about yourself.</h2>
                  <p className="text-muted text-[14px]">Basic info so we know who we&apos;re working with.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input required className={inputClass} placeholder="First Last" value={form.name} onChange={(e) => update("name", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input required type="email" className={inputClass} placeholder="you@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <input required className={inputClass} placeholder="+1 (000) 000-0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Gender (optional)</label>
                    <select className={`${inputClass} appearance-none cursor-pointer`} value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                      <option value="">Prefer not to say</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Which program interests you? *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {["7-Day Challenge (Free)", "30-Day GRIND ($97/mo)", "ELITE 1-on-1 (Custom)"].map((prog) => (
                      <button
                        key={prog}
                        type="button"
                        onClick={() => update("program", prog)}
                        className={`px-4 py-3 text-left font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 border ${
                          form.program === prog
                            ? "border-[#1a6fff] bg-[#1a6fff]/10 text-[#3d8bff]"
                            : "border-white/[0.08] text-muted hover:border-[rgba(26,111,255,0.3)] hover:text-white"
                        }`}
                      >
                        {prog}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (!form.name || !form.email || !form.phone) {
                      alert("Please fill in your name, email, and phone.");
                      return;
                    }
                    setStep(2);
                  }}
                  className="w-full bg-[#1a6fff] hover:bg-[#3d8bff] text-white font-display font-black text-[15px] tracking-[0.15em] uppercase py-5 clip-btn transition-all duration-250 hover:shadow-[0_8px_32px_rgba(26,111,255,0.4)]"
                >
                  Continue →
                </button>
              </div>
            )}

            {/* Step 2: Goals */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display font-black text-[32px] uppercase mb-1">Your goals &amp; situation.</h2>
                  <p className="text-muted text-[14px]">Help us understand where you&apos;re starting from.</p>
                </div>
                <div>
                  <label className={labelClass}>Primary Goal *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Fat Loss", "Muscle Building", "Body Recomposition", "Athletic Performance", "Strength Gain", "Overall Health"].map((g) => (
                      <button key={g} type="button" onClick={() => update("primaryGoal", g)}
                        className={`px-4 py-3 font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 border text-left ${form.primaryGoal === g ? "border-[#1a6fff] bg-[#1a6fff]/10 text-[#3d8bff]" : "border-white/[0.08] text-muted hover:border-[rgba(26,111,255,0.3)] hover:text-white"}`}>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Current Struggles *</label>
                  <textarea required rows={3} className={`${inputClass} resize-none`} placeholder="What's been holding you back? (diet, consistency, knowledge, injury...)"
                    value={form.currentStruggles} onChange={(e) => update("currentStruggles", e.target.value)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Experience Level *</label>
                    <select required className={`${inputClass} appearance-none cursor-pointer`} value={form.experienceLevel} onChange={(e) => update("experienceLevel", e.target.value)}>
                      <option value="">Select level</option>
                      <option>Complete Beginner</option>
                      <option>Some Experience (0–1 yr)</option>
                      <option>Intermediate (1–3 yrs)</option>
                      <option>Advanced (3+ yrs)</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Days Available Per Week *</label>
                    <select required className={`${inputClass} appearance-none cursor-pointer`} value={form.daysPerWeek} onChange={(e) => update("daysPerWeek", e.target.value)}>
                      <option value="">Select days</option>
                      {["2–3 days", "3–4 days", "4–5 days", "5–6 days", "7 days"].map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="border border-white/[0.08] text-muted hover:text-white font-display font-black text-[14px] tracking-[0.12em] uppercase px-8 py-5 clip-btn transition-all duration-200">
                    ← Back
                  </button>
                  <button
                    onClick={() => {
                      if (!form.primaryGoal || !form.currentStruggles || !form.experienceLevel || !form.daysPerWeek) {
                        alert("Please complete all required fields.");
                        return;
                      }
                      setStep(3);
                    }}
                    className="flex-1 bg-[#1a6fff] hover:bg-[#3d8bff] text-white font-display font-black text-[15px] tracking-[0.15em] uppercase py-5 clip-btn transition-all duration-250 hover:shadow-[0_8px_32px_rgba(26,111,255,0.4)]"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Commitment */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display font-black text-[32px] uppercase mb-1">Commitment level.</h2>
                  <p className="text-muted text-[14px]">We work with people who are serious. Show us you are.</p>
                </div>
                <div>
                  <label className={labelClass}>On a scale of 1–10, how committed are you to transformation? *</label>
                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                    {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                      <button key={n} type="button" onClick={() => update("commitmentLevel", String(n))}
                        className={`py-3 font-display font-black text-[18px] transition-all duration-200 border ${form.commitmentLevel === String(n) ? "border-[#1a6fff] bg-[#1a6fff] text-white" : "border-white/[0.08] text-muted hover:border-[rgba(26,111,255,0.3)] hover:text-white"}`}>
                        {n}
                      </button>
                    ))}
                  </div>
                  <p className="font-mono text-[10px] text-muted mt-2 tracking-wider">
                    We only accept 8+ — be honest with yourself.
                  </p>
                </div>
                <div>
                  <label className={labelClass}>Why now? What makes this the moment you&apos;re ready to change? *</label>
                  <textarea required rows={5} className={`${inputClass} resize-none`}
                    placeholder="Tell us in your own words why you're ready to commit to this transformation now..."
                    value={form.whyNow} onChange={(e) => update("whyNow", e.target.value)} />
                </div>
                <div className="border border-white/[0.06] bg-[#0d0d12] p-6">
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#3d8bff] mb-2">
                    Review Your Application
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div><span className="text-muted">Name: </span><span className="text-white">{form.name}</span></div>
                    <div><span className="text-muted">Email: </span><span className="text-white">{form.email}</span></div>
                    <div><span className="text-muted">Goal: </span><span className="text-white">{form.primaryGoal}</span></div>
                    <div><span className="text-muted">Program: </span><span className="text-white">{form.program || "TBD"}</span></div>
                  </div>
                </div>
                {status === "error" && (
                  <p className="text-red-400 font-mono text-[11px] tracking-wider">
                    Something went wrong. Please try again.
                  </p>
                )}
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="border border-white/[0.08] text-muted hover:text-white font-display font-black text-[14px] tracking-[0.12em] uppercase px-8 py-5 clip-btn transition-all duration-200">
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                    className="flex-1 bg-[#1a6fff] hover:bg-[#3d8bff] disabled:opacity-60 text-white font-display font-black text-[15px] tracking-[0.15em] uppercase py-5 clip-btn transition-all duration-250 hover:shadow-[0_8px_32px_rgba(26,111,255,0.4)]"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Application →"}
                  </button>
                </div>
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted text-center">
                  Your info is secure. We never spam.
                </p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
