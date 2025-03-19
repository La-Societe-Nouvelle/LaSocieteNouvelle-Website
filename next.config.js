const path = require('path')

module.exports = (env) => {
  
  let baseConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  }

  if(env.production)
    return {...baseConfig,
            basePath: 'https://lasocietenouvelle.org'};
  return {
    ...baseConfig,
    experimental: {
      workerThreads: false,
      cpus: 1
    },
  };
}

module.exports = {
  reactStrictMode: true,

  // async rewrites() {
  async redirects() {
    return [
      {
        source: "/:portail*",
        has: [
          {
            type: "host",
            value: "sinese.fr",
          },
        ],
        destination: "https://sinese.fr",
        permanent: true,
      },
    ];
  },
};
