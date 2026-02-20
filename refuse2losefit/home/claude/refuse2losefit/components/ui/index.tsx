"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Button ──────────────────────────────────────────────────────────────────
interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-display font-black uppercase tracking-[0.15em] transition-all duration-250 select-none";

  const variants = {
    primary:
      "bg-[#1a6fff] hover:bg-[#3d8bff] text-white hover:shadow-[0_12px_40px_rgba(26,111,255,0.45)] hover:-translate-y-px active:translate-y-0",
    ghost:
      "text-muted hover:text-white border border-white/[0.08] hover:border-white/20 bg-transparent",
    outline:
      "border border-[rgba(26,111,255,0.4)] text-[#3d8bff] hover:bg-[#1a6fff] hover:text-white hover:border-[#1a6fff] hover:shadow-[0_8px_32px_rgba(26,111,255,0.3)]",
  };

  const sizes = {
    sm: "text-[12px] px-5 py-2.5 clip-btn-sm",
    md: "text-[14px] px-8 py-3.5 clip-btn",
    lg: "text-[18px] px-16 py-5 clip-btn-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-50 pointer-events-none", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

// ── SectionLabel ─────────────────────────────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-8 h-px bg-[#3d8bff]" />
      <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#3d8bff]">
        {children}
      </span>
    </div>
  );
}

// ── SectionHeading ────────────────────────────────────────────────────────────
export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display font-black uppercase leading-[0.92] tracking-[-0.01em]",
        "text-[40px] md:text-[56px] lg:text-[72px]",
        className
      )}
    >
      {children}
    </h2>
  );
}

// ── Divider ───────────────────────────────────────────────────────────────────
export function Divider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent my-16 md:my-24" />
  );
}

// ── GlowCard ─────────────────────────────────────────────────────────────────
export function GlowCard({
  children,
  className,
  featured,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative border transition-all duration-350 group overflow-hidden",
        featured
          ? "bg-gradient-to-br from-[#0f1a35] to-[#0a1228] border-[rgba(26,111,255,0.3)] hover:border-[rgba(26,111,255,0.6)] hover:shadow-[0_24px_64px_rgba(26,111,255,0.2)]"
          : "bg-[#141420] border-white/[0.06] hover:border-[rgba(26,111,255,0.25)] hover:shadow-[0_16px_48px_rgba(26,111,255,0.1)]",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* glow overlay on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(26,111,255,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
