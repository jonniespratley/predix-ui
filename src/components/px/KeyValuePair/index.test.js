import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
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
      expect(wrapper.find(`.${size}`)).to.have.length(1);
      expect(wrapper.find(`KvpValue`)).to.have.length(1);
      expect(wrapper.find(`KvpValue`).name()).to.equal('KvpValue');
      //expect(wrapper.find(`.kvp-uom`)).to.have.length(1);
    });
  });
  
});
