const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#002856",
        purple: "#7531FF",
        orange: colors.orange,
        teal: colors.teal,
        coolGray: colors.coolGray,
      },
      fontFamily: {
        sans: ['"St. Jude Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}