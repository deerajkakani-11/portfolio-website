import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          "orange-soft": "#fed7aa",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15,23,42,0.25)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
