/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#292929",
        "red": "#e31e25",
        "blue": "#372d74",
        "grey": "#7a797b",
      },
      fontFamily: {
        vollkorn: ['Vollkorn', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
