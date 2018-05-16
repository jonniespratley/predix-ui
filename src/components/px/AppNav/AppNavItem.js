import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css } from 'styled-components';

import Icon from '../IconSet/Icon';

import AppNavItemIcon from './AppNavItemIcon';

const AppNavItem = styled.div`
  line-height: 1.33333;
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
    color: var(--px-app-nav-item-text-color--selected, darkgray) !important;
    background-color: var(--px-app-nav-item-background-color--selected, white) !important;
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
    ${props.collapsed && css`
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
      .app-nav-item__label {
        flex: 1 1 auto;
      }
    `}
  `}

`;
AppNavItem.displayName = 'AppNavItem';
AppNavItem.defaultProps = { className: 'px-app-nav-item' };


const AppNavItemLabel = styled.div`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;

  ${props => props.onlyShowIcon && css`
    display: none;
  `}
  ${props => props.collapsed && css`
    flex: 1 1 auto;
  `}
  ${props => props.empty && css`
    display: block;
    width: 6.66667rem;
    height: 0.66667rem;
    background-color: var(--px-app-nav-item-background-color--empty, lightgray);
  `}
`;
AppNavItemLabel.displayName = 'AppNavItemLabel';
AppNavItemLabel.defaultProps = { className: 'app-nav-item__label' };


/**
 * AppNav-item component
 */
class AppNavItemComponent extends React.Component {
  _handleClick = (e) => {
    if (!this.props.cancelSelect && this.props.onClick) {
      this.props.onClick(e);
    }
  }

  _shouldComponentUpdate(nextProps) {
    return nextProps.selected !== this.props.selected ||
      nextProps.onlyShowIcon !== this.props.onlyShowIcon;
  }
  render() {
    const {
      label,
      icon,
      id,
      item,
      items,
      selected,
      collapsed,
      emptyIcon,
      emptyLabel,
      withLabel,
      empty,
      dropdown,
      onlyShowIcon
    } = this.props;

    const baseClasses = classnames(
      'px-app-nav-item',
      { selected }
    );

    const itemProps = {
      label, icon, id, items, selected, dropdown, collapsed
    };

    return (
      <AppNavItem
        onClick={() => { this._handleClick(item); }}
        className={baseClasses}
        dropdown={(items)}
        data-id={id}
        data-label={label}
        {...itemProps}
      >
        {icon && !empty && !emptyIcon &&
          <AppNavItemIcon
            withLabel={label}
          >
            <Icon icon={icon} />
          </AppNavItemIcon>
        }

        {label && !emptyLabel && !emptyIcon && !empty &&
          <AppNavItemLabel
            withLabel={withLabel}
            onlyShowIcon={onlyShowIcon}
          >
            {label}
          </AppNavItemLabel>
        }

        {/* emptyIcon */}
        {emptyIcon && <AppNavItemIcon empty withLabel={label} />}

        {/* emptyLabel */}
        {emptyLabel && <AppNavItemLabel empty />}

        {empty && <AppNavItemIcon empty withLabel={label} />}
        {empty && <AppNavItemLabel empty />}

        {dropdown && !onlyShowIcon &&
          <AppNavItemIcon dropdownIcon>
            <Icon icon="px-utl:chevron" size={19} />
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
   * Shows a dropdown arrow to indicate item can be tapped to open a subgroup.
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
  onlyShowIcon: false,
  onClick: null,
  fixedWidth: null,
  id: null,
  items: null,
  hideDropdownIcon: false,
  withLabel: false
};

AppNavItemComponent.propTypes = {
  collapsed: PropTypes.bool,
  withLabel: PropTypes.bool,
  cancelSelect: PropTypes.bool,
  icon: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string
  }),
  items: PropTypes.arrayOf(PropTypes.any),
  id: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.bool,
  dropdown: PropTypes.bool,
  empty: PropTypes.bool,
  onlyShowIcon: PropTypes.bool,
  emptyIcon: PropTypes.bool,
  emptyLabel: PropTypes.bool,
  overflowed: PropTypes.bool,
  subitem: PropTypes.bool,
  onClick: PropTypes.func,
  fixedWidth: PropTypes.bool,
  hideDropdownIcon: PropTypes.bool
};

AppNavItemComponent.displayName = 'AppNavItemComponent';

export default AppNavItemComponent;
