import React from 'react';
import classnames from 'classnames';

import styled, { css } from 'styled-components';

const ContextBrowser = styled.div`
  display         : inline-block;
  align-items     : center;
  height          : 20px;
  padding-left    : 10px;
  padding-right   : 10px;
  background-color: var(--px-chip-background-color, white);
  border          : 1px solid var(--px-chip-border-color, gray);

  &:hover {
    cursor          : pointer;
    background-color: var(--px-chip-background-color--hover, rgba(gray, 0.2));
    border          : 1px solid var(--px-chip-border-color--hover, gray);
  }
  
  ${props => props.selected && css`
  background-color: var(--px-chip-background-color--selected, white);
    border          : 1px solid var(--px-chip-border-color--selected, blue);
  `}
    
`;

const ContextBrowserContent = styled.div`
 line-height: 18px;
  display    : inline-block;
  min-width  : 0;
  max-width  : var(--px-chip-max-width, 120px);
  color      : var(--px-chip-text-color, gray);
`;

const ContextBrowserIcon = styled.div`
  height: 12px;
  width : 12px;
  &:hover{
    color: var(--px-chip-icon-color--hover, blue);
  }
`;

/**
 * Chip component
 */
export default ({
  style,
  label = 'Chip',
  icon,
  selected,
  showIcon,
  children
}) => (
  <ContextBrowser selected={selected}>
    <ContextBrowserContent>{children}</ContextBrowserContent>
  </ContextBrowser>

);

