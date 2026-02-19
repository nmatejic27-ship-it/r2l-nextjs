import Image from "next/image";

const links = [
  { label: "What's Included", href: "#offer" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: "#apply" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="px-5 sm:px-10 py-16"
      style={{
        borderTop: "1px solid var(--border)",
        background: "rgba(6,10,18,0.8)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <a href="#home" aria-label="REFUSE2LOSEFIT — Back to top">
          <Image
            src="/logo.png"
            alt="REFUSE2LOSEFIT"
            width={120}
            height={40}
            className="object-contain opacity-60 hover:opacity-90 transition-opacity"
          />
        </a>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-8 flex-wrap justify-center list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-heading text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                  style={{ color: "var(--gray)", textDecoration: "none" }}
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

        {/* Copy */}
        <div
          className="text-center text-xs"
          style={{ color: "rgba(169,177,193,0.4)" }}
        >
          <p>
            &copy; {new Date().getFullYear()} REFUSE2LOSEFIT. All rights
            reserved.
          </p>
          <p className="mt-1">
            Results are not typical. Individual outcomes vary based on effort,
            consistency, and starting point.
          </p>
        </div>
      </div>
    </footer>
  );
}
