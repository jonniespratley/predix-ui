import renderer from 'react-test-renderer';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Dropdown from './';

const items = [
  {"key":"1","val":"iPhone"},
  {"key":"2","val":"Android"},
  {"key":"3","val":"Blackberry"},
  {"key":"4","val":"Windows Phone"},
  {"key":"5","val":"Flip Phone","disabled":true}
];

describe('Dropdown', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <Dropdown/>
    );
    expect(wrapper.find('.px-dropdown')).toHaveLength(1);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Dropdown
        displayValue='My Val'
        buttonStyle='default'
        items={items} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render with items', () =>{
    const wrapper = shallow(
      <Dropdown items={items}/>
    );
    expect(wrapper.find('.px-button')).toHaveLength(1);
    expect(wrapper.find('.px-dropdown__option')).toHaveLength(items.length);
  });

  test('should close when close icon clicked', () =>{
    const wrapper = shallow(
      <Dropdown items={items}/>
    );
    wrapper.setState({opened: true});
    //expect(wrapper.find({icon: 'px-utl:chevron'})).toHaveLength(1);
  });

  test('should clear selected when px-utl-close is clicked', () =>{
    const wrapper = mount(
      <Dropdown items={items} selected={1}/>
    );
    expect(wrapper.state().selected).toEqual(1);
    console.log(wrapper.state());
    console.log('wrapper', wrapper.debug());
    //expect(wrapper.find({icon: 'px-utl:chevron'})).toHaveLength(1);
  });

  test('should trigger onChange when item is changed', () =>{
    let spy = sinon.spy();
    const wrapper = shallow(
      <Dropdown items={items} onChange={spy} />
    );
    expect(wrapper.find('.px-button')).toHaveLength(1);
    expect(wrapper.find('.px-dropdown__option')).toHaveLength(items.length);
    wrapper.find('[data-val="iPhone"]').simulate('click');
    console.log(wrapper.state());
    //console.log(spy.getCalls());
    expect(spy.calledOnce).toEqual(true);
    //expect(spy.calledWith('test')).toEqual(true);
  });
});
