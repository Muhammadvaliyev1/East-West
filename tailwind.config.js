/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'ArchivoBlack': ['Archivo Black'],
        'Manrope': ['Manrope'],
      },
      colors: {
        'darkblue': '#132745',
        'primary-100': '#32FFCE',
      }
    },
  },
  plugins: [],
}

