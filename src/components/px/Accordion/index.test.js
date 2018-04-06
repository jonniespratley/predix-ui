import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import Accordion from './';

describe('Accordion', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <Accordion headerText="Header Caption" status="Last Updated: 3 Days Ago">
        <p>Accordion content goes here.</p>
      </Accordion>
    );
    expect(wrapper.find('.px-accordion__header').exists());
  });

  xtest('should toggle open/closed', () =>{
    let isOpen = true;
    const wrapper = shallow(
      <Accordion headerText='Should Toggle' open={isOpen}>
        <p>Accordion content goes here.</p>
      </Accordion>
    );

    expect(wrapper.find('.px-accordion--open').length).to.equal(1);
    expect(wrapper.state('open')).to.equal(true);
    wrapper.find('header').simulate('click');

    expect(wrapper.state('open')).to.equal(false);
    expect(wrapper.find('.px-accordion--open').length).to.equal(0);
  });

  xtest('can be disabled', () =>{
    const wrapper = shallow(
      <Accordion headerText='Should Toggle' disabled>
        <p>Accordion content goes here.</p>
      </Accordion>
    );
    expect(wrapper.find('.px-accordion--open').length).to.equal(1);
    wrapper.find('header').simulate('click');

    expect(wrapper.find('.px-accordion--open').length).to.equal(1);
    expect(wrapper.find('.px-accordion--disabled').length).to.equal(1);

  });

});
