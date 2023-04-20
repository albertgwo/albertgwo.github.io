/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        'new-spirit': ['NewSpirit', 'serif'],
        'new-spirit-condensed': ['NewSpiritCondensed', 'serif'],
        retail: ['Retail', 'sans-serif'],
      },
      // scale: {
      //   200: '2',
      //   300: '3',
      //   400: '4',
      //   500: '5',
      // },
      // transitionDelay: {
      //   2000: '2000ms',
      //   3000: '3000ms',
      //   4000: '4000ms',
      //   5000: '5000ms',
      // },
      // transitionDuration: {
      //   2000: '2000ms',
      //   2500: '2500ms',
      //   3000: '3000ms',
      //   4000: '4000ms',
      //   5000: '5000ms',
      // },
      // transitionTimingFunction: {
      //   'rush-in-ease-out': 'cubic-bezier(0.045, 0.695, 0.405, 0.870)',
      //   'hard-ease-out': 'cubic-bezier(0.100, 0.975, 0.340, 1.005)',
      // },
    },
  },
  plugins: [],
};
