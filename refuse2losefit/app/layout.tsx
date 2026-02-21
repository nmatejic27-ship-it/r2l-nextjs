import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import MobileMenu from "@/components/ui/MobileMenu";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Refuse2LoseFIT | Elite Transformation Coaching",
  description:
    "Stop making excuses. Start making progress. Elite 1:1 fitness coaching for serious men and women ready to transform their body, build discipline, and master their physique.",
  keywords: "fitness coaching, transformation coaching, elite coaching, personal trainer, body transformation",
  openGraph: {
    title: "Refuse2LoseFIT | Elite Transformation Coaching",
    description: "Elite 1:1 fitness coaching for serious men and women ready to transform.",
    type: "website",
  },
};

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        {/* ── Navigation ───────────────────────────────────────────── */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-border">
          <nav
            className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-2xl tracking-widest text-white hover:text-brand-blue transition-colors"
              aria-label="Refuse2LoseFIT home"
            >
              REFUSE2LOSE<span className="text-brand-blue">FIT</span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <Link
              href="/apply"
              className="btn-primary hidden md:inline-flex px-6 py-2.5 text-sm rounded-sm"
            >
              Apply Now
            </Link>

            {/* Mobile menu toggle */}
            <MobileMenu navLinks={navLinks} />
          </nav>
        </header>

        {/* ── Page Content ─────────────────────────────────────────── */}
        <main>{children}</main>

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer className="bg-brand-black border-t border-brand-border py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-display text-2xl tracking-widest text-white">
                REFUSE2LOSE<span className="text-brand-blue">FIT</span>
              </p>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap justify-center gap-6">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors tracking-widest uppercase font-bold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/apply"
                      className="text-sm text-brand-blue hover:text-white transition-colors tracking-widest uppercase font-bold"
                    >
                      Apply
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="gradient-divider mt-8 mb-6" />
            <p className="text-center text-white/30 text-xs tracking-widest">
              © {new Date().getFullYear()} REFUSE2LOSEFIT. ALL RIGHTS RESERVED. ELITE COACHING FOR THE SERIOUS.
            </p>
          </div>
        </footer>

        {/* ── Sticky Mobile CTA ────────────────────────────────────── */}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
