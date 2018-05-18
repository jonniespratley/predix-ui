import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AppHeader from './';

const mockItems = [
  {id: 'item-1', label: 'Home', icon: 'px-nav:home'}
];

describe('AppHeader', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<AppHeader title="My App" items={mockItems}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
