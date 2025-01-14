/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      screens: {
        'mobile-M': '375px',
      },
      colors: {
        'primary': '#14b8a6',
        'dark': '#0f172a',
      },
    },
  },
  plugins: [],
}

