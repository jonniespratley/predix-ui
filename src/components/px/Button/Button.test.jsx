import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PxButton from '.';

const buttonThemes = [
  'primary',
  'secondary',
  'tertiary',
  'call-to-action',
  'bare',
  'bare-primary'
];

const buttonSizes = [
  'small',
  'regular',
  'large',
  'huge',
  'full'
];

describe('Button', () => {

  test('should render button', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<PxButton onClick={onButtonClick}>Button</PxButton>);
    expect(wrapper.find('.px-button')).toHaveLength(1);
    wrapper.find('.px-button').simulate('click');
    expect(onButtonClick.calledOnce).toEqual(true);
  });

  buttonSizes.forEach(size => {
    test(`should render ${size} button`, () => {
      const wrapper = shallow(<PxButton size={size}>Button</PxButton>);
      expect(wrapper.find('.px-button')).toHaveLength(1);
    });
  });

  buttonThemes.forEach((theme, index) => {
    test(`should render ${theme} button`, () => {
      const wrapper = shallow(<PxButton theme={theme}>Button</PxButton>);
      expect(wrapper.find('.px-button')).toHaveLength(1);
      const tree = renderer.create(<PxButton theme={theme}>Button</PxButton>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })

});
