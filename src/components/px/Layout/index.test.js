import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Layout from './';

describe('Layout', () => {
  test('should render', () =>{
    const tree = renderer.create(<Layout>Title</Layout>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
