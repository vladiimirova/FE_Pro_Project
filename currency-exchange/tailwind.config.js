/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#F6F7FF',
        black: '#1F1E25',
        gray: '#707C87',
        hover: '#2C36F2',
        white: '#FFFFFF',
        'gray-light': '#E0E1EA',
        'gray-line': '#C1C2CA',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('/public/img/bg.png')",
      },
      lineHeight: {
        140: '1.4', // 140% высоты строки
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-calendar-icon::-webkit-calendar-picker-indicator': {
          position: 'absolute',
          right: '17px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: '1',
          opacity: '0',
        },
      });
    },
  ],
};
