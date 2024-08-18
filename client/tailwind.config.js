/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"]
      },
      colors: {
        primary: "#4D0197",
        secondary: "#E6E0EB",
        btnPrimary: "#4B0097",
        btnSecondary: "#E6E0EB"
      },
      screens: {
        '2xl': { 'max': '1535px' },
        'xl': { 'max': '1279px' },
        'lg': { 'max': '1023px' },
        'md': { 'max': '767px' },
        'sm': { 'max': '639px' },
      },
    },
  },
  plugins: [],
}

