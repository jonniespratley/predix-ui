## How to add new icons
Adding new icons is easy. All you have to do is place them in a subfolder in the `icons/` folder and run the `icons-optimize-and-fix.js` script and it will create the iron-iconset for you.

## What thie script does
The script has several steps:
1. Scans the `icons/src-${name}/` directory for `.svg` files.
Grabs the source code from each file, runs it through the svgo optimizer, and places a new `.svg` file with the same name in `icons/optimized-${name}`.

2. Bundles all optimized icons as `<g>` groups without a wrapper `<svg>` in `icons/optimized-${name}/_optimized-${name}.html`.

3. Then it copies the optimized icons over to the icon set file in the root of this directory and notifies you if any icons that were previously definied have disappeared.

### <strong>READ THE TERMINAL OUTPUT TO SEE IF #3 HAPPENED. THIS IS THE ONLY CHECK AGAINST A REGRESSION AND AFTER THIS ONE MESSAGE, YOU'LL NEVER SEE IT AGAIN.</strong>

The names for the icon come from the source file name. So make sure it is named what you want the final icon to be named.

## Step-by-step
1. If you are creating a whole new iconset, you must manually create:
    * the `icons/src-${name}` folder. The name must be three letters.
    * the `icons/optimized-${name}` folder
    * the `px-icon-set-${longname}` file <strong>WITH</strong> the boilerplate svg elements and settings (basically, copy another file, update the size, name, id. Delete the icons elems within the `<defs>` tag).
    * Go into the script and add the new set name to the iconsetNames object definied at the top of the script
2. Place your new or modified icon in the correct `src-${name}` file.
3. From your terminal, run `node scripts/icons-optimize-and-fix.js src-${name}`. For example, to rebuild the feature set, you'd run: `node scripts/icons-optimize-and-fix.js src-fea`
4. If successful, the your console should indicate that the icons were sucessfully created. Make sure you check the console to ensure no icons have gone missing.
5. Check the icons. Open the icon file and do a quick check for anything out of the ordinary, such as the use of styles. Run the demo and make sure there are no extraneous icons, funny styles, etc.
6. If fixes are necessary, fix the src file and start over. Dont just change the icon-set file or else the errors will reappear the next time someone recreates the iconset.

#### TO RUN, You must have node 7.6+
* If you're on 7.x run with the flag `node --harmony-async-await`
* If you're on 8.x no flag

## Notes on the source SVGs.
After several iterations, we've found that the SVGs are best if exported with attributes, NOT with styles.
  * From Illustrator, `File > Export > Export As`, choose SVG, and then in the dialog, Change the `Styling` dropdown from Interal CSS to `Presentation Attributes`.
  * stroke, fill, and class attrs will get removed from the end icon, but all other attributes will remain. Ids should get removed by a manual method as well.

#### Things to know, gotchas, & things to fix
* The source file names will become the final icon name.
  * The script currently assumes that we have `filename_${size}x${size}.svg` such as `chevron_16x16.svg`.
    * The script stupidly run `.slice(0,-6)` to cut off the _${size}x${size}. If it isnt there, you'll loose real stuff.
  * The script currently assumes that underscores are use inbetween terms. Each underscore will be replaced with a dash in the icon name. The same will happen with spaces. So a source name `chevron_right_16x16.svg` will result in the icon name `chevron-right`.
    * Now and then, we got icons named like `up__22x22.svg`. The keen observer will note that there are two underscores, resulting in a final icon name, `up-`. Make sure you rename the source file.
  * The file must have an svg extension
* The SVG structure has several assumptions:
  * It must be a real svg, with svg tags.
  * It must have a `<title>` tag.
  * The `<title>` tag must be placed immediately before the real content that we want.
  * Everything after the closing `<title>` tag is content we want (except for the `</svg>` tag)
    * Internally, the script searches for `</title>` and keeps everything after that index. It then replaces the `</svg>` tag.
* All attributes in the kept portion of the SVG will remain, except for `fill`, `stroke`, and class.
  * It *should* remove `id` attributes, but check the end result to make sure. Iron-icon-set interprets everything with an id as an icon, even if that id is embedded within another icon, so if you see some funny, partial icon in the demo, a stray ID was left in and not removed by the script for some reason.
      * I think Illustrator will assign ids based on layers. Not sure, but they do appear now and then.

