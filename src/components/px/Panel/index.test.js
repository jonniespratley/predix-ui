import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Panel from './';

describe('Panel', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <Panel position='left'>
        Panel content goes here.
      </Panel>
    );
    expect(wrapper.props().position).toEqual('left');
  });

  test('renders block when visible', () => {
    const tree = renderer.create(<Panel position='left' visible />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'block');
  });
  test('fixed renders correctly', () => {
    const tree = renderer.create(<Panel position='right' fixed visible />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('position', 'fixed');
  });
});
