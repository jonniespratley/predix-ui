import React from 'react';
import styled, { css } from 'styled-components';

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
/*

export default ({restProps, arrowProps:{ ref, style  }}) => (
  <PopoverArrow style={style} ref={ref} {...restProps}/>
);
*/
export default PopoverArrow;
