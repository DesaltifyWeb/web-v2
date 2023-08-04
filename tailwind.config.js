/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "index.html",
    "404.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'serif'],
        'league': ['League Spartan', 'serif'],
      },
      colors: {
        night: '#0D1B2A',
        oxford: '#1b263b',
        yinmin: '#415A77',
        silver: '#778DA9',
        plat: '#E0E1DD',
      },
    },
  },
  plugins: [],
}

