/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  //exportTrailingSlash: true,
}


module.exports = nextConfig
module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
}
