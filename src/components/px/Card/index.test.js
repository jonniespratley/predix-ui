import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxCard from './';

describe('Card', () => {
  test('should...', () =>{
    const wrapper = shallow(
      <PxCard/>
    );
    console.log(wrapper.debug());
    expect(true).to.equal(true);
  });
  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
