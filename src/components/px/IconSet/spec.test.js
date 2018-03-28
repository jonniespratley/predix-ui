import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import Icons from './';
import Icon from './Icon';
const AllIcons = Object.keys(Icons).sort();
describe('IconSet', () => {
  test('icon should render', () =>{
    const wrapper = shallow(
      <Icon icon='px-nav:home'/>
    );
    expect(wrapper.find('.px-nav-home')).to.have.length(1);
  });

  test('icon should set props', () =>{
    const wrapper = shallow(
      <Icon/>
    );
    wrapper.setProps({ icon: 'px-fea:dashboard' });
    expect(wrapper.find('.px-fea-dashboard')).to.have.length(1);
  });

  test('icon should render size', () =>{
    const wrapper = shallow(
      <Icon icon='px-nav:home' size={16}/>
    );
    expect(wrapper.find('.px-nav-home')).to.have.length(1);
    expect(wrapper.find('svg')).to.have.length(1);
  });

  //Loop each icon and check for render
  AllIcons.forEach(icon => {
    test(`should render ${icon}`, () =>{
      const wrapper = shallow(
        <Icon icon={icon}/>
      );
      expect(wrapper.find(`.${icon}`)).to.have.length(1);
      expect(wrapper.find('svg')).to.have.length(1);
    });
  });
});
