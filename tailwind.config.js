/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 Ajoute cette ligne !
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
