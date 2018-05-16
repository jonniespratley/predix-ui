import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
      onlyShowIcon: props.onlyShowIcon || props.vertical,
      /* selectedIndex: props.selectedIndex || null,

      collapseOpened: props.collapseOpened || false,
      visibleItems: props.visibleItems,
      collapseWithIcon: props.collapseWithIcon || false,
      opened: props.opened || false,
      collapseAll: props.collapseAll,
      collapseAt: props.collapseAt,
      propForSelect: props.propForSelect, */
      items: props.items || null,
      vertical: props.vertical || false,
      verticalOpened: props.verticalOpened || !props.vertical
    };
  }

  componentDidMount() {
    if (this.base && this.vertical) {
      this.base.addEventListener('mouseleave', this._handleMouseExit);
      this.base.addEventListener('mouseenter', this._handleMouseEnter);
    }

    // this.handleClick(this.props.selected, this._getItemFromValue(this.props.selected));
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.selected !== nextProps.selected) {
      this.setState(nextProps);
    }
    this.setState(nextProps);
  }

  componentWillMount() {
    if (this.props.items) {
      this.props.items.map((item, index) => {
        this._keys.push(this.props.propForSelect ? item[this.props.propForSelect] : index);
        this._items.push(item);
        return item;
      });
    }
  }

  componentWillUnmount() {
    if (this.base && this.vertical) {
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
      verticalOpened: bool,
      onlyShowIcon: !bool
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

  handleClick = (val, node, isChild) => {
    const child = node;
    const propForSelect = (this.props.propForSelect ? child[this.props.propForSelect] : val);
    const index = (this.props.propForSelect ? child[this.props.propForSelect] : this._getIndexForValue(propForSelect));/* eslint-disable-line */
    let item = this._getValueForIndex(index); /* eslint-disable-line */

    if (child && isChild) {
      child.selected = !child.selected;
      //  console.warn('Item has children, do not set active');
      // return;
    }

    if (node.children) {
      child.opened = !child.opened;
    }

    // this._clearSelected(this.state.items);
    const state = {
      selected: propForSelect,
      selectedIndex: this._getIndexForValue(propForSelect),
      selectedItem: child
    };

    this.setState(state);
    if (this.props.onChange) {
      this.props.onChange(state);
    }
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
    const propForSelect = (this.props.propForSelect ? child[this.props.propForSelect] : index);
    this._keys.push(propForSelect);
    this._items.push(child);
    const selected = (this.state.selected === this._getIndexForValue(propForSelect));
    if (!child.children) {
      return (
        <AppNavItem
          {...itemProps}
          key={child.id || child.label}
          item={child}
          {...child}
          selected={selected}
          onlyShowIcon={!this.state.verticalOpened}
          onClick={() => this.handleClick(propForSelect, child)}
        />
      );
    }

    if (this.state.vertical) {
      return (
        <AppNavSubGroup
          {...itemProps}
          key={child.id || child.label}
          item={child}
          onlyShowIcon={!this.state.verticalOpened}
          selected={selected}
          opened={child.opened}
          onClick={(item, isChild) => this.handleClick(propForSelect, item, isChild)}
        />
      );
    }
    return (
      <AppNavGroup
        {...itemProps}
        key={child.id || child.label}
        item={child}
        onlyShowIcon={this.state.onlyShowIcon}
        selected={selected}
        opened={child.opened}
        onClick={(item, isChild) => this.handleClick(propForSelect, item, isChild)}
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
  collapseAt: null,
  collapseWithIcon: false,
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
  opened: null
};
AppNavComponent.propTypes = {
  onChange: PropTypes.func,
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
