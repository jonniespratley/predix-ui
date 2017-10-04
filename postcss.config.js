module.exports = ({ file, options, env }) => {
//  console.log('postcss.config.js', file, options, env);
  let opt = {
    plugins: []
  };
  //opt.plugins.push(require('postcss-import')({root: file.dirname}));
  opt.plugins.push(require('postcss-cssnext'));

  opt.plugins.push(require('cssnano'));

  if(options.reporter){
    opt.plugins.push(require('postcss-browser-reporter'));
    opt.plugins.push(require('postcss-reporter'));
  }

  return opt;
  /*{
    //parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
      'postcss-import': { root: file.dirname },
      'postcss-cssnext': options.cssnext ? require('postcss-cssnext') : false,
      //'autoprefixer': env == 'production' ? require('autoprefixer') : false,
      'cssnano': env === 'production' ? require('cssnano')() : false
      //'postcss-browser-reporter': true,
      //'postcss-reporter': true
    }
  };*/
};
