import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Input from './Input';
import Label from './Label';
import Textarea from './Textarea';
import Select from './Select';
import FormField from './FormField';

const sizes = [
  'auto',
  'full',
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
    expect(onChange.called).toBe(true);
    // expect(wrapper).matchSnapshot();
  });

  types.forEach((type) => {
    test(`should render ${type}`, () => {
      expect(renderer.create(<Input type={type} />).toJSON()).toMatchSnapshot();
    });
  });

  sizes.forEach((size) => {
    test(`should render ${size} - and match snapshot`, () => {
      const tree = renderer.create(<Input type="text" size={size} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Label', () => {
  const mockLabel = 'Some Label';
  it('should render', () => {
    expect(renderer.create(<Label>{mockLabel}</Label>).toJSON()).toMatchSnapshot();
  });
  it('should render inline', () => {
    expect(renderer.create(<Label inline>{mockLabel}</Label>).toJSON()).toMatchSnapshot();
  });
});

describe('Textarea', () => {
  it('should render', () => {
    expect(renderer.create(<Textarea name="text" />).toJSON()).toMatchSnapshot();
  });
});

describe('Select', () => {
  it('should render', () => {
    expect(renderer.create(<Select name="text" />).toJSON()).toMatchSnapshot();
  });
});

describe('FormField', () => {
  it('should render', () => {
    expect(renderer.create(
      <FormField label="Username" htmlFor="username">
        <Input id="username" type="email" placeholder="Enter username" />
      </FormField>
    ).toJSON()).toMatchSnapshot();
  });
});
