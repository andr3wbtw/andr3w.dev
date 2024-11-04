/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './**/*.{html,js}',   // Scan your project for HTML and JS files
      '!./node_modules/**/*' // Exclude node_modules directory
  ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-animation': 'linear-gradient(270deg, #bababa, #dbdbdb)',
            },
            animation: {
                'gradient-move': 'gradientAnimation 3s ease infinite',
            },
            keyframes: {
                gradientAnimation: {
                    '0%': {'background-position': '0% 50%'},
                    '50%': {'background-position': '100% 50%'},
                    '100%': {'background-position': '0% 50%'},
                },
            },
        },
    },
  plugins: [
      require('daisyui'),('@tailwindcss/aspect-ratio')
  ],
}

