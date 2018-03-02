import React from 'react';
import styled, { css } from 'styled-components';


import { textInputs } from 'polished';


const BaseInput = styled.input`
  box-sizing: border-box;
  height: 2em;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--px-input-border-color--outer, #889aa5);
  padding: 0 0.33333rem;
  color: var(--px-input-text-color, #2c404c);
`;

const Input = BaseInput.extend`
  font: inherit;
  outline: 0;
  background-color: var(--px-input-background-color, transparent);
  transition: background .4s, border-color .4s, color .4s;

    
  &:focus::placeholder,
  &:disabled::placeholder{
    color: var(--px-input-text-color--placeholder--focused, rgba(0, 0, 0, 0.3));
  }
  
  &::placeholder{
    color: var(--px-input-text-color--placeholder, rgba(0, 0, 0, 0.3));
  }

  &:disabled::placeholder{
    color: var(--px-input-text-color--disabled, rgba(0, 0, 0, 0.2));
  }
  
  &::-ms-clear {
    display: none;
  }
  
  &:readonly,
  &:disabled {
    border-color: var(--px-input-border-color--disabled, rgba(0, 0, 0, 0.2));
    color: var(--px-input-text-color--disabled, rgba(0, 0, 0, 0.2));
    cursor: not-allowed;
    background-color: var(--px-input-background-color--disabled, transparent);
  }
  
  &:hover{
    background-color: var(--px-input-background-color--hover, #d8e0e5);
  }
  
  &:focus{
    border-color: var(--px-input-border-color--outer--focused, #007acc);
    background-color: var(--px-input-background-color--focused, #eefbff);
    color: var(--px-input-text-color--focused, inherit);
  }
  
  &::placeholder {
    padding-top: 1px;
  }


  &[type=checkbox] + label {
    padding-left: 5px;
  }
  &[type=radio] + label {
    padding-left: 3px;
  }
  
  &[type=checkbox],
  &[type=radio]{
    margin: 0;
    padding: 0;
    font-size: 1.05em;
    cursor: pointer;
    outline: none;
    width: auto;
    height: auto;
    &[disabled]{
      cursor: not-allowed;
    }
  }



  ${props => props.auto && css`
    max-width: auto;
  `}
  ${props => props.tiny && css`
    max-width: 7.06667rem;
  `}
  ${props => props.small && css`
     max-width: 14.13333rem;
  `}
  ${props => props.regular && css`
    max-width: 21.2rem;
  `}
  ${props => props.large && css`
    max-width: 28.26667rem;
  `}
  ${props => props.huge && css`
     max-width: 35.33333rem;
  `}
  
`;

Input.defaultProps = {
  /** The label */
  label: null,
  className: null,
  /** The input value, required for a controlled component. */
  value: undefined,
  /** Type of the input element. It should be a valid HTML5 input type. */
  type: 'text',
  /** If true, the input will be disabled. */
  disabled: null,
  /** The short hint displayed in the input before the user enters a value. */
  placeholder: null,
  /** Use that property to pass a ref callback to the native input component. */
  inputRef: null,
  /** Properties applied to the input element. */
  inputProps: null
};

export default Input;
