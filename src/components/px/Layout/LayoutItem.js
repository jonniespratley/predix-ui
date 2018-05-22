import styled, { css } from 'styled-components';

const LayoutItem = styled.div`
  padding-left: 1rem;
  flex: 1;
  flex-basis: 13.33333rem;
  &:nth-last-child(-n+3):first-child,
  &:nth-last-child(-n+3):first-child~.layout__item {
    flex-basis: 26.66667rem;
  }
  &:nth-last-child(-n+4):first-child,
  &:nth-last-child(-n+4):first-child ~ .layout__item {
    flex-basis: 20rem;
  }
  @media screen and (min-width: 64em) {
    flex-basis: 0;
  }
  @media screen and (min-width: 64em) {
    &:nth-last-child(-n+3):first-child,
    &:nth-last-child(-n+3):first-child ~  .layout__item {
      flex-basis: 0;
    }
  }

  ${props => props.full && css`
    align-self: stretch;
  `}
  ${props => props.center && css`
    align-self: center;
  `}
  ${props => props.bottom && css`
    align-self: flex-end;
  `}


`;

LayoutItem.displayName = 'LayoutItem';
LayoutItem.defaultProps = {
  className: 'layout__item'
};
export default LayoutItem;
