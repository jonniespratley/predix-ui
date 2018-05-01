import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import Accordion from './';

describe('Accordion', () => {
  test('should render open by default', () =>{
    const wrapper = shallow(
      <Accordion headerText="Header Caption" status="Last Updated: 3 Days Ago">
        <p>Accordion content goes here.</p>
      </Accordion>
    );
    expect(wrapper.find('.px-accordion__header').exists());
    expect(wrapper.state().open === true);
    wrapper.setProps({open: false})
    expect(wrapper.state().open === false);
    const tree = renderer.create(
      <Accordion headerText="Header Caption" status="Last Updated: 3 Days Ago">
        <p>Accordion content goes here.</p>
      </Accordion>
    ).toJSON();
      expect(tree).toMatchSnapshot();
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

    expect(wrapper.find('.px-utl-chevron-down').exists());
    wrapper.find('.px-accordion__header').simulate('click');
    expect(onCollapsed.called);
    expect(wrapper.state().open === false);
    expect(wrapper.find('.px-utl-chevron').exists());
  });

  test('can be disabled', () => {
    let spy = sinon.spy();
    const wrapper = shallow(
      <Accordion headerText='Should Toggle' onCollapsed={spy} disabled>
        <p>Accordion content goes here.</p>
      </Accordion>
    );
    expect(wrapper.find('.px-accordion--open').length).toEqual(1);
    wrapper.find('.px-accordion__header').simulate('click');
    expect(!spy.called);
    expect(wrapper.find('.px-accordion--open').length).toEqual(1);
    expect(wrapper.find('.px-accordion--disabled').length).toEqual(1);
  });
});
