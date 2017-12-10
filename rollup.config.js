import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';
const importOnce = require('node-sass-import-once');
const pkg = require('./package.json');


// rollup.config.js
export default {
  input: 'src/index.js',
  output: {
    file: 'temp/bundle.js',
   // format: 'cjs',
    format: 'umd',
    name: pkg.config.library,
    sourcemap: true
  },
  external: [
   // 'classnames',
    'react',
    'react-dom',
    'debug',
    'react-proptypes'
  ],
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      browser: true,
      extensions: [ '.js', '.json'],
      modulesOnly: true
    }),
    babel({
      babelrc: false,
      exclude: ['node_modules/**', '**/*.scss'],
      presets: [ 'stage-1', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    scss({
      output: true,
      //insert: true,
      include: '**/*.scss',
      exclude: [],
      importer: importOnce,
      importOnce: {
        index: true,
        css: false,
        bower: true
      }
    })
  ]
};
