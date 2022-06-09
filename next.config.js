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
  return baseConfig;
}
