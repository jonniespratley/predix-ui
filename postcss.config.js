module.exports = ({ file, options, env }) => {
  console.log('postcss.config.js', file, options, env);
  return {
    //parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
      'postcss-import': { root: file.dirname },
      'postcss-cssnext': options.cssnext ? require('postcss-cssnext') : false,
      //'autoprefixer': env == 'production' ? require('autoprefixer') : false,
      'cssnano': env === 'production' ? require('cssnano')() : false
      //'postcss-browser-reporter': true,
      //'postcss-reporter': true
    }
  };
};
