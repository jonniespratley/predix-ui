import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

import AppNav from './';
import AppNavItem from './AppNavItem';

const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home"},
  {id : "settings", label: "Settings", icon: "px-fea:settings"},
  {id : "alert", label: "Alerts", icon: "px-fea:alerts"},
  {
    label: 'Assets',
    id: 'assets',
    icon: 'px-fea:asset',
    children: [
      {
        label: 'Asset #1',
        id: 'a1'
      },
      {
        label: 'Asset #2',
        id: 'a2'
      }
    ]
  }
];

describe('AppNav', () => {

  test('should render', () => {
    const wrapper = shallow(<AppNav items={navItems}/>);
    expect(wrapper.find('.app-nav').exists());
    expect(wrapper.find('[label="Home"]').exists());
    const tree = renderer.create(<AppNav items={navItems}/>).toJSON();
      expect(tree).toMatchSnapshot();
  });

  xtest('should set selected, seletedItem, selectedIndex on "click"', () => {
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems}/>);
    const targetItem = wrapper.find('[label="Alerts"]').simulate('click');
    const selectedItem = wrapper.find('.selected');

    expect(wrapper.state().selected).toEqual(2);
    expect(wrapper.state().selectedIndex).toEqual(2);
    expect(wrapper.state().selectedItem.id).toEqual(navItems[2].id);
    expect(selectedItem.exists());
    expect(spy.calledOnce);
  });

  xtest('should set selected, seletedItem, selectedIndex when selected is not null', () => {
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems}/>);
    expect(wrapper.state().selectedIndex).toEqual(1);
    expect(wrapper.state().selectedItem.id).toEqual(navItems[1].id);
    expect(selectedItem.exists());
    expect(spy.calledOnce);
  });

  xtest('should work with propForSelect', () => {
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected='home' propForSelect='id' items={navItems}/>);
    //expect(wrapper.state().selectedItem.id).toEqual('home');
    const targetItem = wrapper.find('[label="Alerts"]').simulate('click');
    const selectedItem = wrapper.find('.selected');

    expect(wrapper.state().selected).toEqual('alert');
    expect(wrapper.state().selectedItem.id).toEqual('alert');
    expect(selectedItem.exists());
    expect(spy.calledOnce);
  });

  test('should not update if selected does not change', () =>{
    let spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems}/>);
    expect(wrapper.state().selected).toEqual(1);
    wrapper.setProps({selected: 2});
    expect(wrapper.state().selected).toEqual(2);
    wrapper.setProps({selected: 0});
    expect(wrapper.state().selected).toEqual(0);
   //expect(spy.callCount).toEqual(2);

  });

  describe('AppNavItem', () =>{
    it('should render', () =>{
      const wrapper = shallow(<AppNavItem item={navItems[0]}/>);
      expect(wrapper.find('[label="Home"]').exists());
    });

    it('should dispatch click handler', () =>{
      let spy = sinon.spy();
      const wrapper = shallow(<AppNavItem item={navItems[0]} onClick={spy}/>);
      expect(wrapper.find('[label="Home"]').exists());
      wrapper.find('.px-app-nav-item').simulate('click');
      expect(spy.calledOnce);
    });

    it('should render icon', () =>{
      const wrapper = shallow(<AppNavItem {...navItems[0]}/>);
      expect(wrapper.find('[label="Home"]').exists());
      expect(wrapper.find('.px-fea-home').exists());
    });

    it('should render dropdown icon if prop exists', () =>{
      const wrapper = shallow(
      <AppNavItem
        dropdown={true}
        {...navItems[0]}/>
        );
      expect(wrapper.find('[label="Home"]').exists());
      expect(wrapper.find('.app-nav-item__dropdown-icon').exists());
    });

    it('should render empty icon/label if prop exists', () =>{
      const wrapper = shallow(
      <AppNavItem
        emptyIcon={true}
        emptyLabel={true}
        {...navItems[0]}/>
        );
      expect(wrapper.find('[label="Home"]').exists());
      expect(wrapper.find('.app-nav-item__label--empty').exists());
      expect(wrapper.find('.app-nav-item__icon--empty').exists());
    });

    it('should render empty icon/label if empty exists', () =>{
      const wrapper = shallow(
      <AppNavItem
        empty={true}
        {...navItems[0]}/>
        );
      expect(wrapper.find('[label="Home"]').exists());
      expect(wrapper.find('.app-nav-item__label--empty').exists());
      expect(wrapper.find('.app-nav-item__icon--empty').exists());
    });
  });

});
