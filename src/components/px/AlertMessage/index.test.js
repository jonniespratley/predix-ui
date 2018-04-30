//import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import AlertMessage from './';
import renderer from 'react-test-renderer';

describe('AlertMessage', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <AlertMessage/>
    );
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<AlertMessage type='important' visible />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('display', 'flex');
    //expect(tree).toHaveStyleRule('color', 'var(--px-alert-label-text-color--information,white)');
  });
  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
