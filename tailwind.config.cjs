module.exports = {
  content: [
    './app/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './data/**/*.{js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#6366F1'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}
