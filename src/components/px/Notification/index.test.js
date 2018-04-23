import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import Notification from './';

const types = [
	'healthy',
	'important',
	'warning',
	'error',
	'info',
	'unknown'
];

describe('Notification', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <Notification statusIcon='px-utl:delete' opened={true}>Message</Notification>
    );
    console.log(wrapper.debug());
    expect(wrapper.props().opened).to.equal(true);
  });


  test('should render open', () =>{
    const wrapper = shallow(
      <Notification opened={true}>Message</Notification>
    );
    console.log(wrapper.debug());
    expect(wrapper.props().opened).to.equal(true);
  });

  types.forEach(type => {
    test(`should type ${type}`, () =>{
      const wrapper = shallow(
        <Notification type={type}>Message</Notification>
      );
      expect(wrapper.props().type).to.equal(type);
    });
  });

  test(`should type error`, () =>{
    const wrapper = shallow(
      <Notification type='error'>Message</Notification>
    );
    console.log(expect(wrapper));
    expect(wrapper.props().type).to.equal('error');
  });

  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
