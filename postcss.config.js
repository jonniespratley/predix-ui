module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}), // keep this first
    require('postcss-cssnext')()
    //require('autoprefixer')({ /* ...options */ }) // so imports are auto-prefixed too
  ]
};
