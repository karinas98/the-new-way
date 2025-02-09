/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fixed: changed `color` to `colors`
        orange: "#DB4A2B",
        lightblue: "#F6F9FB",
        grey: "#BCAFA6",
        black: "#000000",
        white: "#ffffff",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: [
          "50px",
          {
            lineHeight: "58px",
          },
        ],
        primaryheadline: [
          "60px",
          {
            lineHeight: "54px",
          },
        ],
        secondaryheadline: [
          "22px",
          {
            lineHeight: "54px",
          },
        ],
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
