import styled, { css } from 'styled-components';

const Grid = styled.div`
  display: grid;

  ${props => props.inline && css`
    display: inline-grid;
  `}

  ${props => props.template && css`
    grid-template: ${props.template};
  `}

  ${props => props.columns && css`
    grid-template-columns: ${props.columns};
  `}

  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `}

  ${props => props.columnGap && css`
    grid-column-gap: ${props.columnGap};
  `}

  ${props => props.rowGap && css`
    grid-row-gap: ${props.rowGap};
  `}



  /** justify-items: start | end | center | stretch; */
  ${props => props.justifyItems && css`
    justify-items: ${props.justifyItems};
  `}


  ${props => props.item && css`
    display: inline-block;
    /*align-self: start | end | center | stretch;*/
    ${props.alignSelf && css`
      align-self: ${props.alignSelf};
    `}
  `}
`;


export default Grid;
