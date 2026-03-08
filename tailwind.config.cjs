/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F44',
        accent: '#F97316',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
}

