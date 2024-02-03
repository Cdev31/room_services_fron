/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'room-theme': 'rgb(249 115 22)'
      }
    },
  },
  plugins: [],
}

