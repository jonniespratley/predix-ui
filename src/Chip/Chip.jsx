import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '../styled';
import Icon from '../Icon/Icon';

const Chip = styled.div`
  display         : inline-block;
  align-items     : center;
  
  padding-left    : 10px;
  padding-right   : 10px;
  background-color: var(--px-chip-background-color, white);
  border          : 1px solid var(--px-chip-border-color, gray);
  font-size: .8rem;
  line-height: 1.66667;
  font-weight: 400;

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

const ChipContent = styled.div`
  line-height: 18px;
  display    : flex;
  min-width  : 0;
  max-width  : var(--px-chip-max-width, 120px);
  color      : var(--px-chip-text-color, gray);

  height          : 20px;
  
`;

const ChipIcon = styled.div`
  height: 12px;
  width : 12px;
  color: inherit;
  padding-left: .33333rem;
  &:hover{
    color: var(--px-chip-icon-color--hover, blue);
  }
`;

/**
 * Chip component
 */
const Component = ({
  icon,
  selected,
  showIcon,
  children
}) => (
  <Chip selected={selected}>
    <ChipContent>
      {children}
      {showIcon && <ChipIcon><Icon icon={icon} size={16} /></ChipIcon>}
    </ChipContent>
  </Chip>

);

Component.defaultProps = {
  icon: null,
  selected: null,
  showIcon: false,
  children: null
};

Component.propTypes = {
  icon: PropTypes.string,
  selected: PropTypes.bool,
  showIcon: PropTypes.bool,
  children: PropTypes.node
};

export default Component;
