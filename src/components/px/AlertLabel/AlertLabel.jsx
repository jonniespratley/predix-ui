import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const AlertLabel = styled.div`
  display         : inline-block;
  position        : relative;
  padding         : 5px;
  text-transform  : uppercase;
  text-align      : center;
  font-size       : 0.8rem;
  line-height     : 0.8rem;
  background-color: var(--px-alert-label-background-color--unknown, gray);
  color           : var(--px-alert-label-text-color--unknown, white);
  border          : 1px solid var(--px-alert-label-border-color, transparent);
  
  ${props => props.pill && css`
    border-radius          : var(--px-alert-label-border-radius, 5px);
  `}

  ${props => props.type === 'info' && css`
    background-color: var(--px-alert-label-background-color--information, blue);
    color           : var(--px-alert-label-text-color--information, white);
  `}
  ${props => props.type === 'error' && css`
    background-color: var(--px-alert-label-background-color--error, yellow);
    color           : var(--px-alert-label-text-color--error, black);
  `}
  ${props => props.type === 'unknown' && css`
    background-color: var(--px-alert-label-background-color--unknown, gray);
    color           : var(--px-alert-label-text-color--unknown, white);
  `}
  ${props => props.type === 'important' && css`
    background-color: var(--px-alert-label-background-color--important, red);
    color           : var(--px-alert-label-text-color--important, white);
  `}
  ${props => props.type === 'warning' && css`
    background-color: var(--px-alert-label-background-color--warning, orange);
    color           : var(--px-alert-label-text-color--warning, white);
  `}
  ${props => props.type === 'healthy' && css`
    background-color: var(--px-alert-label-background-color--healthy, green);
    color           : var(--px-alert-label-text-color--healthy, white);
  `}
  ${props => props.type === 'success' && css`
    background-color: var(--px-alert-label-background-color--healthy, green);
    color           : var(--px-alert-label-text-color--healthy, white);
  `}
`;

const Component = ({
  label, type, children, pill
}) => (
  <AlertLabel type={type} pill={pill}>
    <span className="label__text">{label || children}</span>
  </AlertLabel>
);

Component.defaultProps = {
  label: null,
  pill: false,
  children: null,
  type: null
};

Component.propTypes = {
  label: PropTypes.string,
  pill: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string
};

Component.displayName = 'AlertLabel';

export default Component;
