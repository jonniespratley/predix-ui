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


/*
* Gives us the index at the end of a search term
*/
function findIndex(searchTerm, src) {
  const i = String(src).indexOf(searchTerm);
  return i + searchTerm.length;
};

function getIconNames(src) {
  const re = /<g\s?id="([^"]+)/g;
  let names = [];
  let n;

  while(n = re.exec(src)) {
    names.push(n[1])
  }

  return names;
};


function cleanForOutfile(string, name) {
  // We assume that they all have a title filed and our content starts after it...
  // FIXME This might not be a safe assumption. Probably a regex or something would be safer
  const ending = '</title>';
  const index = findIndex(ending,string);

  //Fix our name, get rid of .svg, 32x32, and replace _ with -
  // FIXME .slice(0,-6) might need to get smarter to only slice if the 16x16 is there
  //const n = name.split('.')[0].slice(0,-6).split('_').join('-').split(' ').join('-');
  const n = name.replace('.svg', '');
  const g = `<g id="${n}">`;

  // get our real content
  // we manually remove ids here; we do this because of the note above in the svgo settings
  const s = string.slice(index).replace('</svg>','</g>').replace(/\sid="\w+"/, '').split('\n').filter(s=>s.length).map(s=>s.trim()).join('');

  return g + s;
};


//fs.removeSync(DEST_DIR);

function renameIcons(ns){
  let allIcons = ``;
  console.log('renameIcons', ns);
  const icons = glob(`${SRC_DIR}/src-${ns}/*.svg`, (err, files) =>{
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      let ext = path.extname(file);
      let basename = path.basename(file).replace(sizeRegEx, '').replace('_', '-');
      let newName = `px-${ns}:${basename}`;
    //  console.log('=>', newName);

      let rawSvg = fs.readFileSync(file, 'utf8');
    //  console.log('dirty - svg', rawSvg);
      let svg = cleanForOutfile( rawSvg, newName);
      console.log( svg);

      allIcons += `\n${svg}`;

      fs.copySync(file, path.resolve(DEST_DIR, newName));
      if(i === files.length ){
        fs.writeFileSync(`${DEST_DIR}/_all.svg`, allIcons, 'utf8');
      }
    }

  });
}


const iconSets = ['doc', 'fea', 'obj', 'utl', 'vis', 'nav', 'com'];
iconSets.forEach(icons => renameIcons(icons));
