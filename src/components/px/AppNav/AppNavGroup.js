import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import AppNavItem from './AppNavItem';
import AppNavSubItem from './AppNavSubItem';

const AppNavGroup = styled.div`
  color: var(--px-base-text-color, #2c404c);
  line-height: 1.33333;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  position: relative;
  display: flex;
  height: auto;
  overflow: hidden;

  .px-app-nav-item {
    flex: 1 1 auto;
  }
`;
AppNavGroup.displayName = 'AppNavGroup';
AppNavGroup.defaultProps = {
  className: 'px-app-nav-group'
};

// app-nav-group__dropdown
const AppNavGroupDropdown = styled.div`
  display: block;
  height: calc(100vh - var(--px-app-nav-height, 4rem));
  z-index: 399;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  ${props => props.opened && css`
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
  onClick
}) => (
  <AppNavGroup>
    <AppNavItem
      dropdown
      onClick={() => onClick && onClick(item)}
      {...item}
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
            onClick={() => onClick && onClick(child, true)}
            key={child.label}
            item={child}
            {...child}
          />
        ))}
      </AppNavGroupDropdownContent>
    </AppNavGroupDropdown>
  </AppNavGroup>
);

AppNavGroupComponent.displayName = 'AppNavGroup';
AppNavGroupComponent.defaultProps = {
  selected: false,
  collapsed: false,
  overflowed: false,
  onClick: null,
  item: null,
  emptyIcon: false,
  opened: false,
  onlyShowIcon: false
};

AppNavGroupComponent.propTypes = {
  onClick: PropTypes.func,
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
