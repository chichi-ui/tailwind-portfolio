/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
    fontFamily:{
      manrope:["Manrope", "sans-serif"],
      unbounded:["Unbounded", "sans-serif"]
    }
  },
  plugins: [],
}

