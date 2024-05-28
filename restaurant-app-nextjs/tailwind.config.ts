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
          "linear-gradient(45deg, rgba(250,51,51,1) 19%, rgba(252,135,135,1) 61%)",
      },
      colors: {
        "bg-gold": "#e6a33ed5;",
        "gray-600": "#919495",
        "gray-800": "#333",
        "blue-600": "#337AB7",
      },
      boxShadow: {
        lg: "8px 12px 30px rgba(0, 0, 0, 0.1)",
        myshadow: "3px 3px 16px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
