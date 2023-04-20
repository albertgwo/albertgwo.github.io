const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    require('tailwindcss'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-opacity': {
          '--text-opacity': '1',
        },
        '.text-no-opacity': {
          '--text-opacity': '0',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
    require('autoprefixer'),
  ],
};
