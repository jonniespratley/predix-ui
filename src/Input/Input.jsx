import styled, { css } from '../styled';

const sizes = {
  auto: 'auto',
  full: '100%',
  tiny: '7.06667rem',
  small: '14.13333rem',
  regular: '21.2rem',
  large: '28.26667rem',
  huge: '35.33333rem'
};

const Input = styled.input`
  box-sizing: border-box;
  height: 2em;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--px-input-border-color--outer, #889aa5);
  padding: 0 0.33333rem;
  color: var(--px-input-text-color, #2c404c);
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

  ${props => props.size && css`
    max-width: ${sizes[props.size]}
  `}

   ${props => props.size && css`
     max-width: ${sizes[props.size]};
  `}
`;

Input.displayName = 'Input';

export default Input;
