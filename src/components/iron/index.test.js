import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import IronPages from './IronPages';
import IronCollapse from './IronCollapse';
import IronSelectable from './IronSelectable';
import IconSelector from './IronSelector';

function createMockItem(i) {
  return {
    props: {
      id: `page-${i}`,
      name: "Item " + i
    }
  };
}

describe('Iron Components', () => {

  describe('IronSelectable', () => {
    test('should set selectedItem', () => {
      const instance = new IronSelectable({
        multi: false,
        selected: 1,
        items: [createMockItem(1), createMockItem(2), createMockItem(3), createMockItem(4), createMockItem(5)]
      });
      instance.selectNext();
      expect(instance.selected).toEqual(2);
      instance.selectNext();
      expect(instance.selected).toEqual(3);
      instance.selectPrevious();
      expect(instance.selected).toEqual(2);
    });

    test('should select item in attrForSelected', () => {
      const instance = new IronSelectable({
        multi: false,
        attrForSelected: 'id',
        selected: 'page-1',
        items: [
          createMockItem(1),
          createMockItem(2),
          createMockItem(3), {
            props: {
              id: 1
            }
          }
        ]
      });
      instance.selectNext();
      expect(instance.selectedItem).toEqual('page-2');
      instance.selectNext();
      expect(instance.selectedItem).toEqual('page-3');
      instance.selectPrevious();
      instance.selectPrevious();
      expect(instance.selectedItem).toEqual('page-1');
      //instance.selectNext(); expect(instance.selectedItem). toEqual('page-3');
    });
  });

  xdescribe('IronCollapse', () => {
    test('should render', () => {
      const wrapper = shallow(<IronCollapse/>);
      expect(wrapper.find('.iron-collapse')).toHaveLength(1);
      const tree = renderer.create(<IronCollapse>This is content</IronCollapse>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    
  });

  describe('IronPages', () => {
    test('should render selected page', () => {
      const wrapper = shallow(
        <IronPages selected={0}>
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
        </IronPages>
      );
      expect(wrapper.find('.iron-selected')).toHaveLength(1);
      const tree = renderer.create(
        <IronPages selected={0}>
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
        </IronPages>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  xdescribe('IronSelector', () => {
    test('should render selected item', () => {
      const wrapper = shallow(
        <IronSelector selected={1}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </IronSelector>
      );
      expect(wrapper.find('.iron-selected'))
        .toHaveLength(1);
    });
  });
});
