import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import Overlay from './';
import sinon from 'sinon';

describe('px-overlay', () => {
  test('should render', () =>{
    const wrapper = shallow(<Overlay/>);
    console.log(wrapper.debug());
    expect(true).to.equal(true);
  });

  test('should has open class', () =>{
    const wrapper = shallow(<Overlay opened/>);
    expect(wrapper.find('.px-overlay--is-open')).to.have.length(1);
  });

  xtest('closes on backdrop click', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Overlay opened onOverlayClick={onButtonClick}/>);

    wrapper.simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
    expect(wrapper.find('.px-overlay--is-open')).to.have.length(0);
    expect(wrapper.find('.px-overlay--invisible')).to.have.length(1);
  });

  test('does not close on ignoreBackdropClick click', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Overlay opened ignoreOverlayClick onOverlayClick={onButtonClick}/>);
    wrapper.simulate('click');
    expect(onButtonClick.calledOnce).to.equal(false);
  });

});
