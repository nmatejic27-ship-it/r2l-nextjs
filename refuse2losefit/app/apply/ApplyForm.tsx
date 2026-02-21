"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-brand-card border border-brand-border text-white placeholder-white/30 px-4 py-3.5 text-sm rounded-sm focus:outline-none focus:border-brand-blue transition-colors min-h-[52px]";

const labelClass =
  "block text-xs font-bold tracking-widest uppercase text-white/50 mb-2";

export default function ApplyForm() {
  const [status, setStatus] = useState<FormState>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // Simulate async submission
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  }

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center bg-brand-card border border-brand-blue/30 rounded-sm p-12">
        <p className="text-brand-blue text-5xl mb-6">✓</p>
        <h2 className="font-display text-4xl uppercase text-white mb-4">
          Application Received
        </h2>
        <p className="text-white/60 leading-relaxed">
          We&apos;ve received your application and will review it personally within
          24 hours. If accepted, you&apos;ll receive a link to schedule your free
          strategy call. Get ready — your transformation is coming.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-brand-card border border-brand-border rounded-sm p-6 sm:p-10 flex flex-col gap-6"
      noValidate
    >
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Marcus"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Davis"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          className={inputClass}
        />
      </div>

      {/* Program interest */}
      <div>
        <label htmlFor="program" className={labelClass}>
          Program Interest
        </label>
        <select
          id="program"
          name="program"
          required
          className={`${inputClass} appearance-none cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled className="bg-brand-black">
            Select a program
          </option>
          <option value="1on1" className="bg-brand-black">
            1:1 Coaching
          </option>
          <option value="online" className="bg-brand-black">
            Online Coaching
          </option>
          <option value="hybrid" className="bg-brand-black">
            Elite Hybrid Program
          </option>
        </select>
      </div>

      {/* Goal */}
      <div>
        <label htmlFor="goal" className={labelClass}>
          Your #1 Goal
        </label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={4}
          placeholder="Describe your transformation goal — be specific about what you want to achieve and why it matters to you."
          className={`${inputClass} resize-none min-h-[120px]`}
        />
      </div>

      {/* Commitment */}
      <div>
        <label htmlFor="commitment" className={labelClass}>
          What level of commitment are you bringing?
        </label>
        <select
          id="commitment"
          name="commitment"
          required
          className={`${inputClass} appearance-none cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled className="bg-brand-black">
            Select your commitment level
          </option>
          <option value="serious" className="bg-brand-black">
            100% — I&apos;m ready to do whatever it takes
          </option>
          <option value="motivated" className="bg-brand-black">
            90% — Very motivated, some life constraints
          </option>
          <option value="moderate" className="bg-brand-black">
            70% — Motivated but need structure
          </option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full py-5 text-sm rounded-sm min-h-[60px] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>

      <p className="text-center text-white/30 text-xs tracking-wide">
        By applying you agree to be contacted regarding your coaching application.
        No spam, ever.
      </p>
    </form>
  );
}
