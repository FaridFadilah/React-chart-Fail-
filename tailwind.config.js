/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize : {
      "3xs" : ".25rem",
      "2xs" : ".6rem",
      "xs" : ".75rem",
      "sm" : ".875rem",
      "md" : "1rem",
      "lg" : "1.125rem",
      "xl" : "1.25rem",
      "2xl" : "1.5rem",
      "3xl" : "1.875rem",
      "4xl" : "2.25rem",
      "5xl" : "3rem",
      "6xl" : "4rem",
      "7xl" : "5rem",
      "product" : "10rem",
    },
    fontFamily:{
      "sans" : ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
