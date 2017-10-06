process.env.BABEL_ENV = 'test';
module.exports = function(wallaby) {

  return {
    files: [
      'src/**/*.js',
      '!src/**/*.stories.js',
      '!src/**/*.test.js',
      'package.json'
    ],

    tests: [
      '__tests__/*.test.js',
      'src/**/*.test.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',
    compilers: {
     '**/*.js': wallaby.compilers.babel()
    },
    debug: true,

    setup: function(wallaby) {
      var jestConfig = require('./package.json').jest;
      jestConfig.globals = {
        "__DEV__": true
      };
      wallaby.testFramework.configure(jestConfig);
    }
  };
};
