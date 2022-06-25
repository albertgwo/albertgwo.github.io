/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {
      animation: {
        ripple: "ripple 1.6s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Azeret Mono", "monospace"],
    },
    colors: {
      transparent: "transparent",
      black: "#00060E",
      white: "#fff",
      gray: {
        ...colors.slate,
        900: colors.gray[900],
      },
      orange: colors.amber,
      green: colors.lime,
      red: colors.red,
      blue: colors.blue,
    },
  },
  plugins: [],
};
