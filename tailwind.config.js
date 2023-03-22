/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "main-color": "#FF7062",
      "sec-blue": "#55ACEE",
      "dark-main": "#222222",
      "icon-color": "#444444",
      "gray-dark": "#273444",
      gray: "#777777",
      line: "#E3E3E3",
      offwhite: "#F7F7F7",
      typohero: "#EEEEEE",
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
    },
  },
  plugins: [],
};
