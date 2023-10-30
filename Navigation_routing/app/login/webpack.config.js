const { ModuleFederationPlugin } = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './page.jsx',
  output: {
    publicPath: 'http://localhost:3002/', 
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'login',
      filename: 'remoteEntry.js',
      exposes: {
        './Login': './page.jsx',
      },
    }),
  ],
};