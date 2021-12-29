module.exports = {
  // "./pages/**/*.js"だと引っかからないため変更
  purge: ["./**/*.js","./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // animationで指定したクラス名には自動で「animate-」プレフィクスがつく
      animation: {
        'fadein': 'myFadein 3s linear',
      },
      keyframes: {
        myFadein: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
