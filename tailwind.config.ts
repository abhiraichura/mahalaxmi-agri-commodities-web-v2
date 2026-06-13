import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          white: '#FFFFFF',
          warm: '#F7F3EE',
          tinted: '#F5E6ED',
        },
        border: {
          light: '#E8E3DD',
          strong: '#1A1A1A',
        },
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'dm-serif': ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
