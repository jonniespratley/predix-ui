import styled, { css } from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 0.26667rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--px-input-label-text-color, #677e8c);
  letter-spacing: var(--px-headings-letter-spacing, 0.3px);

  ${props => props.inline && css`
    display: inline-block;
    margin-bottom: 0;
    + input {
        margin-left: 0.66667rem;
    }
  `}
`;

Label.displayName = 'Label';

export default Label;
