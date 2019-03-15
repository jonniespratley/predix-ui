import styled from '../styled';

const PopoverArrow = styled.span`
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
  &:after,
  &:before {
    content: "";
    border-color: transparent;
    border-style: solid;
  }
`;

export default PopoverArrow;
