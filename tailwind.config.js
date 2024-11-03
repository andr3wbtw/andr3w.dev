/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './**/*.{html,js}',   // Scan your project for HTML and JS files
      '!./node_modules/**/*' // Exclude node_modules directory
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('daisyui'),('@tailwindcss/aspect-ratio')
  ],
}

