import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxBrandingBar from './';

describe('BrandingBar', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <PxBrandingBar/>
    );
    expect(wrapper).to.matchSnapshot(true);
  });
  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
