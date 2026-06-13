/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        brand: {
          primary: '#DE2A72',
          'primary-light': '#F5E6ED',
          'primary-dark': '#B01F59',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          muted: '#8A8A8A',
        },
        bg: {
          warm: '#F7F3EE',
          tinted: '#F5E6ED',
        },
      },
    },
  },
  plugins: [],
}