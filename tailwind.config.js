const { colors } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        cyan: {
          ...colors.cyan,
          400: "#00C5D9",
        },
        rose: {
          ...colors.rose,
          400: "#FC6142",
          500: "#FC6142",
          600: "#F25434",
        },
        amber: {
          ...colors.amber,
          400: "#FFD848",
        },
      },
    },
  },
  plugins: [],
};
