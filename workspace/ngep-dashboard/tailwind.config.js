/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#b9e6ff',
          300: '#88d6ff',
          400: '#4bbfff',
          500: '#1da2ff',
          600: '#0a82e6',
          700: '#0666b4',
          800: '#084f8a',
          900: '#0a426f',
        },
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgba(0,0,0,0.05), 0 1px 3px 0 rgba(0,0,0,0.1)',
      },
      borderRadius: {
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}