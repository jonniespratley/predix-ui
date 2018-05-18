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
  dest: path.resolve(__dirname, '../dist'),
  sass: path.join(__dirname, '../src/components/px/Theme/px-*.scss'),
};

fs.ensureDirSync(config.dest);

glob(config.sass, (err, files) =>{
  var newPath, newFilename;
  files.map(file => {
    newPath = path.parse(file);
    newPath.ext = '.css';
    newFilename = newPath.base.replace('.scss', '.css');
    compileSass(file, path.resolve(config.dest, newFilename)).then((resp) => {
      console.log('input =>', newPath.base, '=>', resp.filename);
    }).catch(err => {
      console.error('error', err);
    });
  });
});


function compileSass(input, output){

  return new Promise((resolve, reject) =>{
    var SASS_OPTIONS = {
      file: input,
      outFile: output,
      outputStyle: 'compact'
    };

    sass.render(SASS_OPTIONS, function(err, result) {
      // console.log('compileSass', input);
      if (!err) {
        fs.writeFileSync(output, result.css.toString());
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
