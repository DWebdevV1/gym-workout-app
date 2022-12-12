/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green-default': '#DAEE01',
        'neon-green-hover': '#E8FF00',
      },
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
