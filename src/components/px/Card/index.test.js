import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Card from './';

describe('Card', () => {
  test('should render', () =>{
    const wrapper = shallow(<Card/>);
    expect(wrapper);
  });

  test('should with headerText', () =>{
    const wrapper = shallow(<Card headerText='Card Title'/>);
    expect(wrapper.find('.px-card-header')).to.have.length(1);
  });
  test('should with icon', () =>{
    const wrapper = shallow(<Card headerText='Card Title' icon='px-nav:home'/>);
    console.log(wrapper.debug());
    expect(wrapper.find('.px-card-icon')).to.have.length(1);
  });

  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
