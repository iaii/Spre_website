/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0B011D",
          accent: {
            green: "#1ABC9C",
            purple: "#7854F7",
          },
          light: "#F8F9FB",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
