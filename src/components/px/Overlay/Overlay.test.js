import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Overlay from './';

describe('Overlay', () => {

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Overlay opened/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should has open class', () =>{
    const wrapper = shallow(<Overlay opened/>);
    expect(wrapper.state('opened')).toEqual(true);
  });

  test('should update state when props change', () =>{
    const wrapper = shallow(<Overlay/>);
    expect(wrapper.state('opened')).toEqual(false);
    wrapper.setProps({opened: true});
    expect(wrapper.state('opened')).toEqual(true);
  });
  
  test('should has open class', () =>{
    const wrapper = shallow(<Overlay opened/>);
    expect(wrapper.state('opened')).toEqual(true);
  });

  test('onOverlayClick triggers on backdrop click', () => {
    const onButtonClick = sinon.spy();
    const onRequestClose = sinon.spy();
    const wrapper = shallow(<Overlay opened onRequestClose={onRequestClose} onOverlayClick={onButtonClick}/>);
    wrapper.simulate('click');

    expect(onButtonClick.calledOnce).toEqual(true);

    wrapper.instance().close();
    expect(onRequestClose.calledOnce).toEqual(true);
    expect(wrapper.state().opened).toEqual(false);

    wrapper.instance().open();
    expect(wrapper.state().opened).toEqual(true);
  });

  test('onEscapeKeyUp - fires event when pressed', () => {
    const onEscapeKeyUp = sinon.spy();
    const wrapper = shallow(<Overlay opened onEscapeKeyUp={onEscapeKeyUp} />);
    wrapper.simulate('keyUp', {key: 'ESC', keyCode: 27});
    expect(onEscapeKeyUp.calledOnce).toEqual(true);
  });

  test('ignoreBackdropClick - does not close on ignoreBackdropClick click', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Overlay opened ignoreOverlayClick onOverlayClick={onButtonClick}/>);
    wrapper.simulate('click');
    expect(onButtonClick.calledOnce).toEqual(false);
  });

});
