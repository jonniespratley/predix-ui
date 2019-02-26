const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const pkg = require('../package.json');
const ROOT_PATH = path.resolve(__dirname, '../');

const extractSass = new ExtractTextPlugin({
	filename: `${pkg.name}.css`,
  disable: true,
  allChunks: true
});

const sassRules = {
  test: /\.s(a|c)ss$/,
  use: extractSass.extract({
    fallback: 'style-loader',
    use: [
    //  'babel-loader',
      //'raw-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        //  modules: true,
          sourceMap: true,
          camelCase: true
        }
      },
      /*
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },*/
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          //importer: require('node-sass-import-once'),
           importOnce: {
             index: true,
             css: true,
             bower: true
           },
          includePaths: [
            'sass',
            'styles',
            'bower_components',
            'node_modules'
          ].map((d) => path.join(ROOT_PATH, d)).map((g) => glob.sync(g)).reduce((a, c) => a.concat(c), [])
        }
      }
    ]
  })
};


// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, env, defaultConfig) => {
  
  //const config = genDefaultConfig(storybookBaseConfig, env);
  console.log('storybookBaseConfig', defaultConfig);

  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  defaultConfig.resolve.extensions.push( '.jsx', '.scss');
  
  //defaultConfig.plugins.push(extractSass);
  //defaultConfig.module.rules.push(sassRules);

  return defaultConfig;
};
