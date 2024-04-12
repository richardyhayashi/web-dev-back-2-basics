const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.{js|jsx}$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/presets-env',
                '@babel/preset-react'
              ]
            },
          },
        }
      ],
    }
}