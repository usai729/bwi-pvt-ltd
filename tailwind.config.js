/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        "1p5": "1.5px",
      },
      colors: {
        theme1: "#281B5A",
      },
    },
  },
  plugins: [],
};
