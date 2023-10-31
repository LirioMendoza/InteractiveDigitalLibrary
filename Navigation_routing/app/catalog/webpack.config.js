const { ModuleFederationPlugin } = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './remoteEntry',
  output: {
    publicPath: 'http://localhost:3003/', 
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'catalog',
      filename: 'remoteEntry.js',
      exposes: {
        './Catalog': './page',
      },
    }),
  ],
};