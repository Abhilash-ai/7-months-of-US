/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F5EFEB',
          300: '#EFE7DE',
          400: '#E2D3C4',
        },
        ivory: '#FFFDF9',
        parchment: '#FAF5EE',
        burgundy: {
          50: '#FDF3F5',
          100: '#F9E2E6',
          200: '#F2BAC4',
          300: '#DE7F91',
          400: '#9B3B49',
          500: '#722F37',
          600: '#5A1F26',
          700: '#43141A',
        },
        mutedRed: '#C34A4A',
        peach: {
          50: '#FDF8F4',
          100: '#FCEADE',
          200: '#FAD2B8',
          300: '#F5B892',
          400: '#E79667',
        },
        lavender: {
          50: '#F8F4FA',
          100: '#EFE6F5',
          200: '#E3D5E8',
          300: '#CDB6DA',
          400: '#B28DC3',
        },
        gold: {
          50: '#FDFCF7',
          100: '#FAF5DE',
          200: '#F4E7B2',
          300: '#E7D076',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A98336',
        },
        sage: {
          100: '#EEF3EC',
          200: '#D8E4D5',
          300: '#ADC4A7',
          400: '#8FA988',
        },
        ink: {
          900: '#231D1A',
          800: '#38302C',
          700: '#50443F',
          600: '#6A5C56',
          500: '#887770',
          400: '#A89790',
          300: '#CDBFB9',
          200: '#E6DDD8',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(74, 50, 40, 0.08), 0 2px 8px 0 rgba(74, 50, 40, 0.04)',
        'glass-hover': '0 16px 48px 0 rgba(74, 50, 40, 0.12), 0 4px 12px 0 rgba(74, 50, 40, 0.06)',
        'soft-glow': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'rose-glow': '0 0 40px -8px rgba(195, 74, 74, 0.28)',
        'burgundy-glow': '0 0 40px -8px rgba(114, 47, 55, 0.3)',
        'polaroid': '0 10px 30px -10px rgba(56, 48, 44, 0.18), 0 2px 6px -2px rgba(56, 48, 44, 0.08)',
        'pin': '0 4px 10px rgba(0,0,0,0.15)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-gentle': 'floatGentle 4.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'spin-very-slow': 'spin 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.92', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.025)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
