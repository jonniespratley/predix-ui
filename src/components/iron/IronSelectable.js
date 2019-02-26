/* eslint-disable */
import IronMultiSelectable from './IronMultiSelectable';
/**
 * IronSelectable - https://github.com/PolymerElements/iron-selector/blob/master/iron-selectable.html
   <iron-selector selected="0">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </iron-selector>
 */
export default class IronSelectable extends IronMultiSelectable {
  constructor(props = {}) {
    super(props);
    this.items = props.children || props.items || [];
    this.attrForSelected = props.attrForSelected || null;
    this.selectedClassName = props.selectedClassName || 'iron-selected';
    this.selectedItem = props.selectedItem || null;
    this.selected = props.selected || null;
    this.selectedAttribute = props.selectedAttribute || null;
  }
  
  indexOf(item) {
    return this.items.indexOf(item);
  }

  select(value) {
    this.selected = value;
    this.selectedItem = value;
  }

  selectPrevious() {
    const { length } = this.items;
    const index = (Number(this._valueToIndex(this.selected)) - 1 + length) % length;
    this.select(this._indexToValue(index));
  }

  selectNext() {
    const index =
			(Number(this._valueToIndex(this.selected)) + 1) % this.items.length;
    this.select(this._indexToValue(index));
  }

  selectIndex(index) {
    this.select(this._indexToValue(index));
  }

  _valueToIndex(value) {
    if (this.attrForSelected) {
      for (var i = 0, item; (item = this.items[i]); i++) {
        if (this._valueForItem(item) == value) {
          return i;
        }
      }
    } else {
      return Number(value);
    }
  }

  _indexToValue(index) {
    if (this.attrForSelected) {
      const item = this.items[index];
      if (item) {
        return this._valueForItem(item);
      }
    } else {
      return index;
    }
  }

  _valueForItem(item) {
    if (!item) {
      return null;
    }
    const propValue = item.props[this.attrForSelected];
    return propValue != undefined ? propValue : item;
  }

  _valueForIndex(index) {
    if (!index) {
      return null;
    }
    const propValue = this.items[this.attrForSelected];
    return propValue != undefined ? propValue : this.items[index];
  }

  _selectionChange() {
    this._setSelectedItem(this._selection.get());
  }
}
