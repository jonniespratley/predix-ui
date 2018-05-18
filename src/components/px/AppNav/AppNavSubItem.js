import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SubItemLabel = styled.p`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubItem = styled.div`
  user-select: none;
  line-height: 1.33333;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  height: var(--px-app-nav-subitem-height, 2rem);
  color: var(--px-app-nav-subitem-text-color, darkgray);
  background-color: var(--px-app-nav-subitem-background-color, white);

  &:hover {
    color: var(--px-app-nav-subitem-text-color--hover, darkgray);
    background-color: var(--px-app-nav-subitem-background-color--hover, lightgray);
  }

  ${props => props.selected && css`
    color: var(--px-app-nav-subitem-text-color--selected, white);
    background-color: var(--px-app-nav-subitem-background-color--selected, blue);
    &:hover {
      color: var(--px-app-nav-subitem-text-color--selected, white);
      background-color: var(--px-app-nav-subitem-background-color--selected, blue);
    }
  `}

  ${props => props.collapsed && css`
    color: var(--px-app-nav-subitem-text-color--collapsed, darkgray);
    background-color: var(--px-app-nav-subitem-background-color--collapsed, darkgray);
    padding-left: 3.66667rem;
    &:hover {
      background-color: var(--px-app-nav-subitem-background-color--collapsed-hover, darkgray);
    }
  `}
`;


const AppNavSubItem = ({
  item, collapsed, onClick
}) => (
  <SubItem
    collapsed={collapsed}
    selected={item.selected}
    disabled={item.disabled}
    data-id={item.id}
    onClick={onClick}
  >
    <SubItemLabel>{item.label}</SubItemLabel>
  </SubItem>
);

AppNavSubItem.defaultProps = {
  item: null,
  collapsed: null,
  onClick: null
};

AppNavSubItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.string
  }),
  collapsed: PropTypes.bool,
  onClick: PropTypes.func
};

export default AppNavSubItem;
