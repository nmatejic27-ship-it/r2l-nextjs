import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(26,111,255,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(26,111,255,0.06)_0%,transparent_50%)]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,111,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)",
          }}
        />
      </div>

      {/* Vertical accent line */}
      <div className="absolute right-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(26,111,255,0.15)] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-32 pb-20">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-8 opacity-0"
          style={{ animation: "fadeUp 0.8s ease 0.2s forwards" }}
        >
          <span className="block w-10 h-px bg-[#3d8bff]" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#3d8bff]">
            Elite Transformation Coaching
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-black uppercase leading-[0.9] tracking-[-0.01em] opacity-0 max-w-[900px]"
          style={{
            fontSize: "clamp(52px, 10vw, 136px)",
            animation: "fadeUp 0.9s ease 0.4s forwards",
          }}
        >
          TRANSFORM
          <br />
          <span className="text-[#3d8bff]">YOUR BODY.</span>
          <br />
          <span
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.2)",
              color: "transparent",
            }}
          >
            MASTER
          </span>{" "}
          YOUR
          <br />
          DISCIPLINE.
        </h1>

        {/* Sub */}
        <p
          className="text-[18px] text-muted font-light leading-[1.75] max-w-[460px] mt-8 opacity-0"
          style={{ animation: "fadeUp 0.9s ease 0.6s forwards" }}
        >
          Personalized transformation coaching for serious individuals ready to
          build elite physiques and unshakeable discipline.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-5 mt-12 opacity-0"
          style={{ animation: "fadeUp 0.9s ease 0.8s forwards" }}
        >
          <Link
            href="/apply"
            className="bg-[#1a6fff] hover:bg-[#3d8bff] text-white font-display font-black text-[16px] tracking-[0.15em] uppercase px-12 py-5 clip-btn transition-all duration-300 hover:shadow-[0_16px_48px_rgba(26,111,255,0.45)] hover:-translate-y-0.5 relative overflow-hidden group"
          >
            <span className="relative z-10">Apply for Coaching</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </Link>

          <Link
            href="/programs"
            className="text-muted hover:text-white font-display font-bold text-[14px] tracking-[0.12em] uppercase flex items-center gap-3 transition-colors duration-200 group"
          >
            View Programs
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="/results"
            className="text-muted hover:text-white font-display font-bold text-[14px] tracking-[0.12em] uppercase flex items-center gap-3 transition-colors duration-200 group"
          >
            See Results
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-white/[0.06] opacity-0"
          style={{ animation: "fadeUp 0.9s ease 1s forwards" }}
        >
          {[
            { num: "500+", label: "Clients Trained" },
            { num: "92%", label: "Transformation Rate" },
            { num: "6+", label: "Years Coaching" },
            { num: "18lbs", label: "Avg Fat Loss" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-black text-[48px] leading-none tracking-tight text-white">
                {s.num}
              </div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        style={{ animation: "fadeIn 1s ease 1.4s forwards" }}
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
