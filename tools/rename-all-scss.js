//So we can use babel loading local styles
// TODO: Rename all src/style.scss to src/{name}/{name}.scss;
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

//const util = require('util');
//const write = util.promisfy(fs.writeFile);
//const read = util.promisfy(fs.readFile);


const SRC_DIR = path.resolve(__dirname, '../src/');
const DEST_DIR = path.resolve(__dirname, '../temp/_src');


const STYLE_REGEX = /(style.scss)/gim

let filename, compName;
glob(`${SRC_DIR}/**/style.scss`, (err, files) => {

  files.map((f) => {

      let file = path.parse(f);
      let parts = file.dir.split('/');
      let compName = parts[parts.length-1];
      let newFilename = `${compName}.scss`;


      console.log('component #########', compName)
      console.log('old filename => ', f)
      console.log('new filename => ', newFilename)

      let outputName = `${file.dir}/${newFilename}`;
      try {
        let fileData = fs.readFileSync(f, 'utf8');
        fs.ensureDirSync(DEST_DIR);
        fs.writeFileSync(outputName, fileData );
      } catch (e) {
        console.log('Error writing file', e);
      }


    //  console.log('file', file)





      //console.log('rename all style files', filename);
  });
});
