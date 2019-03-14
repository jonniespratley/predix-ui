import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Toggle from '.';

xdescribe('Toggle', () => {

  test('matches snapshot', () => {
    const tree = renderer.create(<Toggle name='toggle1' id='toggle1' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled = matches snapshot', () => {
    const tree = renderer.create(<Toggle name='toggle1' id='toggle1' disabled/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
