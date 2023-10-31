/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = nextConfig

const path = require('path');

// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: '/Downloads/pdf', // La carpeta donde se almacenarán los PDF en tu directorio de salida (output directory)
          },
        },
      ],
    });

    return config;
  },
};

/*module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.pdf$/, use: 'raw-loader' }],
  },
};*/


// next.config.js
/*module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next',
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        });
      }
  
      return config;
    },
  };*/