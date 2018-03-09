import styled, {css} from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  
  padding: 0;

  ${props => props.tiny && css` 
    margin-left: -0.33333rem;
    > div{
      padding-left: 0.33333rem;
    }
  `}
 
  ${props => props.small && css` 
    margin-left: -0.66667rem;
    > div{
      padding-left: 0.66667rem;
    }
  `}

   ${props => props.large && css` 
    margin-left: -1.33333rem;
    > div{
      padding-left: 1.33333rem;
    }
  `}

   ${props => props.huge && css` 
    margin-left: -2rem;
    > div{
      padding-left: 2rem;
    }
  `}
  
  ${props => props.rev && css` flex-direction: row-reverse; `}
  ${props => props.col && css` flex-direction: column; `}
  ${props => props.colrev && css` flex-direction: column-reverse; `}

  ${props => props.inline && css`display: inline-flex;`}

  ${props => props.wrap && css`flex-wrap: wrap;`}
  ${props => props.wraprev && css`flex-wrap: wrap-reverse;`}
  ${props => props.nowrap && css`flex-wrap: nowrap;`}


  ${props => props.left && css`justify-content: flex-start;`}
  ${props => props.center && css`justify-content: center;`}
  ${props => props.right && css`justify-content: flex-end;`}

  ${props => props.justify && css`justify-content: space-between;`}
  ${props => props.spaced && css`justify-content: space-around;`}

  ${props => props.top && css`align-items: flex-start;`}
  ${props => props.middle && css`align-items: center;`}
  ${props => props.bottom && css`align-items: flex-end;`}

  ${props => props.stretch && css`align-items: stretch;`}
  ${props => props.baseline && css`align-items: baseline;`}


    

   
  ${props => props.item && css`
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

  `}

  

`;

Layout.displayName = 'Layout';
Layout.defaultProps = {
  className: 'layout'
};
export default Layout;
