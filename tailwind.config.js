const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      fontSize: {
        'vw': '10vw',
        'full-screen': '10vw'
      },
      extend: {
        fontFamily: {
          sans: ['SF-Pro-Text-Regular','SF-Pro-Text-Heavy'],
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
