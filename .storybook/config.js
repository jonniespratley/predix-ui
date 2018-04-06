import { configure, setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
//import { configure as configureViewports } from '@storybook/addon-viewport';


setAddon(JSXAddon);

const path = require('path');
const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

const newViewports = {
  responsive: {
    name: 'Responsive',
    styles: {
      width: '100%',
      height: '100%',
      border: 'none',
      display: 'block',
      margin: '0',
      boxShadow: 'none',
    },
    type: 'desktop',
  },
  iphone5: {
    name: 'iPhone 5',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  iphone6: {
    name: 'iPhone 6',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  iphone6p: {
    name: 'iPhone 6 Plus',
    styles: {
      height: '736px',
      width: '414px',
    },
    type: 'mobile',
  },
  ipad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  }
};
/*
configureViewports({
  viewports: newViewports
});*/
configure(loadStories, module);
