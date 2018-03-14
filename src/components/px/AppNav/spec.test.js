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

  test('should set selected, seletedItem, selectedIndex on "click"', () => {
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems}/>);
    const targetItem = wrapper.find('[label="Alerts"]').simulate('click');
    const selectedItem = wrapper.find('.selected');
   
    expect(wrapper.state().selectedIndex).to.equal(2);
    expect(wrapper.state().selectedItem.id).to.equal(navItems[2].id);
    expect(selectedItem.exists());
    expect(spy.calledOnce);
  });

  xtest('should set selected, seletedItem, selectedIndex when selected is not null', () => {
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems}/>);
    expect(wrapper.state().selectedIndex).to.equal(1);
    expect(wrapper.state().selectedItem.id).to.equal(navItems[1].id);
    console.log(wrapper.state());
    expect(selectedItem.exists());
    expect(spy.calledOnce);
  });

  test('should work with propForSelect', () => {
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected='home' propForSelect='id' items={navItems}/>);
    //expect(wrapper.state().selectedItem.id).to.equal('home');
    const targetItem = wrapper.find('[label="Alerts"]').simulate('click');
    const selectedItem = wrapper.find('.selected');
    console.log(wrapper.state());

    expect(wrapper.state().selected).to.equal('alert');
    expect(wrapper.state().selectedItem.id).to.equal('alert');
    expect(selectedItem.exists());
    expect(spy.calledOnce);
  });
});
