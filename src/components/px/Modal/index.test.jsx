import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import PxModal from './';

describe('Modal', () => {
  test('should render', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<PxModal onBackdropClick={onClick}>Content</PxModal>);
    // wrapper.find('.px-overlay').simulate('click');
    //expect(onClick.calledOnce).toEqual(true);
    const tree = renderer.create(<PxModal
      headerText='Modal'
      acceptText='Confirm'
      reject='Cancel'
      />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
