import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import AssetGraphBehavior from '../AppHelpers/AssetGraphBehavior';
import AppNavItem from './AppNavItem';
import AppNavGroup from './AppNavGroup';
import AppNavSubGroup from './px-app-nav-sub-group';

// px-app-nav
const AppNav = styled.div`
  height: var(--px-app-nav-height, 4rem);
  background-color: var(--px-app-nav-background-color, whitesmoke);
  box-shadow: var(--px-app-nav-box-shadow, 0px 2px 4px var(--px-shadow-navigation, rgba(0, 0, 0, 0.2)));
  display: block;
  width: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  .app-nav {
    display: flex;
  }

  ${props => props.vertical && css`
    overflow-x: hidden;
    overflow-y: hidden;
    position: var(--px-app-nav-vertical-position, absolute);
    height: var(--px-app-nav-vertical-height, 100%);
    left: 0;
    top: 0;
    min-width: var(--px-app-nav-vertical-width, 4rem);
    max-width: var(--px-app-nav-vertical-width, 4rem);
    transition: var(--px-app-nav-vertical-transition, max-width 250ms ease);

    .app-nav {
      display: block;
    }

    .app-nav__items {
      flex-direction: column;
      height: 100%;
    }

    .app-nav-item__label {
      display: none;

    }

    ${props.verticalOpened && css`
      overflow-y: auto;
      max-width: var(--px-app-nav-vertical-width--opened, 21.33333rem);

      .app-nav-item__label {
        flex: 1 1 auto;
        display: flex;
      }
    `}
  `}

`;
AppNav.defaultProps = { className: 'app-nav' };

// app-nav__items
const AppNavItems = styled.section`
  height: var(--px-app-nav-height, 4rem);
  flex: 1 1 auto;
  display: flex;
  max-width: 100%;
`;
AppNavItems.defaultProps = { className: 'app-nav__items' };


/**
 * AppNav component
 */
class AppNavComponent extends React.Component {
  _keys = [];
  _items = [];
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || 0,
      /*
      onlyShowIcon: props.onlyShowIcon || props.vertical,
      selectedIndex: props.selectedIndex || null,

      collapseOpened: props.collapseOpened || false,
      visibleItems: props.visibleItems,
      collapseWithIcon: props.collapseWithIcon || false,
      opened: props.opened || false,
      collapseAll: props.collapseAll,
      collapseAt: props.collapseAt,
      propForSelect: props.propForSelect,
      selectedRoute: props.selectedRoute,
      */

