import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          50: "#f5f8f2",
          100: "#e0ead7",
          200: "#c6d7b3",
          300: "#a8c18a",
          400: "#8ca86c",
          500: "#6f8e51",
          600: "#56703f",
          700: "#405531",
          800: "#2b3921",
          900: "#152010"
        },
        bloom: {
          50: "#fff5f7",
          100: "#ffdce4",
          200: "#ffb7c9",
          300: "#ff8dac",
          400: "#ff638f",
          500: "#ff3a72",
          600: "#d9265a",
          700: "#a81c44",
          800: "#76122e",
          900: "#46081a"
        }
      },
      fontFamily: {
        display: ["'Fredoka'", "cursive"],
        body: ["'Quicksand'", "sans-serif"]
      }
    }
  },
  plugins: [animate]
};

export default config;
