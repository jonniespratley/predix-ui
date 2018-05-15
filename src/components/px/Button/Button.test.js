import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PxButton from './';

const buttonThemes = [
  'primary',
  'secondary',
  'tertiary',
  'call-to-action',
  'bare',
  'bare-primary',
  'healthy',
  'information',
  'warning',
  'important',
  'unknown',
  'error'
];

const buttonSizes = [
  'small',
  'regular',
  'large',
  'huge',
  'full'
];

describe('Button', () => {

  test('should render', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<PxButton onClick={onButtonClick}>Button</PxButton>);
    expect(wrapper.find('.px-button')).toHaveLength(1);
    wrapper.find('.px-button').simulate('click');
    expect(onButtonClick.calledOnce).toEqual(true);
  });


  describe('sizes', () => {
    buttonSizes.forEach(size => {
      test(`should render ${size} button`, () => {
        const wrapper = shallow(<PxButton size={size}>Button</PxButton>);
        expect(wrapper.find('.px-button')).toHaveLength(1);
      });
    });
  });

 describe('themes', () =>{
  buttonThemes.forEach((theme, index) => {
    test(`should render button with theme "${theme}"`, () => {
      const tree = renderer.create(<PxButton theme={theme}>Button</PxButton>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

 });

  test('should render button with icon', () => {
    const tree = renderer.create(
      <PxButton icon theme="call-to-action">
        <span role="img" aria-label="img">💯</span>
      </PxButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render disabled', () => {
    const tree = renderer.create(
      <PxButton disabled>
        Button
      </PxButton>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('pointer-events', 'none');
    expect(tree).toHaveStyleRule('cursor', 'not-allowed');
  });

});
