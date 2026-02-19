import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#060A12",
        "dark-blue": "#0B1F4D",
        accent: "#1E4FFF",
        "muted-gray": "#A9B1C1",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(30,79,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,79,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse_glow: {
          "0%, 100%": { boxShadow: "0 0 28px rgba(30,79,255,0.35)" },
          "50%": { boxShadow: "0 0 48px rgba(30,79,255,0.6)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        pulse_glow: "pulse_glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
