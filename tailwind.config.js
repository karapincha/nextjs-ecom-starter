/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1200px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '32px',
          lg: '0',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
}
