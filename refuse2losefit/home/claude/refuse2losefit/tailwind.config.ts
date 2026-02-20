import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        black: "#050508",
        charcoal: "#0d0d12",
        deep: "#10101a",
        panel: "#141420",
        card: "#1a1a28",
        blue: {
          DEFAULT: "#1a6fff",
          bright: "#3d8bff",
          dim: "rgba(26,111,255,0.18)",
          faint: "rgba(26,111,255,0.07)",
        },
        border: "rgba(255,255,255,0.06)",
        muted: "#6b6b82",
        offwhite: "#e8e8f0",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        marquee: "marquee 30s linear infinite",
        "counter": "counter 2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(26,111,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(26,111,255,0.12) 0%, transparent 60%)",
        "blue-glow":
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,111,255,0.14), transparent 65%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
