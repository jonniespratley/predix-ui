import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

import Flex from './';

describe('Flex', () => {
  test('middle', () => {
    const tree = renderer.create(<Flex middle />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('align-items', 'center');
  });
  test('row', () => {
    const tree = renderer.create(<Flex row />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('flex-direction', 'row');
  });
  test('column', () => {
    const tree = renderer.create(<Flex col />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('flex-direction', 'column');
  });
  test('flex 1', () => {
    const tree = renderer.create(<Flex flex={1} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('flex', '1');
  });
  test('top', () => {
    const tree = renderer.create(<Flex top />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('align-items', 'flex-start');
  });
  test('bottom', () => {
    const tree = renderer.create(<Flex bottom />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('align-items', 'flex-end');
  });
  test('inline', () => {
    const tree = renderer.create(<Flex inline />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'inline-flex');
  });

});
