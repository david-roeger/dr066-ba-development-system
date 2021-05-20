const theme = require('dr066-ba-design-token-builder');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...theme
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
