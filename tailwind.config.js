module.exports = {
  // "./pages/**/*.js"だと引っかからないため変更
  purge: ["./**/*.js","./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily : {
      'header' : ['Titillium Web']
    },
    extend: {
      // animationで指定したクラス名には自動で「animate-」プレフィクスがつく
      animation: {
        'fadein': 'myFadein 3s linear',
        'slidein': 'slideIn 3s linear',
        'slidein-second': 'slideIn 5s linear',
      },
      backgroundImage: {
        'index-background' : "url('/background.jpg')"
      },
      keyframes: {
        myFadein: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
