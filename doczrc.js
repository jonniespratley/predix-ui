export default {
  title: 'Predix UI',
  description: 'A friendly, themeable, accessible React UI Kit',
  dest: '/_docs',
  files: '**/src/**/*.mdx',
  menu: [
    'Home',
    'Getting Started',
    'Primitives',
    'Palette',
    'Typography',
    'Layout',
    'Components',
    'Form',
    'Utilities',
    'Styling & Theming',
    { name: 'Playroom', href: '/playroom' }
  ],
  /*
  themeConfig: {
    colors: {
      primary: '#444bc9',
      text: '#435a6f'
    },
    logo: {
      src: 'https://raw.githubusercontent.com/fannypackui/fannypack/master/logo.png',
      width: '230px'
    },
    showPlaygroundEditor: true
  },
  */

  // wrapper: 'src/_docs/wrapper',
  codeSandbox: true,
  debug: true,
  // typescript: false,
  // propsParser: false,
  modifyBabelRc: (babelrc, args) => {
    console.log(babelrc, args);

    function removeFromBabelConfig(key, nameToRemove) {
      return babelrc[key].filter((entry) => {
        let name = entry;
        if (Array.isArray(entry)) {
          name = entry[0];
        }
        return !name.includes(nameToRemove);
      });
    }
    // babelrc.presets = removeFromBabelConfig('presets', 'babel-preset-docz');
    // babelrc.presets.push(['@babel/preset-react']);
    // babelrc.plugins.push(['babel-plugin-styled-components']);
    // babelrc.plugins.push(['@babel/plugin-proposal-class-properties']);
    // babelrc.presets.push(['docz-fannypack', { parseProps: false, typescript: true, flow: false }]);
    // TODO: Disable react-hot-loader for now. Seems to be bugged. Add back in later.
    babelrc.plugins = removeFromBabelConfig('plugins', 'react-hot-loader');
    return babelrc;
  }
};
