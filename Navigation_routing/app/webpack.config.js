const { ModuleFederationPlugin } = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './page.js',
output: {
    publicPath: 'http://localhost:3000/', 
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      remotes: {
        home: 'home@http://localhost:3001/remoteEntry.js',
        login: 'login@http://localhost:3002/remoteEntry.js',
        catalog: 'catalog@http://localhost:3003/remoteEntry.js',
      },
    }),
  ],
};
