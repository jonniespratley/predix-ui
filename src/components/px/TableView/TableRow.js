import React from 'react';
//import style from './px-table-row-style.scss';
import classnames from 'classnames';
import Icon from '../IconSet/Icon';

import styled, {css} from 'styled-components';

const TableRow = styled.div`
  
  user-select: none;
  min-height: var(--px-table-row-min-height, 2.93333rem);
  line-height: var(--px-table-row-line-height, 15px);
  color: var(--px-table-row-color, inherit);
  font-size: var(--px-table-row-font-size, 15px);
  background-color: var(--px-table-row-background-color, white);
  border-bottom-width: var(--px-table-row-separator-width, 1px);
  border-bottom-style: var(--px-table-row-separator-style, solid);
  border-bottom-color: var(--px-table-row-separator-color, black);
  user-select: none;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  appearance: normal;
  flex: 1;
  ${props => props.tappable && css`
    &:active {
      color: var(--px-table-row-selected-color, white);
      background: var(--px-table-row-selected-background-color, black);
    }
  `}
  ${props => props.selected && css`
    background-color: var(--px-table-row-selected-background-color, black);
    color: var(--px-table-row-selected-color, white);
  `}
  ${props => props.header && css`
    padding: var(--px-table-row-header-padding, 0.33333rem);
    font-size: var(--px-table-row-header-font-size, 15px);
    color: var(--px-table-row-header-color, inherit);
    background-color: var(--px-table-row-header-background-color, black);
    text-transform: var(--px-table-row-header-text-transform, uppercase);
    min-height: var(--px-table-row-header-min-height, 24px);
    line-height: var(--px-table-row-header-line-height, 24px);
    border-top: none;
    border-bottom: none;
  `}
  ${props => props.size === 'large' && css`
    
  `}
  ${props => props.swipeable && css`
    background-color: var(--px-table-row-background-color, white);
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform cubic-bezier(0.55, 0, 0.1, 1) 0.3s;
    z-index: 10;
  `}
`;

const TableRowTitle = styled.div`
  user-select: none;
  
  line-height: normal;
  flex: 1 0 auto;
  align-items: center;
  align-self: stretch;
  display: flex;
  white-space: nowrap;
  font-size: var(--px-table-row-title-font-size, 15px);
  color: var(--px-table-row-title-color, inherit);
`;

const TableRowMedia = styled.div`
  padding: .5rem;
`;

const TableRowSubtitle = styled.div`
  font-size: var(--px-table-row-subtitle-font-size, 15px);
  color: var(--px-table-row-subtitle-color, black);
`;
const TableRowContent = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  
  flex: 1;
  user-select: none;
}
`;
//const TableRowMedia = styled.div``;

const TableRowActions = styled.div`
  overflow: hidden;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  align-self: stretch;
  align-items: stretch;

  ${props => props.opened && css`
    z-index: 50;
  `}
  ${props => props.actionsLeft && css`
    order: 0;
    left: 0;
      ${props => props.opened && css`
        width: auto;
        transform: translateX(0%);
    `}
  `}
`;

/**
 * px-table-row component
 * https://github.com/PredixDev/px-table-view/blob/master/px-table-row.html
 */
export default ({
  title = 'Row Title',
  subtitle,
  body,
  image,
  icon, 
  labelLeft,
  labelRight,

  iconLeft,
  iconRight,

  editMode,

  tappable,
  underlayContent,
  rowContent,
  children
}) => {

  const baseClassnames = classnames(
    'table-row',
    {'table-row--tappable': tappable}
  );

  const mediaClassnames = classnames(
    'table-row__media',
    { 'table-row__media--icon': icon || iconLeft || iconRight },
    { 'table-row__media--left': icon || iconLeft },
    { 'table-row__media--right': iconRight }
  );

  return (
    <TableRow className='px-table-row' tappable={tappable}>
        {labelLeft && <span className="table-row__label table-row__label--left">{labelLeft}</span>}
        {image || icon && <TableRowMedia>
          {image && <div className="table-row__media table-row__media--image"><img src={image} alt={title}/></div>}
          {icon && <div className={mediaClassnames}><Icon icon={icon}/></div>}
        </TableRowMedia>}
        {(iconLeft || iconLeft) && <div className={mediaClassnames}><Icon icon={icon}/></div>}


        {editMode && <div className="table-row__media table-row__media--icon table-row__media--right"><button className="btn btn--bare table-row__handle">hamburger</button></div>}
        {labelRight && <span className="table-row__label table-row__label--right">{labelRight}</span>}

        <TableRowContent className="table-row__content">
          {title && <TableRowTitle className="table-row__title">{title}</TableRowTitle>}
          {subtitle && <TableRowSubTitle className="table-row__subtitle">{subtitle}</TableRowSubTitle>}
          {body && <span className="table-row__body">{body}</span>}
          {rowContent}
        </TableRowContent>

      {children && <TableRowContent className="table-row__content">
        {children}
      </TableRowContent>}
      
      <div id="underlay" className="flex flex--stretch">
        {underlayContent}
      </div>
    </TableRow>
  );
};