"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics";

const navLinks = [
  { label: "What's Included", href: "#offer" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(6,10,18,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="#home" aria-label="REFUSE2LOSEFIT Home">
          <Image
            src="/logo.png"
            alt="REFUSE2LOSEFIT"
            width={140}
            height={44}
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-heading text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                  style={{ color: "var(--gray)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "white")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gray)")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="#apply"
          className="btn-primary"
          onClick={() => track("click_apply")}
        >
          <ArrowRight size={15} aria-hidden />
          Apply Now
        </a>
      </div>
    </header>
  );
}
