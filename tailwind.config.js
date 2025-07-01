export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
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