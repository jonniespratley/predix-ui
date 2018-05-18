import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Toggle from './';

const sizes = [ 'small', 'large', 'huge' ];

describe('Toggle', () => {

  test('matches snapshot', () => {
    const tree = renderer.create(<Toggle name='toggle1' id='toggle1' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled = matches snapshot', () => {
    const tree = renderer.create(<Toggle name='toggle1' id='toggle1' disabled/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('sizes', () => {
    sizes.forEach(size => {
      test(`should render ${size}`, () => {
        const tree = renderer.create(<Toggle name='toggle1' id='toggle1' size={size} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
