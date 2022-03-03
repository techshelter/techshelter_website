module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"], 
  theme: {
    extend: {},
    fontFamily: {
        'handlee': ['"handlee"']
      }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}