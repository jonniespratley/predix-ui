import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Panel from './';

const positions = [ 'left', 'right', 'bottom', 'top' ];
const backgrounds = [ 'light', 'medium', 'dark' ];
describe('Panel', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <Panel position='left'>
        Panel content goes here.
      </Panel>
    );
    expect(wrapper.props().position).toEqual('left');
  });

  describe('backgrounds', () => {
    backgrounds.forEach(background => {
      test(`should render ${background}`, () => {
        const tree = renderer.create(<Panel background={background} opened />).toJSON();
        expect(tree).toMatchSnapshot();
        // expect(tree).toHaveStyleRule('height', 'auto');
      });
    })
  });
  describe('positions', () => {
    positions.forEach(pos => {
      test(`should render ${pos}`, () => {
        const tree = renderer.create(<Panel position={pos} opened />).toJSON();
        expect(tree).toMatchSnapshot();
        // expect(tree).toHaveStyleRule('height', 'auto');
      });
    })
  });

  xtest('renders minimizable', () => {
    const tree = renderer.create(<Panel position='left' minimizable/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('width', 'var(--px-panel-size--minimized,4rem)');
  });
  test('renders persistent when opened', () => {
    const tree = renderer.create(<Panel position='left' opened persistent/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('position', 'relative');
  });
  test('renders fixed when opened', () => {
    const tree = renderer.create(<Panel position='left' opened fixed/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('position', 'fixed');
  });

  test('renders block when opened', () => {
    const tree = renderer.create(<Panel position='left' opened />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'block');
  });

  test('fixed renders right', () => {
    const tree = renderer.create(<Panel position='right' fixed opened />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('position', 'fixed');
    expect(tree).toHaveStyleRule('right', '0');
  });


  describe('left / right opened', () => {
    test('opened and full size has 100% width', () => {
      const tree = renderer.create(<Panel position='right' opened fullSize fixed/>).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('position', 'fixed');
      expect(tree).toHaveStyleRule('width', '100%');
    });
  });
});
