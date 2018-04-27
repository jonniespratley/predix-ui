import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import KeyValuePair from './';

const sizes = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'regular'];

describe('KeyValuePair', () => {
  sizes.forEach(size => {
    test(`should render size ${size}`, () =>{
      const wrapper = shallow(
        <KeyValuePair
          label="Lorem Ipsum"
          value="12345"
          uom="units"
          size={size}/>
      );
      expect(wrapper.find(`.${size}`)).toHaveLength(1);
      expect(wrapper.find(`KvpValue`)).toHaveLength(1);
      expect(wrapper.find(`KvpValue`).name()).toEqual('KvpValue');
      //expect(wrapper.find(`.kvp-uom`)).to.have.length(1);
    });
    test(`${size} renders correctly`, () => {
      const tree = renderer.create(
        <KeyValuePair
          label="Lorem Ipsum"
          value="12345"
          uom="units"
          size={size}/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

});
