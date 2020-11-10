import React from 'react';
import renderer from 'react-test-renderer';

import Drawer from './Drawer';

describe('Drawer', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<Drawer id="d1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('opened - matches snapshot', () => {
    const tree = renderer.create(<Drawer id="d1" opened />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('docked - matches snapshot', () => {
    const tree = renderer.create(<Drawer id="d1" docked />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  ['top', 'bottom', 'left', 'right'].forEach((anchor) => {
    test(`${anchor} - matches snapshot`, () => {
      const tree = renderer.create(<Drawer id="d1" anchor={anchor} opened />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
