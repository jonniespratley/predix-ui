import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import Accordion from './';
import sinon from 'sinon';

describe('Accordion', () => {
  test('should render open by default', () =>{
    const wrapper = shallow(
      <Accordion headerText="Header Caption" status="Last Updated: 3 Days Ago">
        <p>Accordion content goes here.</p>
      </Accordion>
    );
    console.log(wrapper.debug());
    expect(wrapper.find('.px-accordion__header').exists());
    expect(wrapper.state().open === true);
  });

  test('should toggle open/closed', () =>{
    let isOpen = true;
    let onCollapsed = sinon.spy();
    let onExpanded = sinon.spy();
    const wrapper = shallow(
      <Accordion headerText='Should Toggle' open={isOpen} onCollapsed={onCollapsed} onExpanded={onExpanded}>
        <p>Accordion content goes here.</p>
      </Accordion>
    );
    expect(onExpanded.called);
    expect(wrapper.state().open === true);

    wrapper.find('.px-accordion__header').simulate('click');
    expect(onCollapsed.called);
    expect(wrapper.state().open === false);
  });

  test('can be disabled', () =>{
    const wrapper = shallow(
      <Accordion headerText='Should Toggle' disabled>
        <p>Accordion content goes here.</p>
      </Accordion>
    );
    expect(wrapper.find('.px-accordion--open').length).to.equal(1);
    wrapper.find('.px-accordion__header').simulate('click');

    expect(wrapper.find('.px-accordion--open').length).to.equal(1);
    expect(wrapper.find('.px-accordion--disabled').length).to.equal(1);

  });

});
