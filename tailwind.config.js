export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-pattern': "url('/src/assets/bg-footer.png')", // ganti path sesuai lokasi file
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'kr-blue': '#0047A0',
        'kr-red': '#CD2E3A',
        'kr-black': '#000000',
        'kr-white': '#FFFFFF',
        'light-blue': '#E6ECF5',
        'light-red': '#FDEAEB',
        'gray-text': '#666666',
        'success-green': '#22C55E',
        'warning-yellow': '#F59E0B',
      },
      transform: ['group-hover'],
    },
  },
  plugins: [],
};