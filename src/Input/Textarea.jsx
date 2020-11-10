import styled from '../styled';

const Textarea = styled.textarea`
  width: 100%;
  color: var(--px-input-text-color, #2c404c);
  overflow: auto;
  min-height: calc(120px + 0.66667rem);
  padding: 0.33333rem 0.66667rem;
  resize: vertical;
  border: 1px solid var(--px-input-border-color--outer, #889aa5);
  border-radius: 0;
  font: inherit;
  outline: 0;
  background-color: var(--px-input-background-color, transparent);
  transition: background .4s, border-color .4s, color .4s;
  box-sizing: border-box;
  &:focus{
      color: var(--px-input-text-color--focused, inherit);
      background-color: var(--px-input-textarea-background--focused, #eefbff);
      border: 1px solid var(--px-input-border-color--outer--focused, #007acc);
  }
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

  &[readonly],
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
`;

Textarea.displayName = 'Textarea';

export default Textarea;
