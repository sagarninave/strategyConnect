module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        md: '600px',
      },
      width: {
        te: '1100px',
      },
      rotate: {
        '-45': '-36deg',
      },
      transform: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
};
