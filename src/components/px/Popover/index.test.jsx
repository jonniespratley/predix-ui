import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PxPopover from './';

describe('Popover', () => {
  test('should render', () =>{
    const wrapper = shallow(<PxPopover/>);
    console.log(wrapper.debug());

    const tree = renderer.create(<PxPopover/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
