//import classnames from 'classnames';
//import PropTypes from 'prop-types';
import React from 'react';
//import stylesheet from './px-button.scss';


import styled, {css} from 'styled-components';


const Button = styled.button`
  outline: none;
  user-select: none;
  display: inline-block;
  overflow: visible;
  height: var(--px-btn-height, 2em);
  min-width: var(--px-btn-min-width, 4.66667em);
  margin: 0;
  border: 1px solid var(--px-btn-border-color, transparent);
  border-radius: 0 !important;
  padding: 0 calc(var(--px-btn-height, 2em) / 2);
  box-shadow: var(--px-btn-shadow--light, none);
  font: inherit;
  line-height: calc(var(--px-btn-height, 2em) - 2px);
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  white-space: nowrap;
  background-color: var(--px-btn-background, #d8e0e5);
  transition: background .4s, border-color .4s, color .4s;
  color: var(--px-btn-color, #2c404c);

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: var(--px-btn-color, #2c404c);
  }

  &:hover,
  &:focus{
    border-color: var(--px-btn-border-color--hover, transparent);
    box-shadow: var(--px-btn-shadow, none);
    background-color: var(--px-btn-background--hover, #a3b5bf);
  }
  &:active{
    border-color: var(--px-btn-border-color--pressed, transparent);
    box-shadow: none;
    background-color: var(--px-btn-background--pressed, #889aa5);
  }

  /* Sizes */
  ${props => props.active && css`
    outline: none;
  `}
  ${props => props.icon && css`
    height: var(--px-btn-height, 2em);
    width: var(--px-btn-height, 2em);
    min-width: var(--px-btn-height, 2em);
    padding-right: 0;
    padding-left: 0;
    border: var(--px-btn-icon-border, 0px solid) !important;
    background-color: var(--px-btn-icon-background, transparent) !important;
  `}
  ${props => props.small && css`
    height: 1.66667em;
    font-size: 0.8rem;
    line-height: calc(1.66667em - 2px);
  `}
  ${props => props.large && css`
    font-size: 1.33333rem;
  `}
  ${props => props.huge && css`
    font-size: 2rem;
  `}
  ${props => props.full && css`
    width: 100%;

    padding-right: 0;
    padding-left: 0;
  `}


  /* Colors - primary, tertiary bare */
  ${props => props.primary && css`
    color: var(--px-btn-primary-color, white);
    border-color: var(--px-btn-primary-border-color, transparent);
    box-shadow: var(--px-btn-shadow, none);
    background-color: var(--px-btn-primary-background, #364c59);


    &:link,
    &:visited,
    &:hover,
    &:active {
      color: var(--px-btn-primary-color, white);
    }
    &:hover,
    &:focus {
      border-color: transparent;
      background-color: var(--px-btn-primary-background--hover, #23343f);
    }
    &:active {
      border-color: transparent;
      background-color: var(--px-btn-primary-background--pressed, #121f26);
    }

  `}
  ${props => props.tertiary && css`
    border-color: var(--px-btn-tertiary-border-color, #889aa5);
    border: 1px solid;
    box-shadow: none;
    background-color: var(--px-btn-tertiary-background, white);
    &:link,
    &:visited,
    &:hover,
    &:active {
      border-color: var(--px-btn-tertiary-border-color, #889aa5);
      color: var(--px-btn-tertiary-color, #007acc);
    }
    &:hover,
    &:focus {
      color: var(--px-btn-tertiary-color--hover, #005c99);
      border-color: var(--px-btn-tertiary-border-color, #889aa5);
      box-shadow: none;
      background-color: var(--px-btn-tertiary-background--hover, #c5d1d8);
    }
    &:active {
      color: var(--px-btn-tertiary-color--pressed, #003d66);
      border-color: var(--px-btn-tertiary-border-color, #889aa5);
      box-shadow: none;
      background-color: var(--px-btn-tertiary-background--pressed, #96a8b2);
    }

  `}


  ${props => props.bare && css`
    height: var(--px-btn-height, 2em);
    border: 0 !important;
    border-radius: 0 !important;
    line-height: inherit;
    padding-left: 0;
    padding-right: 0;
    box-shadow: none;
    background: none;
    outline: none;
    &:link,
    &:visited,
    &:hover,
    &:active {
      box-shadow: none;
      background: none;
      outline: none;
      color: var(--px-btn-bare-color, #2c404c);
    }
    &:hover,
    &:focus {
      color: var(--px-btn-bare-color--hover, #007acc);
    }
    &:active {
      color: var(--px-btn-bare-color--pressed, #003d66);
    }
  `}

  ${props => props.disabled && css`
    color: var(--px-btn-disabled-color, rgba(0, 0, 0, 0.2));
    border: 1px solid;
    border-color: var(--px-btn-disabled-border-color, rgba(0, 0, 0, 0.2));
    box-shadow: none;
    background-color: var(--px-btn-disabled-background, transparent);
    pointer-events: none;
  `}




`;

export default Button;
