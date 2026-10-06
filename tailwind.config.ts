import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Marine du brand book (600 = couleur principale, boutons, liens).
        brand: {
          50: "#eef2f7",
          100: "#dde5ee",
          200: "#bccbdc",
          300: "#8fa6c0",
          400: "#5f7d9f",
          500: "#3a5a7e",
          600: "#16324F",
          700: "#122a43",
          800: "#0e2238",
          900: "#0b1c2f",
        },
        // Citron : le surligneur numérique (emphase, réussite). Jamais en texte sur fond clair.
        citron: {
          50: "#f7fde4",
          100: "#eef9c8",
          200: "#e2f59e",
          300: "#d6f270",
          400: "#C8F03C",
          500: "#C8F03C",
          DEFAULT: "#C8F03C",
          600: "#C8F03C",
          700: "#a8d11f",
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
