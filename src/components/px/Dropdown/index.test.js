import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
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
    expect(wrapper.find('.px-dropdown')).to.have.length(1);
  });
  test('should render with items', () =>{
    const wrapper = shallow(
      <Dropdown items={items}/>
    );
    expect(wrapper.find('.px-button')).to.have.length(1);
    expect(wrapper.find('.px-dropdown__option')).to.have.length(items.length);
  });
  //expect(wrapper.find('.px-dropdown')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
