'use strict';
const path = require('path');
const fs = require('fs-extra');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const pkg = require('../package.json');


console.log('pkg', pkg);

const OUTPUT_DIR = path.resolve(__dirname, '../temp');
const SRC_MAIN = path.resolve(__dirname, '../src/Popover.jsx');
fs.ensureDirSync(OUTPUT_DIR);

const bundles = [
  {
    format: 'cjs', ext: '.js', plugins: [],
    babelPresets: ['stage-1', 'react'],
    babelPlugins: [
      'transform-es2015-destructuring',
      'transform-es2015-function-name',
      'transform-es2015-parameters'
    ]
  },
  {
    format: 'es6', ext: '.mjs', plugins: [],
    babelPresets: ['stage-1', 'react'],
    babelPlugins: [
      'transform-es2015-destructuring',
      'transform-es2015-function-name',
      'transform-es2015-parameters'
    ]
  }
  /*
  {
    format: 'cjs', ext: '.browser.js', plugins: [],
    babelPresets: ['es2015-rollup', 'stage-1'],
    babelPlugins: []
  },
  {
    format: 'umd', ext: '.js', plugins: [],
    babelPresets: ['es2015-rollup', 'stage-1'],
    babelPlugins: [],
    moduleName: pkg.config.library
  },
  {
    format: 'umd', ext: '.min.js', plugins: [uglify()],
    babelPresets: ['es2015-rollup', 'stage-1'],
    babelPlugins: [],
    moduleName: pkg.config.library,
    minify: true
  }*/
];

let promise = Promise.resolve();

// Clean up the output directory
promise = promise.then(() => del([`${OUTPUT_DIR}/*`]));

// Compile source code into a distributable format with Babel and Rollup
for (const config of bundles) {
  console.log('Using Config', config);
  promise = promise.then(() => rollup.rollup({
    input: SRC_MAIN,
    external: Object.keys(pkg.dependencies || pkg.devDependencies),
    plugins: [
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: config.babelPresets,
        plugins: config.babelPlugins
      })
    ].concat(config.plugins)
  }).then(bundle => bundle.write({
    dest: `${OUTPUT_DIR}/${config.moduleName || 'main'}${config.ext}`,
    format: config.format,
    sourceMap: !config.minify,
    moduleName: config.moduleName
  })));
}

// Copy package.json and LICENSE.txt
promise = promise.then(() => {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  fs.writeFileSync(`${OUTPUT_DIR}/package.json`, JSON.stringify(pkg, null, '  '), 'utf-8');
  fs.writeFileSync(`${OUTPUT_DIR}/LICENSE.md`, fs.readFileSync('LICENSE.md', 'utf-8'), 'utf-8');
});

promise.catch(err => console.error(err.stack)); // eslint-disable-line no-console
