import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import AppNav from '.';
import AppNavItem from './AppNavItem';

const navItems = [
  { id: 'home', label: 'Home', icon: 'px-fea:home' },
  { id: 'settings', label: 'Settings', icon: 'px-fea:settings' },
  { id: 'alert', label: 'Alerts', icon: 'px-fea:alerts' }
];

describe('AppNav', () => {
  test('should render', () => {
    const wrapper = shallow(<AppNav items={navItems} />);
    expect(wrapper.find('.app-nav').exists());
    expect(wrapper.find('[label="Dashboard"]').exists());
  });

  test('should set selected, seletedItem, selectedIndex on "click"', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems} />);
    const targetItem = wrapper.find('[label="Alerts"]').simulate('click');
    const selectedItem = wrapper.find('.selected');

    expect(wrapper.state().selectedIndex).to.equal(2);
    expect(wrapper.state().selectedItem.id).to.equal(navItems[2].id);
    expect(selectedItem.exists());
    expect(spy.calledOnce);
    expect(targetItem);
  });

  xtest('should set selected, seletedItem, selectedIndex when selected is not null', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems} />);
    expect(wrapper.state().selectedIndex).to.equal(1);
    expect(wrapper.state().selectedItem.id).to.equal(navItems[1].id);
    expect(spy.calledOnce);
  });

  test('should work with propForSelect', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected="home" propForSelect="id" items={navItems} />);
    // expect(wrapper.state().selectedItem.id).to.equal('home');
    const targetItem = wrapper.find('[label="Alerts"]').simulate('click');
    const selectedItem = wrapper.find('.selected');

    expect(wrapper.state().selected).to.equal('alert');
    expect(wrapper.state().selectedItem.id).to.equal('alert');
    expect(selectedItem.exists());
    expect(spy.calledOnce);
    expect(targetItem);
  });
  it('should not update if selected does not change', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<AppNav onChange={spy} selected={1} items={navItems} />);
    expect(wrapper.state().selected).to.equal(1);
    wrapper.setProps({ selected: 2 });
    expect(wrapper.state().selected).to.equal(2);
    wrapper.setProps({ selected: 0 });
    expect(wrapper.state().selected).to.equal(0);
    // expect(spy.callCount).to.equal(2);
  });
});

describe('AppNavItem', () => {
  it('should render', () => {
    const wrapper = shallow(<AppNavItem item={navItems[0]} />);
    expect(wrapper.find('[label="Home"]').exists());
  });

  it('should dispatch click handler', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<AppNavItem item={navItems[0]} onClick={spy} />);
    expect(wrapper.find('[label="Home"]').exists());
    wrapper.find('.px-app-nav-item').simulate('click');
    expect(spy.calledOnce);
  });
  it('should render icon', () => {
    const wrapper = shallow(<AppNavItem {...navItems[0]} />);
    expect(wrapper.find('[label="Home"]').exists());
    expect(wrapper.find('.px-fea-home').exists());
  });
  it('should render dropdown icon if prop exists', () => {
    const wrapper = shallow(
      <AppNavItem
        dropdown
        {...navItems[0]}
      />
    );
    expect(wrapper.find('[label="Home"]').exists());
    expect(wrapper.find('.app-nav-item__dropdown-icon').exists());
  });
  it('should render empty icon/label if prop exists', () => {
    const wrapper = shallow(
      <AppNavItem
        emptyIcon
        emptyLabel
        {...navItems[0]}
      />
    );
    expect(wrapper.find('[label="Home"]').exists());
    expect(wrapper.find('.app-nav-item__label--empty').exists());
    expect(wrapper.find('.app-nav-item__icon--empty').exists());
  });
  it('should render empty icon/label if empty exists', () => {
    const wrapper = shallow(
      <AppNavItem
        empty
        {...navItems[0]}
      />
    );
    expect(wrapper.find('[label="Home"]').exists());
    expect(wrapper.find('.app-nav-item__label--empty').exists());
    expect(wrapper.find('.app-nav-item__icon--empty').exists());
  });
});
