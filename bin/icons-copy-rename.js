/**
 going to copy all icons from src/px-icon-set/icons/src-{name} to
 {name}-{icon}.svg
*/
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const SRC_DIR = path.resolve(__dirname, '../src/px-icon-set/icons');
const DEST_DIR = path.resolve(__dirname, '../temp/icons');

const sizeRegEx = /(\w\d+x\d*)/g

function renameIcons(ns){
  console.log('name icons', ns);
  const icons = glob(`${SRC_DIR}/src-${ns}/*.svg`, (err, files) =>{
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      let ext = path.extname(file);
      let basename = path.basename(file).replace(sizeRegEx, '');
      let newName = `px-${ns}-${basename}`;
      console.log('new filename', newName);

      fs.copySync(file, path.resolve(DEST_DIR, newName));

    }
    console.log(files);
  })
}


const iconSets = ['doc', 'fea', 'obj', 'utl', 'vis', 'nav', 'com'];
iconSets.forEach(icons => renameIcons(icons));
