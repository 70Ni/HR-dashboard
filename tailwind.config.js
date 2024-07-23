import colors from "./src/api/colors.json";
import font from "./src/api/font.json";
import fontSize from "./src/api/fontSize.json";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: font,
      fontSize: fontSize,
      colors: colors,
      borderRadius: {
        default: "10px",
      },
    },
  },
  plugins: [],
};
