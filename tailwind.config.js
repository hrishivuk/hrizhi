/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary:"#DDDDDD",
      secondary:"#1DB954",
      teritary:"#8f9094",
      border:"#606060",
      black:"#000000",
      white:"#FFFFFF",
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '900px',
      'xl': '1024px',
      '2xl': '1280px',
    }
  },
  plugins: [],
}