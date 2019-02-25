import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const SubItem = styled.div`
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

/* eslint-disable */
const AppNavSubItem = ({item, selected, collapsed, onClick}) => (
  <SubItem
    collapsed={collapsed}
    selected={selected}
    data-id={item.id}
    onClick={onClick}>
    <p className="app-nav-subitem__label">{item.label}</p>
  </SubItem>
)

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
