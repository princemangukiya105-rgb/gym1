/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#D4FF00',       // Electric performance lime
          'lime-hover': '#BEEC00',
          'lime-dim': 'rgba(212, 255, 0, 0.12)',
          'lime-glow': 'rgba(212, 255, 0, 0.35)',
          dark: '#08090A',       // Deepest obsidian black
          card: '#111317',       // Dark charcoal card
          'card-hover': '#181B22',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-focus': 'rgba(212, 255, 0, 0.5)',
          muted: '#8E95A5',
          light: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'lime-glow': '0 0 25px -5px rgba(212, 255, 0, 0.35)',
        'lime-sm': '0 0 12px 0 rgba(212, 255, 0, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
