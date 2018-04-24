import React from 'react';
import BaseComponent from '../BaseComponent';
import classnames from 'classnames';
import Icon from '../IconSet/Icon';

import styled, { css } from 'styled-components';

const AppNavItem = styled.div`
  
  line-height: 1.33333;
  text-size-adjust: 100%;
  
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  position: relative;
  
  display: flex;
  
  align-items: center;
  height: var(--px-app-nav-height, 4rem);
  padding-left: var(--px-app-nav-item-padding, 1rem);
  padding-right: var(--px-app-nav-item-padding, 1rem);
  cursor: pointer;
  color: var(--px-app-nav-item-text-color, darkgray);
  background-color: var(--px-app-nav-item-background-color, lightgray);
  --iron-icon-stroke-color: var(--px-app-nav-item-text-color, darkgray);
  
  user-select: none;
  outline: none;

  &:hover {
    color: var(--px-app-nav-item-text-color--hover, lightgray);
    background-color: var(--px-app-nav-item-background-color--hover, darkgray);
    --iron-icon-stroke-color: var(--px-app-nav-item-text-color--hover, lightgray);
  }

  &:active {
    color: var(--px-app-nav-item-text-color--pressed, darkgray);
    background-color: var(--px-app-nav-item-background-color--pressed, lightgray);
    --iron-icon-stroke-color: var(--px-app-nav-item-text-color--hover, darkgray);
  }
  
  
  ${props => props.selected && css`
    color: var(--px-app-nav-item-text-color--selected, darkgray);
    background-color: var(--px-app-nav-item-background-color--selected, white);
    --iron-icon-stroke-color: var(--px-app-nav-item-text-color--selected, darkgray);
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display: block;
      width: 100%;
      height: var(--px-app-nav-item-stripe-size--selected, 0.13333rem);
      background-color: var(--px-app-nav-item-stripe-color--selected, blue);
    }

    ${props => props.collapsed && css`
      color: var(--px-app-nav-item-text-color--collapsed, darkgray);
      background-color: var(--px-app-nav-item-background-color--collapsed, white);
      &:before {
        top: 0;
        left: 0;
        bottom: 0;
        right: auto;
        height: 100%;
        width: var(--px-app-nav-item-stripe-size--selected, 0.13333rem);
      }
    `}
  `}
`;

const AppNavItemLabel = styled.div`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  flex: 1;
  ${props => props.onlyShowIcon && css`
    display: none;
  `}
  ${props => props.collapsed && css`
    flex: 1 1 auto;
    &:before {
        
    }
  `}
   ${props => props.overflowed && css`
      &:before {
        
      }
    `}
   ${props => props.empty && css`
      display: block;
      width: 6.66667rem;
      height: 0.66667rem;
      background-color: var(--px-app-nav-item-background-color--empty, lightgray);
      &:before {
        
      }
    `}
`;


const AppNavItemIcon = styled.div`
 ${props => props.empty && css`
    display: block;
    width: var(--px-app-nav-item-icon-size, 2rem);
    height: var(--px-app-nav-item-icon-size, 2rem);
    background-color: var(--px-app-nav-item-background-color--empty, lightgray);
    flex: none;
    &:before {
      
    }
  `}
 ${props => props.withLabel && css`
    margin-right: 0.33333rem;
  `}
 ${props => props.dropdownIcon && css`
    margin-left: 0.2rem;
  `}
`;


/**
 * AppNav-item component
 */
class AppNavItemComponent extends BaseComponent {
  constructor(props) {
    super(props, { displayName: 'AppNavItem' });
    this.state = {
      selected: this.props.selected
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(e) {
    if (!this.props.cancelSelect && this.props.onClick) {
      this.props.onClick(e);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.selected !== this.props.selected || nextProps.onlyShowIcon !== this.props.onlyShowIcon;
  }
  render() {
    const {
      label,
      icon,
      id,
      item,
      items,
      style,
      selected,
      collapsed,
      overflowed,
      emptyIcon,
      emptyLabel,
      empty,
      dropdown,
      onlyShowIcon,
      onClick,
      children
    } = this.props;

    const baseClasses = classnames(
      'px-app-nav-item',
      { selected }
    );
    const itemProps = {
      label, icon, id, items, selected, dropdown, collapsed
    };
    return (
      <AppNavItem onClick={this._handleClick} className={baseClasses} data-id={id} {...itemProps}>

        {/* icon */}
        {icon && <AppNavItemIcon withLabel><Icon size={32} icon={icon} /></AppNavItemIcon>}

        {/* emptyIcon */}
        {emptyIcon && <AppNavItemIcon emptyIcon withLabel />}

        {/* emptyLabel */}
        {emptyLabel && <AppNavItemLabel emptyLabel />}

        {/* label */}
        {label && <AppNavItemLabel empty={empty} onlyShowIcon={onlyShowIcon}>{label}</AppNavItemLabel>}

        {/* empty */}
        {empty && <AppNavItemIcon emtpy withLabel />}
        {empty && <AppNavItemLabel emtpy />}

        {/* dropdown */}
        {dropdown &&
          <AppNavItemIcon dropdownIcon>
            <Icon icon="px-utl:chevron" size={16} />
          </AppNavItemIcon>
        }


      </AppNavItem>
    );
  }
}

AppNavItemComponent.defaultProps = {
  /**
   * Set to `true` if the item is in a collapsed dropdown.
   */
  collapsed: false,

  /**
   * Cancels events that trigger selection.
   */
  cancelSelect: false,
  /**
   * Used to set the icon for the item.
   */
  icon: null,
  /**
   * A reference the object used to create this nav item.
   */
  item: null,
  /**
   * Used as the label text for the item.
   */
  label: null,
  /**
   * Set to `true` if the item is selected.
   */
  selected: false,
  /**
   * Shows a dropdown arrow icon to indicate this item can be tapped to
   * open a subgroup.
   */
  dropdown: false,
  empty: false,
  /**
   * Shows an empty state outline for icon.
   */
  emptyIcon: false,
  /**
   * Shows an empty state outline for the label.
   */
  emptyLabel: false,
  /**
   * Set to `true` if the item is inside a overflowed dropdown.
   */
  overflowed: false,
  /**
   * Set to `true` if this is a subitem.
   */
  subitem: false,
  onClick: null,
  fixedWidth: null,
  hideDropdownIcon: false

};

AppNavItemComponent.displayName = 'AppNavItemComponent';

export default AppNavItemComponent;
