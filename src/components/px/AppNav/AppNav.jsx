import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css } from 'styled-components';

import NavItem from './AppNavItem';
import AppNavGroup from './AppNavSubGroup';

const AppNav = styled.div`
  height: var(--px-app-nav-height, 4rem);
  background-color: var(--px-app-nav-background-color, whitesmoke);
  box-shadow: var(--px-app-nav-box-shadow, 0px 2px 4px var(--px-shadow-navigation, rgba(0, 0, 0, 0.2)));
  display: block;
  width: 100%;
  text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

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

    ${props.verticalOpened && css`
      overflow-y: auto;
      max-width: var(--px-app-nav-vertical-width--opened, 21.33333rem);
    `}
  `}
`;


const AppNavItems = styled.div`
  flex: 1 1 auto;
  display: flex;
  max-width: 100%;
  ${props => props.vertical && css`
    flex-direction: column;
    height: 100%;
  `}


`;


/**
 * AppNav component
 */
class AppNavComponent extends React.Component {
  constructor(props) {
    super(props, { displayName: 'AppNav' });
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
      vertical: props.vertical || false,
      verticalOpened: props.verticalOpened || !props.vertical

    };
    this._items = [];
    this._keys = [];

    this._handleRef = this._handleRef.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseExit = this._handleMouseExit.bind(this);
  }

  componentDidMount() {
    if (this.base && this.vertical) {
      this.base.addEventListener('mouseleave', this._handleMouseExit);
      this.base.addEventListener('mouseenter', this._handleMouseEnter);
    }

    // this.handleClick(this.props.selected, this._getItemFromValue(this.props.selected));
  }

  componentWillReceiveProps(nextProps) {
    const { selected } = this.state;
    if (selected !== nextProps.selected) {
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

  _handleRef(el) {
    this.base = el;
  }

  _handleMouseEnter() {
    const { vertical, verticalOpened } = this.state;
    if (!vertical) {
      return;
    }
    this._mouseIsOverNav = true;
    if (this._mouseIsOverNav && !verticalOpened) {
      this._setVerticalOpened(true);
    }
  }

  _handleMouseExit() {
    const { vertical, verticalOpened } = this.state;
    if (!vertical) {
      return;
    }
    this._mouseIsOverNav = false;
    if (!this._mouseIsOverNav && verticalOpened) {
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

  handleClick(val, child, isSubItem) {
    const { propForSelect, onChange } = this.props;
    const c = child;
    const propForChildSelect = (propForSelect ? child[propForSelect] : val);
    const index = (propForChildSelect ? child[propForChildSelect] : this._getIndexForValue(propForChildSelect));/* eslint-disable-line */
    let item = this._getValueForIndex(index); /* eslint-disable-line */

    if (c && c.children && !isSubItem) {
      c.selected = true;
      // console.warn('Item has children, do not set active');
      return;
    }
    if (isSubItem) {
      item = val;
    }

    const state = {
      selected: propForChildSelect,
      selectedIndex: this._getIndexForValue(propForChildSelect),
      selectedItem: child
    };

    this.setState(state);
    if (onChange) {
      onChange(state);
    }
  }

  _reset() {
    this._items = [];
    this._keys = [];
  }

  _getItemFromPropForSelect(value) {
    const { items, propForSelect } = this.props;
    const item = items.filter(val => val[propForSelect] === value);
    return item ? item[0] : null;
  }

  _renderItem(child, index) {
    const propForSelect = (this.props.propForSelect ? child[this.props.propForSelect] : index);
    this._keys.push(propForSelect);
    this._items.push(child);
    const selected = (this.state.selected === this._getIndexForValue(propForSelect));
    if (!child.children) {
      return (
        <NavItem
          key={index}
          item={child}
          id={child.id}
          icon={child.icon}
          label={child.label}
          selected={selected}
          onlyShowIcon={this.state.onlyShowIcon}
          onClick={this.handleClick.bind(this, propForSelect, child)} /* eslint-disable-line */
        />
      );
    }
    return (
      <AppNavGroup
        key={index}
        id={child.id}
        item={child}
        icon={child.icon}
        label={child.label}
        onlyShowIcon={this.state.onlyShowIcon}
        selected={selected}
        onClick={this.handleClick.bind(this, propForSelect, child)} /* eslint-disable-line */
      />
    );
  }

  _renderItems(items) {
    this._reset();
    return items.map(this._renderItem.bind(this));
  }

  render() {
    const {
      items,
      children,
      collapseAll,
      collapseAt,
      opened,
      selectedIndex,
      collapseWithIcon,
      collapseOpened
    } = this.props;

    const {
      vertical,
      verticalOpened
    } = this.state;

    const baseClasses = classnames(
      'px-app-nav',
      { vertical },
      { 'vertical-opened': vertical && verticalOpened }
    );

    return (
      <AppNav
        className={baseClasses}
        ref={this._handleRef}
        vertical={vertical}
        collapseAll={collapseAll}
        collapseWithIcon={collapseWithIcon}
        selectedIndex={selectedIndex}
        collapseAt={collapseAt}
        collapseOpened={collapseOpened}
        verticalOpened={verticalOpened}
      >
        <AppNavItems vertical={vertical} opened={opened}>
          {this._renderItems(items, selectedIndex)}
        </AppNavItems>
        {/* STATE: Horizontal or menu nav, any visible items */}
        {/* STATE: Items overflowed or collapsed */}
        {/* Actions */}
        {children}
      </AppNav>
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
  selected: 0,
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
  selectedIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
