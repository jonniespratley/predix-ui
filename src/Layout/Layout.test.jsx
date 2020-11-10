import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './Layout';

describe('px-layout', () => {
  test('should match snapshot', () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
    expect(tree).toHaveStyleRule('margin', '0');
    expect(tree).toHaveStyleRule('padding', '0');
  });
  test('tiny - should have padding', () => {
    const tree = renderer.create(<Layout tiny />).toJSON();
    expect(tree).toHaveStyleRule('margin-left', '-0.33333rem');
  });
  test('small - should have padding', () => {
    const tree = renderer.create(<Layout small />).toJSON();
    expect(tree).toHaveStyleRule('margin-left', '-0.66667rem');
  });
  test('large - should have padding', () => {
    const tree = renderer.create(<Layout large />).toJSON();
    expect(tree).toHaveStyleRule('margin-left', '-1.33333rem');
  });
});
