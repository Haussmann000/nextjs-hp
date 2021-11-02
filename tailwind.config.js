module.exports = {
  // "./pages/**/*.js"だと引っかからないため変更
  purge: ["./**/*.js","./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
