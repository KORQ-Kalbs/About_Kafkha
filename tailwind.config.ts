import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F2EE",
          surface: "#EDEAE5",
          border: "#D9D4CE",
        },
        charcoal: {
          DEFAULT: "#2C2C2C",
          muted: "#6B6560",
        },
        accent: {
          DEFAULT: "#8B7355",
          hover: "#7A6449",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
