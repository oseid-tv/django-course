/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './**/templates/**/*.html',
    './static/src/**/*.js',
    './apps/*/templates/**/*.html', // If you use Django apps
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
