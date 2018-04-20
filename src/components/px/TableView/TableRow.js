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

  &:after,
  &:before{
    display: table;
    content: ' ';
  }

  ${props => props.tappable && css`
    cursor: pointer;
    &:active {
      color: var(--px-table-row-selected-color, white) !important;
      background: var(--px-table-row-selected-background-color, black);
    }
  `}

  ${props => props.selected && css`
    background-color: var(--px-table-row-selected-background-color, black) !important;
    color: var(--px-table-row-selected-color, white) !important;
    .px-table-row-body{
      color: inherit;
    }
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
  
  ${props => props.swipeable && css`
    background-color: var(--px-table-row-background-color, white);
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform cubic-bezier(0.55, 0, 0.1, 1) 0.3s;
    z-index: 10;
  `}

  ${props => props.size === 'flush' && css`
    padding: 0;
  `}
  ${props => props.size === 'tiny' && css`
    padding: 0.33333rem;
  `}
  ${props => props.size === 'small' && css`
    padding: 0.66667rem;
  `}
  ${props => props.size === 'regular' && css`
    padding: 1rem;
  `}
  ${props => props.size === 'large' && css`
    padding: 1.33333rem;
  `}
  ${props => props.size === 'huge' && css`
    padding: 2rem;
  `}
`;
TableRow.displayName = 'TableRow';

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
TableRowTitle.displayName = 'TableRowTitle';

const TableRowBody = styled.div`
  font-size: var(--px-table-row-body-font-size, 15px);
  order: 5;
  align-self: stretch;
  flex: 1 0 auto;
  white-space: normal;
  line-height: normal;
`;
TableRowBody.displayName = 'TableRowBody';

const TableRowMedia = styled.div`
  flex: 0 1 auto;
  order: 0;
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-left: var(--px-table-row-media-margin, 0);
  margin-right: var(--px-table-row-media-margin, 0.66667rem);
  
  img {
    display: block;
    max-width: 80px;
    max-height: 80px;
  }
`;
TableRowMedia.displayName = 'TableRowMedia';

const TableRowLabel = styled.div`
  -webkit-touch-callout: none;
  user-select: none;
  order: 0;
  align-self: center;
  white-space: nowrap;
  position: relative;
  top: 2px;
  
  ${props => props.labelLeft && css`
    flex: 0 1 0;
    text-align: right;
   
  `}

  ${props => props.labelRight && css`
    text-align: left;
    order: 4;
   
  `}
`;
TableRowLabel.displayName = 'TableRowLabel';

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
`;
TableRowContent.displayName = 'TableRowContent';

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
  selected,
  labelLeft,
  labelRight,

  iconLeft,
  iconRight,

  editMode,
  size,

  tappable,
  swipeable,
  header,
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
    { 'table-row__media--icon': icon },
    { 'table-row__media--left': iconLeft },
    { 'table-row__media--right': iconRight }
  );

  return (
    <TableRow className='px-table-row' 
      size={size}
      tappable={tappable} 
      selected={selected} 
      swipeable={swipeable} 
      header={header}>

        {labelLeft && <TableRowLabel labelLeft={true} className="table-row__label table-row__label--left">{labelLeft}</TableRowLabel>}
        
        {image && 
            <TableRowMedia>
              <img src={image} alt={title}/>
            </TableRowMedia>
        }

        {icon && 
          <TableRowMedia>
            <Icon icon={icon}/>
          </TableRowMedia>
        }
       

        {editMode && <div className="table-row__media table-row__media--icon table-row__media--right"><button className="btn btn--bare table-row__handle">hamburger</button></div>}
       
        {title && 
        <TableRowContent >
          {title && <TableRowTitle >{title}</TableRowTitle>}
          {subtitle && <TableRowSubtitle>{subtitle}</TableRowSubtitle>}
          {body && <TableRowBody>{body}</TableRowBody>}
          {rowContent}
        </TableRowContent>}

        {labelRight && <TableRowLabel labelRight={true} className="table-row__label table-row__label--right">{labelRight}</TableRowLabel>}

      {children && 
      <TableRowContent>
        {children}
      </TableRowContent>}
      
      <div id="underlay" className="flex flex--stretch">
        {underlayContent}
      </div>
    </TableRow>
  );
};