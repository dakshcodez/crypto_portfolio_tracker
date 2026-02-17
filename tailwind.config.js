/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds
        background: '#0D0D0F',
        'background-secondary': '#111114',
        card: '#16161A',
        // Neon accents
        'neon-blue': '#00F0FF',
        'neon-purple': '#9D00FF',
        'neon-pink': '#FF008C',
        'neon-green': '#00FF85',
        loss: '#FF3B3B',
        // Text
        text: '#FFFFFF',
        'text-secondary': '#A0A0A0',
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 240, 255, 0.3), 0 0 20px rgba(0, 240, 255, 0.1)',
        'neon-purple': '0 0 10px rgba(157, 0, 255, 0.3), 0 0 20px rgba(157, 0, 255, 0.1)',
        'neon-pink': '0 0 10px rgba(255, 0, 140, 0.3), 0 0 20px rgba(255, 0, 140, 0.1)',
        'neon-green': '0 0 10px rgba(0, 255, 133, 0.3), 0 0 20px rgba(0, 255, 133, 0.1)',
        'neon-glow': '0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.2)',
        'card-glow': '0 0 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 240, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-neon-blue': 'linear-gradient(135deg, #00F0FF 0%, #9D00FF 100%)',
        'gradient-neon-green': 'linear-gradient(135deg, #00FF85 0%, #00F0FF 100%)',
        'gradient-neon-pink': 'linear-gradient(135deg, #FF008C 0%, #9D00FF 100%)',
      },
    },
  },
  plugins: [],
}

