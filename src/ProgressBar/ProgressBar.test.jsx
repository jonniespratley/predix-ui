import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '.';

describe('ProgressBar', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ProgressBar value={50} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('infinite - renders correctly', () => {
    const tree = renderer.create(<ProgressBar infinite value={50} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
