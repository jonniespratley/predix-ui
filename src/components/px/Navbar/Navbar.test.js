import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import Navbar from './';

describe('Navbar', () => {
  test('should render', () =>{
    const tree = renderer.create(<Navbar title="Navbar" showMenuButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('events', () => {
    test('onMenuButtonClick - should trigger when clicked', () =>{
      let spy = sinon.spy();
      const wrapper = shallow(<Navbar title="Navbar" showMenuButton onMenuButtonClick={spy} />);
      expect(wrapper.find('.navbar__button')).toHaveLength(1);
      wrapper.find('.navbar__button').simulate('click');
      expect(spy.calledOnce).toEqual(true);
    });
    test('onBackButtonClick - should trigger when clicked', () =>{
      let spy = sinon.spy();
      const wrapper = shallow(<Navbar title="Navbar" showBackButton onBackButtonClick={spy} />);
      expect(wrapper.find('.navbar__button')).toHaveLength(1);
      wrapper.find('.navbar__button').simulate('click');
      expect(spy.calledOnce).toEqual(true);
    });
  });
});
