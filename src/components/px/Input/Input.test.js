import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Input from './';
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
  test('should render', () =>{
    const onChange = sinon.spy();
    const wrapper = shallow(
      <Input type='text' onChange={onChange}/>
    );
    wrapper.simulate('change');
    expect(onChange.called).toEqual(true);
    expect(wrapper.name()).toEqual('input');
    expect(wrapper.find('input')).toHaveLength(1);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Input type="text" placeholder="Type"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('types', () => {
    types.forEach(type => {
      test(`should render ${type}`, () =>{
        const wrapper = shallow(<Input type={type}/>);
        expect(wrapper.find('input')).toHaveLength(1);
      });
    });
  });

  describe('sizes', () => {
    sizes.forEach(size => {
      test(`should render "${size}"`, () =>{
        const wrapper = shallow(<Input type="text" size={size}/>);
        expect(wrapper.find('input')).toHaveLength(1);
      });
      test('matches snapshot', () => {
        const tree = renderer.create(<Input type="text" size={size}/>).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  })
});

describe('Label', () => {
  const mockLabel = 'Some Label';
  it('should render', () => {
    const wrapper = shallow(<Label>{mockLabel}</Label>);
    expect(wrapper.find('label')).toHaveLength(1);
    expect(wrapper.name()).toEqual('label');
  });
  it('should render inline', () => {
    const wrapper = shallow(<Label inline={true}>{mockLabel}</Label>);
    expect(wrapper.find('label')).toHaveLength(1);
  });
});

describe('Textarea', () => {
  it('should render', () => {
    const wrapper = shallow(<Textarea name="text"/>);
    expect(wrapper.name()).toEqual('textarea');
    expect(wrapper.find('textarea')).toHaveLength(1);
  });
  test('matches snapshot', () => {
    const tree = renderer.create(<Textarea name="text"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Select', () => {
  it('should render', () => {
    const wrapper = shallow(<Select/>);
    expect(wrapper.name()).toEqual('select');
    expect(wrapper.find('select')).toHaveLength(1);
  });
  test('matches snapshot', () => {
    const tree = renderer.create(<Select/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('FormField', () => {
  it('should render', () => {
    const wrapper = shallow(
      <FormField label='Username' htmlFor='username'>
        <Input id='username' type='email' placeholder='Enter username'/>
      </FormField>
    );
    //expect(wrapper.name()).toEqual('FormField');
    expect(wrapper.find('[htmlFor="username"]')).toHaveLength(1);
  });
  test('matches snapshot', () => {
    const tree = renderer.create(
      <FormField label='Username' htmlFor='username'>
        <Input id='username' type='email' placeholder='Enter username'/>
      </FormField>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
