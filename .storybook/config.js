import { configure } from '@storybook/react';
const path = require('path');

function loadStoryFiles() {
  const req = require.context('../src', true, /\.stories\.js$/);
  console.log('loadStoryFiles', req.keys());
  req.keys().forEach((filename) => req(filename));
}

function loadStories() {
  require('../stories/index.js');
  loadStoryFiles();
  // You can require as many stories as you need.
}

configure(loadStories, module);
