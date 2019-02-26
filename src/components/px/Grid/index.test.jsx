import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PxGrid from './';

describe('Grid', () => {
  test('should render', () =>{
    const tree = renderer.create(<PxGrid/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
