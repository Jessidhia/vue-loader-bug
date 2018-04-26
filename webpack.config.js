module.exports = {
  module: {
    rules: [
      {
        test: /\.vue/,
        loader: 'vue-loader'
      },
      {
        resource: () => true,
        use: []
      }
    ]
  },
  plugins: [
    new (require('vue-loader').VueLoaderPlugin)()
  ]
}