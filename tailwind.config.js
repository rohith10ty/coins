/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          accent: '#00F0FF',
        },
        dark: {
          bg: '#080B11',
          card: '#0F1420',
          hover: '#151D2E',
          border: '#1E293B',
          muted: '#64748B',
          text: '#F8FAFC',
        },
        gain: {
          DEFAULT: '#10B981',
          light: '#34D399',
          bg: 'rgba(16, 185, 129, 0.1)',
        },
        loss: {
          DEFAULT: '#F43F5E',
          light: '#FB7185',
          bg: 'rgba(244, 63, 94, 0.1)',
        }
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'ticker': 'ticker 35s linear infinite',
      }
    },
  },
  plugins: [],
}
