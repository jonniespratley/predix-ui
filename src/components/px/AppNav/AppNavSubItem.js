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
  line-height: 1.33333;
  text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  /* Subitem State: Default */
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  height: var(--px-app-nav-subitem-height, 2rem);
  color: var(--px-app-nav-subitem-text-color, darkgray);
  background-color: var(--px-app-nav-subitem-background-color, white);

  /* Subitem State: Hover */
  &:hover {
    color: var(--px-app-nav-subitem-text-color--hover, darkgray);
    background-color: var(--px-app-nav-subitem-background-color--hover, lightgray);
  }

  /* Subitem State: Selected */
  ${props => props.selected && css`
    color: var(--px-app-nav-subitem-text-color--selected, white);
    background-color: var(--px-app-nav-subitem-background-color--selected, blue);
    &:hover {
      color: var(--px-app-nav-subitem-text-color--selected, white);
      background-color: var(--px-app-nav-subitem-background-color--selected, blue);
    }
  `}

  /* Subitem State: Collapsed */
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
  item, selected, collapsed, onClick
}) => (
  <SubItem
    collapsed={collapsed}
    selected={selected}
    data-id={item.id}
    onClick={onClick}
  >
    <SubItemLabel className="app-nav-subitem__label">{item.label}</SubItemLabel>
  </SubItem>
);

AppNavSubItem.defaultProps = {
  item: null,
  selected: null,
  collapsed: null,
  onClick: null
};

AppNavSubItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string
  }),
  selected: PropTypes.bool,
  collapsed: PropTypes.bool,
  onClick: PropTypes.func
};

export default AppNavSubItem;
