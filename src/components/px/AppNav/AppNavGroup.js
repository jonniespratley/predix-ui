import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import AppNavItem from './AppNavItem';
import AppNavSubItem from './AppNavSubItem';

const AppNavGroup = styled.div`
  color: var(--px-base-text-color, #2c404c);
  display: flex;
  line-height: 1.33333;
  height: auto;

  box-sizing: border-box;
  position: relative;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  .px-app-nav-item {
    flex: 1 1 auto;
  }
  ${props => props.opened && css`
    display: block;
  `}
`;
AppNavGroup.displayName = 'AppNavGroup';
AppNavGroup.defaultProps = {
  className: 'px-app-nav-group'
};

// app-nav-group__dropdown
const AppNavGroupDropdown = styled.div`
  height: calc(100vh - var(--px-app-nav-height, 4rem));
  z-index: 399;
  height: 0;
  overflow: hidden;
  ${props => props.opened && css`
    display: block;
    height: auto;
    overflow: auto;
  `}
`;
AppNavGroupDropdown.displayName = 'AppNavGroupDropdown';
AppNavGroupDropdown.defaultProps = {
  className: 'app-nav-group__dropdown'
};

// app-nav-group__dropdown__content
const AppNavGroupDropdownContent = styled.div`
  background-color: var(--px-app-nav-subitem-background-color, white);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  max-width: inherit;
  margin: 1px;
  position: relative;
  top: -1px;
`;
AppNavGroupDropdownContent.displayName = 'AppNavGroupDropdownContent';
AppNavGroupDropdownContent.defaultProps = {
  className: 'app-nav-group__dropdown__content'
};

const AppNavGroupComponent = ({
  item,
  opened,
  selected,
  overflowed,
  collapsed,
  onlyShowIcon,
  emptyIcon,
  onToggle,
  onSubItemClick
}) => (
  <AppNavGroup opened={opened}>
    <AppNavItem
      dropdown
      onClick={() => onToggle && onToggle(item)}
      item={item}
      selected={selected}
      overflowed={overflowed}
      collapsed={collapsed}
      onlyShowIcon={onlyShowIcon}
      emptyIcon={emptyIcon}
    />
    <AppNavGroupDropdown opened={opened}>
      <AppNavGroupDropdownContent>
        {item.children && item.children.map(child => (
          <AppNavSubItem
            selected={child.selected}
            onClick={() => onSubItemClick && onSubItemClick(child, true)}
            key={child.label}
            item={child}
            {...child}
          />
        ))}
      </AppNavGroupDropdownContent>
    </AppNavGroupDropdown>
  </AppNavGroup>
);

AppNavGroupComponent.displayName = 'AppNavGroupComponent';
AppNavGroupComponent.defaultProps = {
  selected: null,
  collapsed: null,
  overflowed: null,
  onToggle: null,
  onSubItemClick: null,
  item: null,
  emptyIcon: null,
  opened: false,
  onlyShowIcon: null
};

AppNavGroupComponent.propTypes = {
  onToggle: PropTypes.func,
  onSubItemClick: PropTypes.func,
  selected: PropTypes.bool,
  collapsed: PropTypes.bool,
  overflowed: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string
  }),
  emptyIcon: PropTypes.bool,
  opened: PropTypes.bool,
  onlyShowIcon: PropTypes.bool
};

export default AppNavGroupComponent;
