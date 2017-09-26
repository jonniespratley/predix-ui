import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxAlertLabel from '../../src/px-alert-label';

describe('px-alert-label', () => {
  test('should render correctly', () =>{
    const wrapper = shallow(
      <PxAlertLabel label='Test'/>
    );
    console.log(wrapper.debug());

    expect(wrapper.find('.label')).to.have.length(1);
    expect(wrapper.contains(<span className='label__text'>Test</span>)).to.equal(true);
  });

});
