import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Encre bleue (600 = couleur principale).
        brand: {
          50: "#eef1fb",
          100: "#dde3f6",
          200: "#bcc8ee",
          300: "#8fa2e0",
          400: "#5d78cf",
          500: "#3a57bd",
          600: "#2440a8",
          700: "#1d3590",
          800: "#182b74",
          900: "#14244f",
        },
        // Stylo rouge / marge du cahier.
        marge: {
          50: "#fdeeed",
          100: "#fbd9d7",
          DEFAULT: "#e2403a",
          600: "#e2403a",
          700: "#c22f29",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"],
        main: ["var(--font-kalam)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
