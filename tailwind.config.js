/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['abdo', 'Roboto', 'sans-serif'],
      },
      colors: {
        red: '#c62430',
        yellow: '#eda521',
        purple: '#422b7a',
        grey: '#181A1B',
      },
    },
  },
};
