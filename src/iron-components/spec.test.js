import {expect} from 'chai';
import React from 'react';
import {shallow, mount} from 'enzyme';
import IronComponents from './';

import IronCollapse from './iron-collapse';
import IronSelector from './iron-selector';
import IronPages from './iron-pages';

describe('iron-components', () => {

  describe('iron-collapse', () => {
    test('should render', () => {
      const wrapper = mount(<IronCollapse/>);
      console.log(wrapper.debug());
      expect(wrapper.find('.iron-collapse')).to.have.length(1);
    });
  });

  describe('iron-pages', () => {
    test('should render', () => {
      const wrapper = shallow(
        <IronPages selected={0}>
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
        </IronPages>
      );
      console.log(wrapper.debug());
      expect(wrapper.find('.iron-selected')).to.have.length(1);
    });
  });

  describe('iron-selector', () => {
    test('should render', () => {
      const wrapper = shallow(
        <IronSelector selected={0}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </IronSelector>
      );
      console.log(wrapper.debug());
      expect(wrapper.find('.iron-selected')).to.have.length(1);
    });
  });

  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
