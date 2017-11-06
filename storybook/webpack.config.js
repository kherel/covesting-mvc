const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
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
