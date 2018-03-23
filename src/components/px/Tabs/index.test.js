import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxTabs from './';
import Tab from './Tab';
describe('Tabs', () => {
  test('should...', () =>{
    const wrapper = shallow(
      <PxTabs/>
    );
    console.log(wrapper.debug());
    expect(true).to.equal(true);
  });
  test('should change selected tab to selected prop', () =>{
    const wrapper = shallow(
      <PxTabs selected='tab2' propForSelect='id'>
        <Tab label="Tab 1" id='tab1'>
          <p>This is the tab 1 content. </p>
        </Tab>
        <Tab label="Tab 2" id='tab2'>
        <p>This is the tab 2 content. </p>
        </Tab>
      </PxTabs>
    );
    console.log(wrapper.debug());
    console.log(wrapper.state());
    expect(wrapper.state().selected).to.equal('tab2');
    wrapper.setProps({selected: 'tab1'});
    expect(wrapper.state().selected).to.equal('tab1');
  });
  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
