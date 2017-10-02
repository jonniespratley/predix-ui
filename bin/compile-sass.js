'use strict';
const sass = require('node-sass');
const importOnce = require('node-sass-import-once')
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const SRC = '../src';
const DEST = '../temp/all.css';

const yourPathTotheFile = path.resolve(__dirname, DEST );
const scss_filename = path.resolve(__dirname, SRC, 'theme/px-dark-theme.scss' );


const config = {
  src: path.resolve(__dirname, '../src'),
  dest: path.resolve(__dirname, '../temp/css'),
  sass: path.resolve(__dirname, '../src/**/*.scss')
};

glob(config.sass, (err, files) =>{
  var newPath;
  files.map(file => {
    newPath = path.parse(file);
    newPath.ext = '.css';
    console.log('compile each', file);

    //compileSass(file, path.format(newPath))
    //console.log(path.join(file, config.dest))
  });
});



function compileSass(input, output){
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
