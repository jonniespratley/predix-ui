import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Drawer from './';

const anchors = [ 'left', 'right', 'top', 'bottom' ];

describe('Drawer', () => {
  test('should render disabled', () => {
    const tree = renderer.create(
      <Drawer opened overlay>Drawer Content</Drawer>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('anchors', () => {
    anchors.forEach(anchor => {
      test(`should render ${anchor}`, () => {
        const tree = renderer.create(
          <Drawer overlay anchor={anchor} opened>Drawer Content</Drawer>
        ).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('Events', () => {
    test('onOverlayClick - should trigger handler', () => {
      const spy = sinon.spy();
      const wrapper = shallow(<Drawer onOverlayClick={spy} overlay opened>Drawer Content</Drawer>);
      expect(wrapper.find('.px-drawer-overlay')).toHaveLength(1);
      wrapper.find('.px-drawer-overlay').simulate('click');
      expect(spy.calledOnce).toEqual(true);
    });
  });

});
