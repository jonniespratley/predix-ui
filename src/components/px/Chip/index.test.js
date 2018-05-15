import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PxChip from './';

describe('Chip', () => {
  test('should render', () => {
    const tree = renderer.create(<PxChip>Title</PxChip>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
