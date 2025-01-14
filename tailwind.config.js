/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#14b8a6',
        'dark': '#0f172a',
      },
      screens: {
        'mobileS': '320px',
        'mobileM': '375px',
        'mobileL': '425px',
      },
    },
  },
  plugins: [],
}

