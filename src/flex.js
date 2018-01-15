import styled, {css} from 'styled-components';


const Flex = styled.div`
  display: flex;

  ${props => props.row && css` flex-direction: row; `}
  ${props => props.rowrev && css` flex-direction: row-reverse; `}
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

`;

const comp = {Flex};
export default comp;
