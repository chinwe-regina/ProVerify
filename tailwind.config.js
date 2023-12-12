/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        S320: {max: "320px"},
        S375: {max: "375px"},
        S425: {max: "425px"},
        S800: {max: "800px"},
        S1000: {max: "1000px"}
      }
    },
  },
  plugins: [],
}