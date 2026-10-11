import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          50:  "#FFF4ED",
          100: "#FFE4D1",
          200: "#FFC4A1",
          300: "#FF9D6B",
          400: "#FF7A3D",
          500: "#E2563A",
          600: "#C44226",
          700: "#9E321C",
          800: "#7A2516",
          900: "#581810",
        },
        charcoal: {
          50:  "#F5F5F6",
          100: "#E6E6E8",
          200: "#C9C9CD",
          300: "#A3A3A9",
          400: "#6E6E75",
          500: "#4A4A50",
          600: "#2F2F34",
          700: "#232327",
          800: "#1A1A1D",
          900: "#121214",
          950: "#09090B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(0 0 0 / 0.04), 0 4px 12px rgb(0 0 0 / 0.06)",
        "card-hover":
          "0 2px 4px rgb(0 0 0 / 0.06), 0 12px 24px rgb(0 0 0 / 0.10)",
      },
      borderRadius: {
        card: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
