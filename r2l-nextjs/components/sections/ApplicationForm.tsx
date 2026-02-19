"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Lock } from "lucide-react";
import { track } from "@/lib/analytics";
import { formFields } from "@/lib/content";

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  availability: string;
  goal: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  experience?: string;
  availability?: string;
  goal?: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  experience: "",
  availability: "",
  goal: "",
};

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.phone.trim() || data.phone.trim().length < 7)
    errors.phone = "Please enter your phone number.";
  if (!data.experience) errors.experience = "Please select your experience level.";
  if (!data.availability) errors.availability = "Please select your availability.";
  if (!data.goal.trim() || data.goal.trim().length < 6)
    errors.goal = "Please describe your goal.";
  return errors;
}

export default function ApplicationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    track("submit_application", { email: form.email });
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSuccess(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (name: keyof FieldErrors) =>
    `input-field ${errors[name] ? "!border-red-500" : ""}`;

  return (
    <section
      id="apply"
      className="px-5 sm:px-10 py-24"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(11,31,77,0.2), transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p
          className="font-heading text-xs font-bold tracking-[0.22em] uppercase mb-4 flex items-center justify-center gap-2.5"
          style={{ color: "var(--accent)" }}
        >
          Apply Now
        </p>
        <h2 className="section-h2">
          Ready to Stop
          <br />
          Starting Over?
        </h2>
        <p className="section-sub mx-auto">
          Apply in 60 seconds. If accepted, you&apos;ll get the next steps via
          email or phone.
        </p>

        <div
          className="max-w-2xl mx-auto mt-14 relative overflow-hidden"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(8px)",
            padding: "clamp(32px, 5vw, 56px)",
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent), transparent)",
            }}
          />

          {!success ? (
            <>
              <p
                className="flex items-center justify-center gap-2 text-sm mb-10"
                style={{ color: "var(--gray)" }}
              >
                <Lock size={13} aria-hidden />
                Your information is private and never shared. Spots are limited
                and assigned based on fit.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-heading text-xs font-bold tracking-widest uppercase"
                      style={{ color: "var(--gray)" }}
                    >
                      Full Name <span aria-hidden style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-describedby={errors.name ? "err-name" : undefined}
                      className={fieldClass("name")}
                    />
                    {errors.name && (
                      <span id="err-name" role="alert" className="text-xs" style={{ color: "#f87171" }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-heading text-xs font-bold tracking-widest uppercase"
                      style={{ color: "var(--gray)" }}
                    >
                      Email Address <span aria-hidden style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@email.com"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-describedby={errors.email ? "err-email" : undefined}
                      className={fieldClass("email")}
                    />
                    {errors.email && (
                      <span id="err-email" role="alert" className="text-xs" style={{ color: "#f87171" }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="font-heading text-xs font-bold tracking-widest uppercase"
                      style={{ color: "var(--gray)" }}
                    >
                      Phone Number <span aria-hidden style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                      required
                      aria-required="true"
                      className={fieldClass("phone")}
                    />
                    {errors.phone && (
                      <span role="alert" className="text-xs" style={{ color: "#f87171" }}>
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Experience */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="experience"
                      className="font-heading text-xs font-bold tracking-widest uppercase"
                      style={{ color: "var(--gray)" }}
                    >
                      Experience Level <span aria-hidden style={{ color: "#f87171" }}>*</span>
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={form.experience}
                      onChange={update}
                      required
                      aria-required="true"
                      className={fieldClass("experience")}
                      style={{ color: form.experience ? "white" : "var(--gray)" }}
                    >
                      <option value="" disabled>Select level</option>
                      {formFields.experienceLevels.map((opt) => (
                        <option key={opt.value} value={opt.value} style={{ background: "#0d1929" }}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.experience && (
                      <span role="alert" className="text-xs" style={{ color: "#f87171" }}>
                        {errors.experience}
                      </span>
                    )}
                  </div>

                  {/* Availability */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="availability"
                      className="font-heading text-xs font-bold tracking-widest uppercase"
                      style={{ color: "var(--gray)" }}
                    >
                      Weekly Availability <span aria-hidden style={{ color: "#f87171" }}>*</span>
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={form.availability}
                      onChange={update}
                      required
                      aria-required="true"
                      className={fieldClass("availability")}
                      style={{ color: form.availability ? "white" : "var(--gray)" }}
                    >
                      <option value="" disabled>Hours per week</option>
                      {formFields.availabilityOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} style={{ background: "#0d1929" }}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.availability && (
                      <span role="alert" className="text-xs" style={{ color: "#f87171" }}>
                        {errors.availability}
                      </span>
                    )}
                  </div>

                  {/* Goal — full width */}
                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label
                      htmlFor="goal"
                      className="font-heading text-xs font-bold tracking-widest uppercase"
                      style={{ color: "var(--gray)" }}
                    >
                      Your Primary Goal <span aria-hidden style={{ color: "#f87171" }}>*</span>
                    </label>
                    <textarea
                      id="goal"
                      name="goal"
                      value={form.goal}
                      onChange={update}
                      rows={3}
                      placeholder="What's the one result that would make this investment 100% worth it to you?"
                      required
                      aria-required="true"
                      className={fieldClass("goal")}
                      style={{ resize: "vertical" }}
                    />
                    {errors.goal && (
                      <span role="alert" className="text-xs" style={{ color: "#f87171" }}>
                        {errors.goal}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center mt-7 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  onClick={() => track("click_apply")}
                >
                  <ArrowRight size={16} aria-hidden />
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

                <p
                  className="text-center mt-4 text-xs"
                  style={{ color: "var(--gray)" }}
                >
                  Apply in 60 seconds. If accepted, you&apos;ll get the next steps.
                </p>
              </form>
            </>
          ) : (
            <div className="py-10 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "rgba(30,79,255,0.1)",
                  border: "1px solid rgba(30,79,255,0.3)",
                  color: "var(--accent)",
                }}
                aria-hidden
              >
                <CheckCircle size={28} />
              </div>
              <h3 className="font-display text-4xl mb-3">Application Received</h3>
              <p className="text-base font-light" style={{ color: "var(--gray)" }}>
                We&apos;ll review your application and reach out within 24 hours
                with next steps. Stay ready — your transformation starts now.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
