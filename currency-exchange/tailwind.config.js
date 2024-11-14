/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#F6F7FF',  // Кастомный цвет для фона хедера
        'black':  '#1F1E25',     
        'gray-nav': '#707C87',
        'hover': '#2C36F2',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};