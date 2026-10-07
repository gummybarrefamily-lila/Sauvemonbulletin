import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Bleu d'origine du site (600 = couleur principale, boutons, liens).
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcdbff",
          300: "#8ec5ff",
          400: "#59a3ff",
          500: "#3380fc",
          600: "#1d60f1",
          700: "#154bde",
          800: "#183eb4",
          900: "#19398d",
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
