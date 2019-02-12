import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Card from './';

describe('Card', () => {
  test('should render', () =>{
    const tree = renderer.create(<Card headerText='Card Header' icon='px-nav:home'>Content</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render with headerText', () =>{
    const wrapper = shallow(<Card headerText='Card Title'/>);
    expect(wrapper.find('.px-card-header')).toHaveLength(1);
  });

  test('should render with icon', () =>{
    const wrapper = shallow(<Card headerText='Card Title' icon='px-nav:home'/>);
    expect(wrapper.find('.px-card-icon')).toHaveLength(1);
  });

  test('should render with children', () =>{
    const wrapper = shallow(<Card headerText='Card Title' icon='px-nav:home'>This is content</Card>);
    expect(wrapper.find('.px-card-body')).toHaveLength(1);
  });
});
