//import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import AlertLabel from './';
const types = [
	'healthy',
	'important',
	'warning',
	'error',
	'info',
	'unknown'
];
describe('AlertLabel', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <AlertLabel/>
    );
    //expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly', () =>{
    const wrapper = shallow(
      <AlertLabel label='Test'/>
    );
    expect(wrapper.find('.label')).toBeTruthy();
    //expect(wrapper.contains(<span className='label__text'>Test</span>)).to.equal(true);
  });

  types.forEach(type => {
    test(`should render type = ${type}`, () =>{
      const wrapper = shallow(
        <AlertLabel type={type} label={type}/>
      );
      expect(wrapper.props().type).toBe(type);
    });
  });

});
