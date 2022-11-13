/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {




      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        twoxl: '1.563rem',
        threexl: '1.953rem',
        fourxl: '2.441rem',
        fivexl: '3.052rem',
      },







        extend: {
            backgroundImage: {
              'hero-pattern': "url('../public/assets/images/Blue-Halftone-Background.png')",
            }
          },
          
          
    },
    plugins: [],
  }