module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors:{
        "Orange": "bg-orange-200",
        "Lime": "bg-lime-600",

      }
    },
  },
  plugins: [require('@tailwindcss/forms')]
}