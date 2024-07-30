/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins'],
        'sf': ['SF Pro'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}