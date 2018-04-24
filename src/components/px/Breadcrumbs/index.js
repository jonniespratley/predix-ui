import React from 'react';
import classnames from 'classnames';
// import Breadcrumbs from './Breadcrumbs';
// import {AssetGraph} from '../ContextBrowser/AssetGraph';
// import stylesheet from './px-breadcrumbs.scss';
import Dropdown from '../Dropdown';
import Icon from '../IconSet/Icon';
import Flex from '../../../styles/flex';

class BreadcrumbsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clickOnlyMode = props.clickOnlyMode || false;
    //  this._assetGraph = new AssetGraph(props.items || []);

    this.keys = props.keys;

    this.handleRef = this.handleRef.bind(this);
    this._getItemProp = this._getItemProp.bind(this);
    this._isLabel = this._isLabel.bind(this);
    this._isDropdown = this._isDropdown.bind(this);
    this._doesItemHaveSiblings = this._doesItemHaveSiblings.bind(this);
    this._isNotFirstItemInData = this._isNotFirstItemInData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e, index, item) {
    if (this.props.onClick) {
      this.props.onClick(e, index, item);
    }
  }
  componentDidMount() {
    if (this.refs.root) {
      // this._breadcrumbsObj = new Breadcrumbs(this.refs.root, this._assetGraph, this.clickOnlyMode, this.props.items, this.keys);
    }
  }
  handleRef(el) {
    this.refs = {};
    this.refs.root = el;
  }
  /**
   * Fetches an item's property at the configured key. Used to dynamically
   * fetch the item's label, icon, children, etc. based on the configured
   * `keys` for the component.
   */
  _getItemProp(item, key) {
    if (item && typeof item === 'object' && typeof key === 'string' && item.hasOwnProperty(key)) {
      return item[key];
    }
    return null;
  }
  _isNotFirstItemInData(index) {
    return index !== 0;
  }
  /**
   * This function checks whether the item in question has siblings.
   * If the item is an overflow item, we return a false, since it's not going to be in the graph anyway.
   */
  _doesItemHaveSiblings(itemInPath) {
    let graph = this._assetGraph,
      source = itemInPath.source ? itemInPath.source : itemInPath,
      isItemOverflow = this._getItemProp(itemInPath, this.keys.label) === '...';
    return isItemOverflow ? true : graph.hasSiblings(source);
  }
  /**
   * These three methods are used to determine which type of node to render.
   * Returns true if clickOnlyMode is turned on and its not the overflow node.
   */
  _isLabel(item, clickOnlyMode) {
    return (clickOnlyMode && this._getItemProp(item, this.keys.label) !== '...') || (!clickOnlyMode && !this._doesItemHaveSiblings(item));
  }
  /**
   * These three methods are used to determine which type of node to render.
   * Returns true if clickOnlyMode is turned off and its not the overflow node.
   */
  _isDropdown(item, clickOnlyMode) {
    return !clickOnlyMode && this._getItemProp(item, this.keys.label) !== '...' && this._doesItemHaveSiblings(item);
  }
  /**
   * These three methods are used to determine which type of node to render.
   * Returns true if this is the overflow node.
   */
  _isOverflow(item) {
    return this._getItemProp(item, this.keys.label) === '...';
  }
  /**
   * Determines whether to display small or large chevrons based on whether
   * `clickOnlyMode` is enabled.
   */
  _getSeparatorSize(clickOnlyMode) {
    return this.clickOnlyMode ? 'small' : 'large';
  }
  /**
  * Returns a disabled class if the item is set as non-selectable.
  */
  _getDisabled(item) {
    return item.isSelectable === false ? 'disabled' : '';
  }
  render() {
    const {
      items,
      clickOnlyMode,
      keys,
      selectedRoute
    } = this.props;

    return (
      <div ref={this.handleRef}>

        <Flex middle>

          {selectedRoute && selectedRoute.map((label, index) => (
            <div data-index={index} className="breadcrumbTopItem" key={index} >
              <Flex middle>
                {this._isNotFirstItemInData(index, selectedRoute) && (<Icon icon="px-utl:chevron-right" size={24} viewBox="0 0 16 16" />)}
                <span
                  className="actionable actionable--action u-ph-"
                  onClick={this.handleClick.bind(this, index, selectedRoute)}
                >
                  {label}
                </span>
              </Flex>
            </div>
            ))}
          {/*
            {items && items.map((item, index) => (
              <div key={index} data-text={item.label} data-index={index} className="breadcrumbTopItem u-ph- flex flex--row flex--middle">
                {this._isLabel(item, clickOnlyMode) && <span className="actionable actionable--action">{this._getItemProp(item, keys.label)}</span>}
                {this._isDropdown(item, clickOnlyMode) &&
                <Dropdown
                  disableClear={true}
                  displayValue={this._getItemProp(item, keys.label)}
                  items={this._getItemProp(item, keys.children)}
                  buttonStyle='bare'/>}
              </div>
            ))}

            <template is="dom-repeat" items="[[_mainPathItems]]">

              <template is="dom-if" if="[[_isNotFirstItemInData(index, _mainPathItems)]]">
                <li className="breadcrumbTopItem flex flex--middle">
                  <span className="rightAngle [[_getSeparatorSize(clickOnlyMode)]]"><px-icon icon="px-utl:chevron-right"></px-icon></span>
                </li>
              </template>

              <li data-text="[[item.label]]" data-item="[[item]]" data-index="[[index]]" class="breadcrumbTopItem u-ph- flex flex--row flex--middle" on-tap="_onPathTap">

                <template is="dom-if" if="[[_isLabel(item, clickOnlyMode)]]">
                  <span className="actionable actionable--action">[[item.label]]</span>
                </template>

                <template is="dom-if" if="[[_isDropdown(item, clickOnlyMode)]]">
                  <px-dropdown display-value="[[item.label]]" items="[[_clickedItemChildren]]" search-mode="[[searchMode]]" button-style="bare" disable-clear></px-dropdown>
                </template>

                <template is="dom-if" if="[[_isOverflow(item)]]">
                  <px-dropdown id="dropdown" items="[[_clickedItemChildren]]" button-style="icon" icon="px-nav:more"></px-dropdown>
                </template>

              </li>
            </template>

            */}
        </Flex>


      </div>
    );
  }
}
BreadcrumbsComponent.defaultProps = {
  clickOnlyMode: false,
  items: null,
  selectedRoute: null,
  keys: {
    id: 'id',
    label: 'label',
    children: 'children'
  }
};
export default BreadcrumbsComponent;
