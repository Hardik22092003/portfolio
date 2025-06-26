/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          light: '#a18cd1',
          dark: '#fbc2eb',
        },
        glass: 'rgba(255,255,255,0.6)',
        'glass-dark': 'rgba(36,37,38,0.6)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
