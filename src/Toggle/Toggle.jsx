import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ToggleLabel = styled.label`
  position: relative;
  display: block;
  width: 2.66667rem;
  min-width: 2.66667rem;
  height: calc(1rem - 1px);
  margin-bottom: 0;
  margin-left: 0;
  padding: 1px;
  cursor: pointer;
  outline: 0;
  user-select: none;
  background-color: var(--px-toggle__background-border--unchecked, #889aa5);
  text-indent: -9999rem;
  pointer-events: auto;
  border-radius: 2rem;
  transition: background 0.4s;
  &:before {
    border-radius: 2rem;
    transition: background 0.4s;
  }
  &:after {
    position: absolute;
    display: block;
    content: "";
  }
  &:before {
    position: absolute;
    display: block;
    content: "";
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    background-color: var(--px-toggle__background--unchecked, #d8e0e5);
  }
  &:hover {
    &:before {
      background-color: var(--px-toggle__background--unchecked--hover, #b6c3cc);
    }
    background-color: var(--px-toggle__background-border--unchecked--hover, #677e8c);
  }
  &:active {
    &:before {
      background-color: var(--px-toggle__background--unchecked--pressed, #748b99);
    }
    background-color: var(--px-toggle__background-border--unchecked-pressed, #4f6472);
  }
  &:after {
    top: -3px;
    left: -1px;
    height: 1.33333rem;
    width: 1.33333rem;
    border: 1px solid var(--px-toggle__switch-border, #889aa5);
    border-radius: 50%;
    box-shadow: 0 1px 2px var(--px-toggle__switch-shadow-color, rgba(0, 0, 0, 0.15));
    background-color: var(--px-toggle__switch, #fff);
    transition: margin 0.4s, background 0.4s, border-color 0.4s;
  }
  &:hover:after {
    background-color: var(--px-toggle__switch--hover, #c5d1d8);
    border: 1px solid var(--px-toggle__switch-border--hover, #889aa5);
  }
  &:active:after {
    background-color: var(--px-toggle__switch--pressed, #96a8b2);
    border: 1px solid var(--px-toggle__switch-border--pressed, #889aa5);
  }
  ${props => props.disabled && css`
    cursor: not-allowed;
    background-color: var(--px-toggle__background-border--unchecked--disabled, rgba(0, 0, 0, 0.2));
    pointer-events: none;
  `}
  ${props => props.size === 'huge' && css`
    width: 5.33333rem;
    min-width: 5.33333rem;
    height: 2rem;
    &:after {
      top: -.33333rem;
      left: -.06667rem;
      height: calc(2.66667rem);
      width: calc(2.66667rem);
    }
  `}
  ${props => props.size === 'large' && css`
    width: 4rem;
    min-width: 4rem;
    height: 1.33333rem;
    &:after {
      top: -.33333rem;
      left: -.06667rem;
      height: 2rem;
      width: 2rem;
    }
  `}
  ${props => props.size === 'small' && css`
    width: 2rem;
    min-width: 2rem;
    height: calc(.66667rem + 1px);
    &:after {
      top: -2px;
      left: 0;
      height: 1rem;
      width: 1rem;
    }
  `}
}`;
const ToggleInputStyle = styled.input`
  position: absolute !important;
  overflow: hidden !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  clip: rect(0 0 0 0) !important;

  &:disabled,
  &:disabled + label {

    background-color: var(--px-toggle__background-border--unchecked--disabled, rgba(0, 0, 0, 0.2));
    pointer-events: none;

    &:after{
      background-color: var(--px-toggle__switch--disabled, #fff);
    }
    &:before{
        background-color: var(--px-toggle__background--unchecked--disabled, #fff);
        box-shadow: none;
    }
  }
  &:checked:disabled + label{
    background-color: var(--px-toggle__background--checked--disabled, rgba(0, 0, 0, 0.2));
    &:after{
      box-shadow: none;
      background-color: var(--px-toggle__switch--disabled, white);
      border-width: 1px;
      border-style: solid;
      border-color: var(--px-toggle__switch-border--disabled, rgba(0, 0, 0, 0.2));
    }
    &:before{
        background-color: transparent;
    }
  }
  &:checked + label {
    background-color: var(--px-toggle__background--checked, #007acc);
    &:before {
        background-color: var(--px-toggle__background--checked, #007acc);
    }
    &:hover {
        background-color: var(--px-toggle__background--checked--hover, #005c99);
        &:before {
            background-color: var(--px-toggle__background--checked--hover, #005c99);
        }
    }
    &:active {
        background-color: var(--px-toggle__background--checked--pressed, #003d66);
        &:before {
            background-color: var(--px-toggle__background--checked--pressed, #003d66);
        }
    }
    &:after {
        margin-left: 1.467rem;
    }
    ${props => props.size === 'huge' && css`
      width: 5.33333rem;
      min-width: 5.33333rem;
      height: 2rem;
      &:after {
        margin-left: 2.8rem;
        top: -.33333rem;
        left: -.06667rem;
        height: calc(2.66667rem);
        width: calc(2.66667rem);
      }
    `}
    ${props => props.size === 'large' && css`
      width: 4rem;
      min-width: 4rem;
      height: 1.33333rem;
      &:after {
        margin-left: 2.133rem;
        top: -.33333rem;
        left: -.06667rem;
        height: 2rem;
        width: 2rem;
      }
    `}
    ${props => props.size === 'small' && css`
    `}
  }
`;

const ToggleInput = ({
  checked,
  defaultChecked,
  name,
  value,
  id,
  disabled,
  className,
  onClick,
  onChange,
  size
}) => (
  <div className={className}>
    <ToggleInputStyle
      id={id}
      size={size}
      name={name}
      value={value}
      type="checkbox"
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={onChange}
      disabled={disabled}
    />
    <ToggleLabel
      disabled={disabled}
      size={size}
      onClick={onClick}
      htmlFor={id}
    />
  </div>
);

ToggleInput.displayName = 'ToggleInput';

ToggleInput.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  value: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string
};

ToggleInput.defaultProps = {
  disabled: null,
  checked: null,
  defaultChecked: null,
  size: null,
  className: 'toggle-wrapper',
  value: null,
  onClick: null,
  onChange: null,
  name: null
};

export default ToggleInput;
