/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-image.png')",
      },
      colors:{
        mainBlue: "rgb(0,85,168)",
        mainRed: "rgb(196, 12, 12)"
      },
    },
  },
  plugins: [],
}