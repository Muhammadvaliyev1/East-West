/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'base': '500px'
      },
      fontFamily: {
        'ArchivoBlack': ['Archivo Black'],
        'Manrope': ['Manrope'],
      },
      colors: {
        'darkblue': '#132745',
        'primary-100': '#32FFCE',
        'wheat': '#F9F9F9'
      },
      backgroundImage: {
        'img': "url('../img/image1.png')",
        'imgtwo': "url('../img/image33.png')"
      },
    },
  },
  plugins: [],
}

