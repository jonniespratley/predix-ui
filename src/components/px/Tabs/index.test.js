import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxTabs from './';
import Tab from './Tab';
describe('Tabs', () => {
  test('should render', () =>{
    const wrapper = shallow(
      <PxTabs/>
    );
    expect(wrapper.find('.px-tabs__nav')).to.have.length(1);
  });


  test('should change tab when selected prop changes', () =>{
    const wrapper = shallow(
      <PxTabs selected={1}>
        <Tab label='Tab 1' id='tab1'>This is the tab 1 content.</Tab>
        <Tab label='Tab 2' id='tab2'>This is the tab 2 content.</Tab>
        <Tab label='Tab 3' id='tab3'>This is the tab 3 content.</Tab>
      </PxTabs>
    );
    expect(wrapper.state().selected).to.equal(1);
    wrapper.setProps({selected: 0});
    expect(wrapper.state().selected).to.equal(0);
    wrapper.setProps({selected: 2});
    expect(wrapper.state().selected).to.equal(2);
  });

  test('should change tab on click', () =>{
    const wrapper = shallow(
      <PxTabs>
        <Tab label="Tab 1" id='tab1'>
          <p>This is the tab 1 content. </p>
        </Tab>
        <Tab label="Tab 2" id='tab2'>
          <p>This is the tab 2 content. </p>
        </Tab>
        <Tab label="Tab 3" id='tab3'>
          <p>This is the tab 3 content. </p>
        </Tab>
      </PxTabs>
    );
    wrapper.find('#tab2').simulate('click');
    expect(wrapper.state().selected).to.equal(1);
    wrapper.find('#tab1').simulate('click');
    expect(wrapper.state().selected).to.equal(0);
  });

  test('should change selected tab to propForSelect', () =>{
    const wrapper = shallow(
      <PxTabs selected='tab2' propForSelect='id'>
        <Tab label="Tab 1" id='tab1'>
          <p>This is the tab 1 content. </p>
        </Tab>
        <Tab label="Tab 2" id='tab2'>
          <p>This is the tab 2 content. </p>
        </Tab>
        <Tab label="Tab 3" id='tab3'>
        <p>This is the tab 3 content. </p>
        </Tab>
      </PxTabs>
    );
    expect(wrapper.state().selected).to.equal('tab2');
    wrapper.setProps({selected: 'tab1'});
    expect(wrapper.state().selected).to.equal(0);
    wrapper.setProps({selected: 'tab3'});
    expect(wrapper.state().selected).to.equal(2);
  });
  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
