import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AlertLabel from '.';
import 'jest-styled-components';

const types = [
  'healthy',
  'important',
  'warning',
  'error',
  'info',
  'success',
  'unknown'
];
describe('AlertLabel', () => {
  test('should render', () => {
    const wrapper = shallow(<AlertLabel />);
    expect(wrapper);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<AlertLabel type="info" />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background-color', 'var(--px-alert-label-background-color--information,blue)');
    expect(tree).toHaveStyleRule('color', 'var(--px-alert-label-text-color--information,white)');
  });

  test('should render correctly', () => {
    const wrapper = shallow(
      <AlertLabel label="Test" />
    );
    expect(wrapper.find('.label'));
  });
  types.forEach((type) => {
    test(`should render type = ${type}`, () => {
      const wrapper = shallow(<AlertLabel type={type} label={type} />);
      expect(wrapper.props().type).toEqual(type);
      const tree = renderer.create(<AlertLabel type={type} label={type} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
