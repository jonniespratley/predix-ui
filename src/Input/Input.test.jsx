import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Input from '.';
import Label from './Label';
import Textarea from './Textarea';
import Select from './Select';
import FormField from './FormField';

const sizes = [
  'tiny',
  'small',
  'regular',
  'large',
  'huge'
];
const types = [
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week'
];

describe('Input', () => {
  test('should render', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(
      <Input type="text" onChange={onChange} />
    );

    wrapper.simulate('change');
    expect(onChange.called).to.equal(true);
    expect(wrapper).matchSnapshot();
  });

  types.forEach((type) => {
    test(`should render ${type}`, () => {
      const wrapper = shallow(<Input type={type} />);
      // expect(wrapper.props('type')).to.be(type);
      expect(wrapper).matchSnapshot();
    });
  });

  sizes.forEach((size) => {
    test(`should render ${size}`, () => {
      const wrapper = shallow(<Input type="text" size={size} />);
      // expect(wrapper.props('size')).to.be(size);
      expect(wrapper).matchSnapshot();
    });
  });
});

describe('Label', () => {
  const mockLabel = 'Some Label';
  it('should render', () => {
    const wrapper = shallow(<Label>{mockLabel}</Label>);
    expect(wrapper).matchSnapshot();
  });
  it('should render inline', () => {
    const wrapper = shallow(<Label inline>{mockLabel}</Label>);
    expect(wrapper).matchSnapshot();
  });
});

describe('Textarea', () => {
  it('should render', () => {
    const wrapper = shallow(<Textarea name="text" />);
    expect(wrapper).matchSnapshot();
  });
});

describe('Select', () => {
  it('should render', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).matchSnapshot();
    // expect(wrapper.name()).to.equal('select');
    // expect(wrapper.find('select')).to.have.length(1);
  });
});

describe('FormField', () => {
  it('should render', () => {
    const wrapper = shallow(
      <FormField label="Username" htmlFor="username">
        <Input id="username" type="email" placeholder="Enter username" />
      </FormField>
    );
    // expect(wrapper.name()).to.equal('FormField');
    expect(wrapper.find('[htmlFor="username"]')).to.have.length(1);
  });
});
