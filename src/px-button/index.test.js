import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxButton from './';

describe('px-button', () => {
  test('should...', () =>{
    const wrapper = shallow(
      <PxButton/>
    );
    console.log(wrapper.debug());
    expect(true).to.equal(true);
  });
  test('should render button', () => {
    const wrapper = shallow(<PxButton/>);
    console.log(wrapper.debug());
    expect(wrapper.find('.btn')).to.have.length(1);
  });
  test('should render label and style', () => {
    const wrapper = shallow(<PxButton label='Button' primary/>);
    console.log(wrapper.debug());
    expect(wrapper.find('.btn')).to.have.length(1);
    expect(wrapper.find('.btn--primary')).to.have.length(1);
  });
});
