import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import Chip from './Chip';

describe('Chip', () => {
  test('should render with text', () => {
    const wrapper = shallow(<Chip>Label</Chip>);
    expect(wrapper).matchSnapshot();
  });
  test('should render with selected', () => {
    const wrapper = shallow(<Chip selected>Label</Chip>);
    expect(wrapper).matchSnapshot();
  });
  test('should render with icon', () => {
    const wrapper = shallow(
      <Chip showIcon icon="px-utl:close">Label</Chip>
    );
    expect(wrapper).matchSnapshot();
  });
});
