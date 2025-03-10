/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./**/templates/**/*.html",
    "./static/src/**/*.js",
    "./apps/*/templates/**/*.html", // If you use Django apps
  ],
  theme: {
    extend: {
      boxShadow: {
        underline: "inset 0 -2px 0 0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
