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
        'full-screen': '10vw'
      },
      extend: {
        fontFamily: {
          sans: ['MontserratSubrayada-Regular', 'sans-serif']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
