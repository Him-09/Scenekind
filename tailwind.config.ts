import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F2F0EA", // page background
          card: "#FBFAF7", // raised cards
          sunken: "#E8E5DD", // subtle recessed panels
        },
        line: "#DDD9CF",
        ink: {
          DEFAULT: "#171716", // primary text / buttons
          soft: "#3D3C38",
        },
        mist: "#7A786F",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.9rem, 7.5vw, 6.5rem)",
          { lineHeight: "1.0", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "clamp(2.2rem, 4.5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(1.7rem, 3vw, 2.6rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      maxWidth: {
        wrap: "88rem",
      },
      borderRadius: {
        tile: "1.75rem",
      },
      transitionTimingFunction: {
        studio: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 48s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
