/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'mdInvert': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }

    },
    colors: {
      'neutral': {
        50: '#FCFCFD',
        100: '#EEF0F6',
        200: '#DFE2EC',
        300: '#D1D4E0',
        400: '#BBBFCD',
        500: '#9B9FB0',
        600: '#5C6070',
        700: '#363A49',
        800: '#1C2137',
        900: '#191D2E',
      },
      'dc': {
        50: '#FFF1F2',
        100: '#FFDFE1',
        200: '#FFC5C9',
        300: '#F3F3F3',
        400: '#FF646F',
        500: '#FF2837',
        600: '#ED1524',
        700: '#C80D1A',
        800: '#A50F19',
        900: '#88141C',
      },
  },
  },
  plugins: [],
}