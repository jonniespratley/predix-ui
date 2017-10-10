import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import AppNav from './';
const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home"},
  {id : "settings", label: "Settings", icon: "px-fea:settings"},
  {id : "alert", label: "Alerts", icon: "px-fea:alerts"}
];
describe('AppNav', () => {

  test('should render', () => {
    const wrapper = shallow(<AppNav items={navItems}/>);
    console.log(wrapper.children());
    expect(wrapper.find('.app-nav').exists());
    expect(wrapper.find('[label="Dashboard"]').exists());
  });

  test('should set selected and seletedItem', () => {
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems}/>);
    const targetItem = wrapper.find('[label="Alerts"]').simulate('click');
    const selectedItem = wrapper.find('.selected');
    console.log(wrapper.state());

    expect(wrapper.state().selectedItem.id).to.equal(navItems[2].id);
    expect(selectedItem.exists());
    expect(spy.calledOnce);
  });

  test('should work with propForSelect', () => {
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected='home' propForSelect='id' items={navItems}/>);
    const targetItem = wrapper.find('[label="Alerts"]').simulate('click');
    const selectedItem = wrapper.find('.selected');
    console.log(wrapper.state());

    expect(wrapper.state().selectedItem.id).to.equal(navItems[2].id);
    expect(selectedItem.exists());
    expect(spy.calledOnce);
  });

  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
