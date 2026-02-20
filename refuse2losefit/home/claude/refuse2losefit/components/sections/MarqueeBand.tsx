export default function MarqueeBand() {
  const items = [
    "Serious Results",
    "Elite Coaching",
    "Built Different",
    "No Excuses",
    "Discipline Over Motivation",
    "Transform Your Body",
    "Master Your Mindset",
    "Refuse to Lose",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden bg-[#1a6fff] border-y border-[rgba(255,255,255,0.1)] py-4">
      <div
        className="flex gap-0 w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 px-12 whitespace-nowrap"
          >
            <span className="font-display font-black text-[13px] tracking-[0.2em] uppercase text-white/90">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
