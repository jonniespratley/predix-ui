import styled from 'styled-components';

const PopoverHeader = styled.h3`
  margin: 0;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  color: inherit;
  border-bottom: 1px solid var(--px-popover-border-color, black);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
  &:empty {
    display: none;
  }
`;

PopoverHeader.displayName = 'PopoverHeader';

export default PopoverHeader;
