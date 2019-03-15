import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Box from './Box';

describe('Box', () => {
  test('should render', () => {
    const tree = renderer.create(<Box use="span">Content</Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render as <h2>Heading</h2>', () => {
    const tree = renderer.create(<Box use="h2">Content</Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
