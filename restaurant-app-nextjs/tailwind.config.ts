import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "navbar-gradient":
          "linear-gradient(0deg, rgba(153,153,153,1) 0%, rgba(68,68,68,1) 33%, rgba(11,11,11,1) 66%)",
      },
      colors: {
        "bg-gold": "#e6a33ed5;",
      },
    },
  },
  plugins: [],
};

export default config;
