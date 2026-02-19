import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-5 sm:px-10 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">Real Results</p>
        <h2 className="section-h2">
          People Who
          <br />
          Refused to Lose.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card relative overflow-hidden p-9 flex flex-col"
            >
              <div className="result-badge">{t.result}</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "#fbbf24" }} aria-hidden>
                    ★
                  </span>
                ))}
              </div>

              <p
                className="text-base leading-relaxed font-light italic flex-grow mb-6"
                style={{ color: "var(--gray)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center font-display text-lg text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--dark-blue), var(--accent))",
                  }}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white">
                    {t.name}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "var(--gray)" }}
                  >
                    {t.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
