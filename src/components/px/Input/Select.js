import React from 'react';
import styled, {css} from 'styled-components';
const Select = styled.select`
  font: inherit;
  outline: 0;
  transition: background .4s, border-color .4s, color .4s;
  background-color: var(--px-input-background-color, transparent);
  background-color: var(--px-select-background-color, #d8e0e5);
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20viewBox%3D%220%200%20658%201024%22%3E%3Cpath%20fill%3D%22%232c404c%22%20d%3D%22M614.286%20420.571q0%207.429-5.714%2013.143l-266.286%20266.286q-5.714%205.714-13.143%205.714t-13.143-5.714l-266.286-266.286q-5.714-5.714-5.714-13.143t5.714-13.143l28.571-28.571q5.714-5.714%2013.143-5.714t13.143%205.714l224.571%20224.571%20224.571-224.571q5.714-5.714%2013.143-5.714t13.143%205.714l28.571%2028.571q5.714%205.714%205.714%2013.143z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 0.66667rem) 37.5%;
  border: var(--px-select-border-color, transparent);
  box-shadow: none;
  border-radius: 0;
  color: var(--px-select-text-color, #2c404c);
  width: auto;
  padding: 0 3em 0 1em;
  min-height: calc(2em);
  cursor: pointer;
  -webkit-appearance: none;
  
  &:hover {
    background-color: var(--px-select-background-color--hover, #a3b5bf);
  }

  &:active {
    background-color: var(--px-select-background-color--active, #889aa5);
  }

  &:disabled,
  &[readonly] {
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20viewBox%3D%220%200%20658%201024%22%3E%3Cpath%20fill%3D%22%23c5d1d8%22%20d%3D%22M614.286%20420.571q0%207.429-5.714%2013.143l-266.286%20266.286q-5.714%205.714-13.143%205.714t-13.143-5.714l-266.286-266.286q-5.714-5.714-5.714-13.143t5.714-13.143l28.571-28.571q5.714-5.714%2013.143-5.714t13.143%205.714l224.571%20224.571%20224.571-224.571q5.714-5.714%2013.143-5.714t13.143%205.714l28.571%2028.571q5.714%205.714%205.714%2013.143z%22%2F%3E%3C%2Fsvg%3E");
    color: var(--px-input-text-color--disabled, rgba(0, 0, 0, 0.2));
  }

  &[multiple] {
    padding: 0.33333rem;
    cursor: pointer;
    border: none;
    background: var(--px-multiselect-background-color, #ebeff2);
  }

  &::-ms-expand {
    display: none;
  }
`;
export default Select;