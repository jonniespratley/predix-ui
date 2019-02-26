import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import BrandingBar from './';

describe('BrandingBar', () => {
  test('should render', () =>{
    const tree = renderer.create(<BrandingBar title="Custom Title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render with hideLogo', () =>{
    const tree = renderer.create(<BrandingBar title="Custom Title" hideLogo/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render with hidePowered', () =>{
    const tree = renderer.create(<BrandingBar title="Custom Title" hidePowered/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
