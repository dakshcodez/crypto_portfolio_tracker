/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Trading / Binance-style backgrounds
        background: '#0B0E11',
        'background-secondary': '#14151A',
        card: '#1E2329',
        'trading-bg': '#0B0E11',
        'trading-card': '#1E2329',
        // Text
        text: '#EAECEF',
        'text-secondary': '#848E9C',
        'text-muted': '#5E6673',
        // Accent
        'binance-yellow': '#FCD535',
        'binance-green': '#0ECB81',
        'binance-red': '#F6465D',
        gain: '#0ECB81',
        loss: '#F6465D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'trading': '0.375rem', /* rounded-md */
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
