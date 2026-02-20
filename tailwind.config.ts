import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#0f172a",
        accent: "#14b8a6"
      },
      boxShadow: {
        panel: "0 10px 30px -12px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