      items: props.items,
      vertical: props.vertical,
      verticalOpened: props.verticalOpened
    };
    this._assetGraph = new AssetGraphBehavior();
    this._assetGraph.items = props.items;
    this._assetGraph.on('px-app-asset-selected', this._handleAssetSelected);
    this._assetGraph.on('px-app-asset-activated', this._handleAssetActivated);
  }


  componentDidMount() {
    if (this.base && this.state.vertical) {
      this.base.addEventListener('mouseleave', this._handleMouseExit);
      this.base.addEventListener('mouseenter', this._handleMouseEnter);
    }

    // this.handleClick(this.props.selected, this._getItemFromValue(this.props.selected));
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.selected !== nextProps.selected) {
      this.setState(nextProps);
    }

    if (nextProps.items) {
      this._assetGraph.items = nextProps.items;
    }
    this.setState(nextProps);
  }

  _componentWillMount() {
    if (this.props.items) {
      this.props.items.map((item, index) => {
        this._keys.push(this.props.propForSelect ? item[this.props.propForSelect] : index);
        this._items.push(item);
        return item;
      });
    }
  }

  componentWillUnmount() {
    if (this.base && this.state.vertical) {
      this.base.removeEventListener('mouseleave', this._handleMouseExit);
      this.base.removeEventListener('mouseenter', this._handleMouseEnter);
    }
  }

  _handleRef = (el) => {
    this.root = el;
  }

  _handleMouseEnter = () => {
    if (!this.state.vertical) {
      return;
    }
    this._mouseIsOverNav = true;
    if (this._mouseIsOverNav && !this.state.verticalOpened) {
      this._setVerticalOpened(true);
    }
  }

  _handleMouseExit = () => {
    if (!this.state.vertical) {
      return;
    }
    this._mouseIsOverNav = false;
    if (!this._mouseIsOverNav && this.state.verticalOpened) {
      this._setVerticalOpened(false);
    }
  }

  _setVerticalOpened(bool) {
    this.setState({
      verticalOpened: bool
    });
  }

  _getIndexForValue(val) {
    return this._keys.indexOf(val);
  }

  _getValueForIndex(index) {
    return this._items[index];
  }

  _getItemFromValue(index) {
    return this._getValueForIndex(this._getIndexForValue(index));
  }

  _clearSelected = (nodes) => {
    const clear = n => n.map((obj) => {
      const item = obj;
      item.selected = false;
      item.opened = false;
      if (item.children) {
        item.children = clear(item.children);
      }
      return item;
    });
    const items = clear(nodes);
    this.setState({ items });
  }

  _handleAssetSelected = (e) => {
    this.clearOpened();
    console.log('px-app-asset-selected', e);


    const { items } = this._assetGraph;
    const state = Object.assign({}, {
      items,
      selectedItem: this._assetGraph.selected,
      path: e.path,
      selectedRoute: e.route
    }, e);

    if (this.props.onChange) {
      this.props.onChange(state);
    }
    this.setState(state);
  }

  clearOpened = () => {
    const items = this._assetGraph.items.map((obj) => {
      const o = obj;
      o.opened = false;
      return o;
    });
    this.setState({ items });
  }

  _handleAssetActivated = (e) => {
    this.clearOpened();
    console.log('px-app-asset-activated', e);
    const { item } = e;
    item.opened = !item.opened;

    const state = Object.assign({}, {
      selectedItem: item,
      path: e.path,
      selectedRoute: e.route
    }, e);
    this.setState(state);
  }

  handleToggle = (item) => {
    this._assetGraph.activate(item, 'DOM_EVENT');
  }

  handleClick = (val, node, isChild) => {
    if (!isChild) {
      this._assetGraph.activate(null);
    }

    this._assetGraph.select(node, 'DOM_EVENT');
  }

  _reset() {
    this._items = [];
    this._keys = [];
  }

  _getItemFromPropForSelect = (value) => {
    const item = this.props.items.filter(val => val[this.props.propForSelect] === value);
    return item ? item[0] : null;
  }

  /**
   * Handle rendering each item.
   * @param {Object} child A menu item
   * @param {Number} index The index of the selected item
   * @param {Object} itemProps Props to be passed to the AppNavItem
   */
  _renderItem = (child, index, itemProps = {}) => {
    console.log('_renderItem', child);
    const propForSelect = (this.props.propForSelect ? child[this.props.propForSelect] : index);
    const selected = (this.state.item === child);

    if (child.children) {
      return (
        <AppNavSubGroup
          {...itemProps}
          key={child.id || child.label}
          item={child}
          // onlyShowIcon={!this.state.verticalOpened}
         // collapsed
          selected={selected}
          opened={child.opened}
          onToggle={item => this.handleToggle(item)}
          onClick={(item, isChild) => this.handleClick(propForSelect, item, isChild)}
        />
      );
    }

    if (!child.children) {
      return (
        <AppNavItem
          {...itemProps}
          key={child.id || child.label}
          item={child}
          selected={selected}
          onClick={() => this.handleClick(propForSelect, child)}
        />
      );
    }

    /* If node has children and */
    return (
      <AppNavGroup
        {...itemProps}
        key={child.id || child.label}
        item={child}
        selected={selected}
        opened={child.opened}
        onSubItemClick={(item, isChild) => this.handleClick(propForSelect, item, isChild)}
        onToggle={item => this._assetGraph.activate(item, 'DOM_EVENT')}
      />
    );
  }

  _renderItems = (items, selected, props) => {
    this._reset();
    return items.map((item, index) => this._renderItem(item, index, props));
  }

  render() {
    const {
      children,
      opened,
      selectedIndex
    } = this.props;

    const {
      items,
      vertical,
      verticalOpened
    } = this.state;

    return (
      <div className="px-app-nav" ref={e => this._handleRef(e)}>
        <AppNav
          vertical={vertical}
          verticalOpened={verticalOpened}
          opened={opened}
          {...this.props}
        >

          {/* STATE: Horizontal or menu nav, any visible items */}
          <AppNavItems vertical={vertical}>
            {this._renderItems(items, selectedIndex)}
          </AppNavItems>

          {/* STATE:
            Vertical Items overflowed/collapsed nav-group -> nav-sub-group -> nav-sub-item */
          }

          {/* Actions */}
          {children}
        </AppNav>
      </div>
    );
  }
}

AppNavComponent.defaultProps = {
  vertical: false,
  collapseAll: false,
  collapseAt: 320,
  collapseWithIcon: null,
  onlyShowIcon: false,
  collapseOpened: false,
  verticalOpened: false,
  selected: null,
  selectedItem: null,
  selectedIndex: null,
  visibleItems: null,
  items: null,
  propForSelect: null,
  children: null,
  onChange: null,
  opened: false,
  selectedRoute: null
};
AppNavComponent.propTypes = {
  onChange: PropTypes.func,
  selectedRoute: PropTypes.arrayOf(PropTypes.string),
  vertical: PropTypes.bool,
  collapseAll: PropTypes.bool,
  collapseAt: PropTypes.number,
  collapseWithIcon: PropTypes.bool,
  onlyShowIcon: PropTypes.bool,
  collapseOpened: PropTypes.bool,
  verticalOpened: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectedIndex: PropTypes.number,
  selectedItem: PropTypes.object, /* eslint-disable-line */
  visibleItems: PropTypes.any, /* eslint-disable-line */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string
  })),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.element]),
  propForSelect: PropTypes.string,
  opened: PropTypes.bool
};

export default AppNavComponent;
