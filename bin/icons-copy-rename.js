/**
 going to copy all icons from src/px-icon-set/icons/src-{name} to
 {name}-{icon}.svg
*/
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const SVGO = require('svgo');
const svgo = new SVGO({
  full: true,
  multipass: true,
  js2svg: {
    pretty: true,
    indent: '  '
  },
  plugins: [
    {cleanupAttrs: true},
    {removeEditorsNSData: true},
    {removeEmptyAttrs: true},
    {removeEmptyContainers: true},
    {cleanUpEnableBackground: true},
    {convertStyleToAttrs: true},
    {convertPathData: true},
    {convertTransform: true},
    {removeUnknownsAndDefaults: true},
    {removeNonInheritableGroupAttrs: true},
    {removeUselessStrokeAndFill: true},
    {removeUnusedNS: true},
    {cleanupNumericValues: true},
    {mergePaths: true},
    {convertShapeToPath: true},
    {transformsWithOnePath: false},
    {removeAttrs: {attrs: '(class|stroke|fill)'}}
  ]
});


const SRC_DIR = path.resolve(__dirname, '../src/px-icon-set/icons');
const DEST_DIR = path.resolve(__dirname, '../temp/icons');

const sizeRegEx = /(\w\d+x\d*)/g
const iconsetNames = {
  'com': 'communication',
  'doc': 'document',
  'fea': 'feature',
  'nav': 'navigation',
  'obj': 'object',
  'utl': 'utility',
  'vis': 'vis'
};

/*
* Gives us the index at the end of a search term
*/
function findIndex(searchTerm, src) {
  const i = String(src).indexOf(searchTerm);
  return i + searchTerm.length;
};
function optimize(string) {
  return new Promise(resolve => {
    svgo.optimize(string, result => {
      return resolve(result.data);
    });
  });
};

function write(path, string) {
  return new Promise(resolve => {
    fs.writeFile(path, string, 'utf8', err => {
      if (err) throw err;
      return resolve(path);
    });
  });
};
function read(path) {
  return new Promise(resolve => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw err;
      return resolve(data);
    });
  });
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
  let allIcons = `
  <svg>
    <defs>
    `;
  console.log('renameIcons', ns);
  let outputname = `${DEST_DIR}/${ns}_all.svg`;

  return new Promise((resolve, reject) =>{
    glob(`${SRC_DIR}/src-${ns}/*.svg`, (err, files) =>{
      for (var i = 0; i < files.length; i++) {
        let file = files[i];
        let ext = path.extname(file);
        let basename = path.basename(file).replace(sizeRegEx, '').replace('_', '-');
        let newName = `px-${ns}-${basename}`;
        let newFilename = path.resolve(DEST_DIR, newName);
       console.log('\n=>', newName);

       //dirty
        let rawSvg = fs.readFileSync(file ,'utf8');
        //console.log('dirty - svg =>', rawSvg);

        //clean
        let svg = cleanForOutfile( rawSvg, newName);
        //console.log('clean - svg =>', svg);

        allIcons += `\n${svg}`;

        fs.copySync(file, newFilename);
        fs.writeFileSync(outputname, allIcons, 'utf8');
        //console.log(allIcons);
      }
      if(i === files.length ){
        allIcons += `
        </defs>
        </svg>
        `
        fs.writeFileSync(outputname, allIcons, 'utf8');
        resolve(outputname);
      }
    });
  });
}

function optimizeAll(files){
  let p = [];
  for (var i = 0; i < files.length; i++) {
    p.push(optimize(files[i]));
  }
  return Promise.all(p);
}




const iconSets = Object.keys(iconsetNames);
const names = [];
iconSets.forEach(icons => {
  names.push(renameIcons(icons));

});
console.log('optimize', names);



  glob(`${DEST_DIR}/*_all.svg`, (err, files) =>{
    console.log(files);
    optimizeAll(files);
  });
