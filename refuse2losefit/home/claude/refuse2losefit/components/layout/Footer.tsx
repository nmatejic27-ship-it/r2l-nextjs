import Link from "next/link";

const footerLinks = {
  Navigate: [
    { label: "Home", href: "/" },
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Programs", href: "/programs" },
    { label: "Results", href: "/results" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Apply", href: "/apply" },
    { label: "Legal", href: "/legal" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d0d12] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display font-black text-[24px] uppercase tracking-wider text-white"
            >
              REFUSE<span className="text-[#3d8bff]">2</span>LOSE
              <span className="text-[#3d8bff]">FIT</span>
            </Link>
            <p className="text-muted text-[14px] mt-4 leading-relaxed max-w-xs">
              Elite transformation coaching for serious individuals who refuse to
              accept anything less than their best.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {["IG", "TK", "YT", "TW"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/[0.08] flex items-center justify-center font-mono text-[10px] text-muted hover:border-[#1a6fff] hover:text-white transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#3d8bff] mb-5">
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted text-[14px] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-[12px] tracking-[0.05em]">
            © {new Date().getFullYear()} Refuse2LoseFIT. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal" className="text-muted text-[12px] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal" className="text-muted text-[12px] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
