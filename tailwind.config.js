/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}"
      ],
    theme: {
      extend: {
        screens: {
          mv: '375px',
          // => @media (min-width: 640px) { ... }
        },
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
  }