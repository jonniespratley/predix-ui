import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from '../styled';
import TableRow from './TableRow';
import { defaultFontFamily } from '../styles';

const TableView = styled.ul`
  font-family: ${defaultFontFamily};
  margin: 0;
  padding: 0;
  list-style: none;

  .px-table-row {
    ${props => props.size === 'flush' && css`
      padding: 0 !important;
    `}
    ${props => props.size === 'tiny' && css`
      padding: 0.33333rem !important;
    `}
    ${props => props.size === 'small' && css`
      padding: 0.66667rem !important;
    `}
    ${props => props.size === 'large' && css`
      padding: 1.33333rem !important;
    `}
    ${props => props.size === 'huge' && css`
      padding: 2rem !important;
    `}
  }
`;

const TableViewComponent = ({
  items,
  tappable,
  size,
  onSelect,
  children
}) => (
  <TableView size={size}>
    {children}
    {items && items.map(item => (
      <TableRow
        tappable={tappable}
        size={size}
        key={item.id}
        {...item}
        onClick={onSelect}
      />
    ))}
  </TableView>
);

TableViewComponent.propTypes = {
  tappable: PropTypes.bool,
  size: PropTypes.string,
  onSelect: PropTypes.func,
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    icon: PropTypes.string,
    body: PropTypes.string
  }))
};

TableViewComponent.defaultProps = {
  tappable: null,
  size: null,
  onSelect: null,
  children: null,
  items: null
};

export default TableViewComponent;
