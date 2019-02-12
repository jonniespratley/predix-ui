import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './';

describe('ProgressBar', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ProgressBar value={50}/>).toJSON();
    expect(tree).toMatchSnapshot();
   //expect(tree).toHaveStyleRule('transform', 'scaleX(0.5)');
  });
  test('renders correctly', () => {
    const tree = renderer.create(<ProgressBar infinite value={50}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
