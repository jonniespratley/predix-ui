import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiJestSnapshot from 'chai-jest-snapshot';
import 'jest-styled-components';
/*
import { mount } from 'enzyme';
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  renderer: mount
});
*/
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

configure({ adapter: new Adapter() });

global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};

chai.use(chaiJestSnapshot);
