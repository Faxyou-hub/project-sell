/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ps': '320px',
        'pm': '375px',
        'pl': '425px',
      },
      fontFamily: {
        battambang: ['"Battambang"', 'serif'], // Add "Battambang" font
      },
      fontWeight: {
        regular: 400, // Define a custom weight for 'regular'
      },
    },
  },
  plugins: [],
}

