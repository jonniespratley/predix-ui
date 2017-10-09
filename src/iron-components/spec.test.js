import {expect} from 'chai';
import React from 'react';
import {shallow, mount} from 'enzyme';
import IronComponents from './';

import IronCollapse from './IronCollapse';
import IronSelector from './IronSelector';
import IronPages from './iron-pages';

import IronSelectable from './IronSelectable';
import IronMultiSelectable from './IronMultiSelectable';

function createMockItem(i) {
	return {
		props: {
			id: `page-${i}`,
			name: "Item " + i
		}
	};
}
describe('iron-components', () => {

  describe('IronSelectable', () => {
    test('should set selectedItem', () => {
      const instance = new IronSelectable({
        multi: false,
        selected: 1,
        items: [createMockItem(1), createMockItem(2), createMockItem(3), createMockItem(4), createMockItem(5)]
      });
      instance.selectNext();
      expect(instance.selected).to.equal(2);
      instance.selectNext();
      expect(instance.selected).to.equal(3);
      instance.selectPrevious();
      expect(instance.selected).to.equal(2);
    });

    test('should select item in attrForSelected', () => {
      const instance = new IronSelectable({
        multi: false,
        attrForSelected: 'id',
        selected: 'page-1',
        items: [createMockItem(1), createMockItem(2), createMockItem(3), {props: {id: 1}}]
      });
      instance.selectNext();
      expect(instance.selectedItem).to.equal('page-2');
      instance.selectNext();
      expect(instance.selectedItem).to.equal('page-3');
      //instance.selectNext();
      //expect(instance.selectedItem).to.equal('page-3');
    });
  });

  xdescribe('iron-collapse', () => {
    test('should render', () => {
      const wrapper = shallow(<IronCollapse/>);
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
