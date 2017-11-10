const path = require('path')
const SvgStore = require('webpack-svgstore-plugin')

module.exports = {
  plugins: [
    new SvgStore({
      svgoOptions: {
        plugins: [{ removeTitle: true }],
      },
      prefix: 'icon-',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 500000,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: path.resolve(process.cwd(), './src'),
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/scss/_variables.scss'),
                path.resolve(__dirname, '../src/scss/_utils.scss'),
              ],
            },
          },
        ],
      },
    ],
  },
}
