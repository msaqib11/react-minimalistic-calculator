/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueGray: {
          500: '#607D8B',  // Primary color for background
          600: '#546E7A',  // Darker variant for hover or active
        },
        amber: {
          500: '#FFC107',  // Accent color for operator buttons
        },
        coolGray: {
          DEFAULT: '#ECEFF1',  // Background for number buttons
        },
        charcoal: {
          DEFAULT: '#263238',  // Text color for numbers and operators
        },
        lime: {
          500: '#CDDC39',  // Button hover/active state
        },
      },
    },
  },
  plugins: [],
}

