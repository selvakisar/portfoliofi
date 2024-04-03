/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:"#FFFFFF",
    },
  },
  plugins: [require("daisyui")],
}