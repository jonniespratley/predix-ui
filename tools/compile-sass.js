'use strict';
const sass = require('node-sass');
const importOnce = require('node-sass-import-once');
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const SRC = '../src';
const DEST = '../temp/all.css';

const yourPathTotheFile = path.resolve(__dirname, DEST );
const scss_filename = path.resolve(__dirname, SRC, 'theme/px-dark-theme.scss' );

const config = {
  src: path.resolve(__dirname, '../src'),
  dest: path.resolve(__dirname, '../dist/css'),
  sass: path.resolve(__dirname, '../src/components/px/Theme/px-theme.scss')
};

glob(config.sass, (err, files) =>{
  var newPath, newFilename;
  files.map(file => {
    newPath = path.parse(file);
    newPath.ext = '.css';
    newFilename = newPath.base.replace('.scss', '.css');
    console.log('sass =>', newPath.base);

    console.log('css =>', newFilename)

    compileSass(file, path.resolve(config.dest, newFilename));

  });
});



function compileSass(input, output){
  //fs.ensureDirSync(path.parse(output).dirname);
  return new Promise((resolve, reject) =>{
    var SASS_OPTIONS = {
      file: input,
      outFile: output,
      importer: importOnce,
      importOnce: {
        index: true,
        css: false,
        bower: true
      },
      options: {}
    };

    sass.render(SASS_OPTIONS, function(err, result) {
      console.log('compileSass', input);
      if (!err) {
        console.log(result);
        fs.writeFileSync(output, result);
        resolve({
          filename: output,
          data: result
        });
      } else {
        reject(err);
      }
    });

  });
}
