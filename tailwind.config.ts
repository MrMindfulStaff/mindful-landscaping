import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#2D6A2D",
          "green-dark": "#1E4D1E",
          "green-light": "#3A8A3A",
          charcoal: "#1A1A1A",
          gold: "#C9A84C",
          "gold-dark": "#B08F3A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
