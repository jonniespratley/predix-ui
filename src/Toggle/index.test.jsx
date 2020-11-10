import React from 'react';
import renderer from 'react-test-renderer';

import Toggle from '.';

describe('Toggle', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<Toggle name="toggle1" id="toggle1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled = matches snapshot', () => {
    const tree = renderer.create(<Toggle name="toggle1" id="toggle1" disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  ['small', 'large', 'huge'].forEach((size) => {
    test(`${size} - matches snapshot`, () => {
      const tree = renderer.create(<Toggle name="toggle1" id="toggle1" size={size} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
