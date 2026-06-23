/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#111827',
        'navy-mid': '#2D3748',
        amber: '#E8A020',
        'amber-dark': '#c98a1a',
        cream: '#F8F8F8',
        ink: '#1C1C1E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
