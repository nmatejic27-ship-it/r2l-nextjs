"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex flex-col justify-center items-center gap-1.5 w-11 h-11 rounded-sm"
      >
        <span
          className={`block h-0.5 bg-white transition-all duration-300 origin-center ${
            open ? "w-6 rotate-45 translate-y-2" : "w-6"
          }`}
        />
        <span
          className={`block h-0.5 bg-white transition-all duration-300 ${
            open ? "w-0 opacity-0" : "w-6"
          }`}
        />
        <span
          className={`block h-0.5 bg-white transition-all duration-300 origin-center ${
            open ? "w-6 -rotate-45 -translate-y-2" : "w-6"
          }`}
        />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-brand-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <nav
        className={`fixed top-16 right-0 bottom-0 z-50 w-72 bg-brand-dark border-l border-brand-border flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col p-6 gap-2 flex-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center px-4 py-4 min-h-[52px] rounded-sm font-bold text-sm tracking-widest uppercase transition-colors ${
                  pathname === link.href
                    ? "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile apply CTA in drawer */}
        <div className="p-6 border-t border-brand-border">
          <Link
            href="/apply"
            className="btn-primary w-full py-4 text-sm rounded-sm min-h-[52px]"
          >
            Apply for Coaching
          </Link>
        </div>
      </nav>
    </div>
  );
}
