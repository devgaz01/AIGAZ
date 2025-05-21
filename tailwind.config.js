/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0fffd',
          100: '#b8fff9',
          200: '#83fff5',
          300: '#3dffef',
          400: '#0CDED7',
          500: '#00b8b2',
          600: '#009491',
          700: '#007674',
          800: '#065e5c',
          900: '#0a4d4c',
        },
        secondary: {
          50: '#f4ffe0',
          100: '#e6ffc2',
          200: '#d5ff94',
          300: '#c5ff5a',
          400: '#B8FF00',
          500: '#93d600',
          600: '#6faa00',
          700: '#538000',
          800: '#3e6500',
          900: '#325200',
        },
        dark: {
          950: '#051622',
          900: '#0a1f2e',
          800: '#10303f',
          700: '#164354',
          600: '#1c586b',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'circuit-pattern': "url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(12, 222, 215, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(12, 222, 215, 0.8), 0 0 30px rgba(184, 255, 0, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};