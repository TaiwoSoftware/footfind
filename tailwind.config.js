module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    stroke: {
      current: 'black'
    },
    extend: {
      colors: {
        'logo-orange' : '#F48221'
      },
      fontFamily:{
        customMonserrat:['monserrat', 'sans-serif'],
        customNunito:['nunito', 'sans-serif'],
        customDancing:['dancing', 'cursive']
      }
    },
  },
  plugins: [],
}
