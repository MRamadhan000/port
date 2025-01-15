/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      screens: {
        'mobile-M': '375px',
      },
      colors: {
        'primary': '#14b8a6',
        'dark': '#0f172a',
        'secondary' : '#64748b'
      },
    },
  },
  plugins: [],
}

