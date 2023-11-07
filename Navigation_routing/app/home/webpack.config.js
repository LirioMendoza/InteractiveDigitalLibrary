const { ModuleFederationPlugin } = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './page.jsx',
  output: {
    publicPath: 'http://localhost:3001/', 
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': './page.jsx',
      },
    }),
  ],
};