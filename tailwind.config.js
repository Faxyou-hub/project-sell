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
      colors: {
        "page": "#0B0119",
        "box": "#29243A",
        "text": "#897F98",
        "bg-icon": "#FC80C3",
        "from": "#B57DFA",
        "via": "#F689C0",
        "to": "#F5A276",
      },
      width: {
        1024: "1024px",
        1280: "1280px",
      },
      fontFamily: {
        battambang: ['"Battambang"', 'serif'], // Add "Battambang" font
      },
      fontWeight: {
        regular: 400, // Define a custom weight for 'regular'
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-15%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' }
        }
      },
      animation: {
        bounce: 'bounce 1s infinite'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',     // Firefox
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',               // Chrome, Safari, and Opera
        },
      });
    },
  ],
}

