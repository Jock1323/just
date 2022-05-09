module.exports = {
  mode:"JIT",
  content: ["./src/**/*.{html,js}",
"index.html"],
  theme: {
    extend: {
      screens:{
        'xs':'320px',
      },
      spacing:{
        'hf':"100vh",
        'vh': '100vh',
        'w': '100%',
        'img1': '500px',
        'img2': '300px',
      }
    },
  },
  plugins: [],
}
