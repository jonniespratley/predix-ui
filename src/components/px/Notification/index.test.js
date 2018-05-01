import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Notification from './';

const types = [
	'healthy',
	'important',
	'warning',
	'error',
	'info',
	'unknown'
];

describe('Notification', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <Notification statusIcon='px-utl:delete' opened={true}>Message</Notification>
    );
    expect(wrapper.props().opened).toEqual(true);
  });

  test('should render open', () =>{
    const wrapper = shallow(
      <Notification opened={true}>Message</Notification>
    );
    expect(wrapper.props().opened).toEqual(true);
  });

  types.forEach(type => {
    test(`should type ${type}`, () =>{
      const wrapper = shallow(
        <Notification type={type}>Message</Notification>
      );
      expect(wrapper.props().type).toEqual(type);
      const tree = renderer.create(<Notification small opened={true} type={type}>Message</Notification>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  test(`should type error`, () =>{
    const wrapper = shallow(
      <Notification type='error'>Message</Notification>
    );
    expect(wrapper.props().type).toEqual('error');
  });

});
