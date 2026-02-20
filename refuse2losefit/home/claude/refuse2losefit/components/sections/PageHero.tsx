interface PageHeroProps {
  label: string;
  heading: React.ReactNode;
  sub?: string;
}

export default function PageHero({ label, heading, sub }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 px-6 md:px-10 overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(26,111,255,0.1),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,111,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 100%, black 20%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="block w-8 h-px bg-[#3d8bff]" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#3d8bff]">
            {label}
          </span>
        </div>
        <h1 className="font-display font-black uppercase leading-[0.92] tracking-[-0.01em] text-[40px] md:text-[64px] lg:text-[80px]">
          {heading}
        </h1>
        {sub && (
          <p className="text-muted text-[16px] md:text-[18px] leading-relaxed max-w-lg mt-5">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
