import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import Accordion from './';

describe('Accordion', () => {
  test('should...', () =>{
    const wrapper = shallow(
      <Accordion headerText="Header Caption" status="Last Updated: 3 Days Ago">
        <p>Accordion content goes here.</p>
      </Accordion>
    );
    expect(wrapper.find('.accordion__header').exists());
  });
  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
