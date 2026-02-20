"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Programs", href: "/programs" },
  { label: "Results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050508]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-black text-[20px] uppercase tracking-wider text-white hover:opacity-90 transition-opacity"
          >
            REFUSE<span className="text-blue-bright">2</span>LOSE
            <span className="text-[#3d8bff] font-black">FIT</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/apply"
              className="hidden md:inline-block bg-[#1a6fff] hover:bg-[#3d8bff] text-white font-display font-black text-[13px] tracking-[0.15em] uppercase px-6 py-3 clip-btn-sm transition-all duration-250 hover:shadow-[0_8px_32px_rgba(26,111,255,0.45)] hover:-translate-y-px"
            >
              Apply Now
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] w-8 h-8 items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050508]/98 backdrop-blur-xl flex flex-col transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-16">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`font-display font-black text-[40px] uppercase tracking-wider transition-all duration-300 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${pathname === link.href ? "text-[#3d8bff]" : "text-white"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            style={{ transitionDelay: menuOpen ? "360ms" : "0ms" }}
            className={`mt-4 bg-[#1a6fff] text-white font-display font-black text-[16px] tracking-[0.15em] uppercase px-10 py-4 clip-btn transition-all duration-300 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}
