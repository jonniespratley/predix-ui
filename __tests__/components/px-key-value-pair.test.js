import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';

import PxKeyValuePair from '../../src/px-key-value-pair';

test('PxKeyValuePair', () => {
  const wrapper = shallow(
    <PxKeyValuePair label="Lorem Ipsum" value="12345" uom="units" size="alpha"/>
  );
  console.log(wrapper.debug());
  expect(wrapper.find('.label')).to.have.length(1);
  expect(wrapper.find('.delta')).to.have.length(1);
  expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
