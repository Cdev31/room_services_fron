/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': 'rgb(249 115 22)',
        'room-theme': 'rgb(190 30 30)'
      }
    },
  },
  plugins: [],
}

