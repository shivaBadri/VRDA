import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          700: "#1B3A6B",
          800: "#12294F",
          900: "#0A1E3F",
          950: "#081733",
        },
        gold: {
          400: "#F2B53D",
          500: "#E9A413",
          600: "#C6890F",
        },
        ink: "#1C2942",
        steel: "#55627A",
        mist: {
          50: "#F5F7FA",
          100: "#EDF1F6",
        },
        line: "#E2E8F1",
        aqua: {
          400: "#35B0E8",
          500: "#1E9AD6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
