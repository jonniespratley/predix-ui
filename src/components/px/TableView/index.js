import React from 'react';
//import { List } from 'react-virtualized';
import classnames from 'classnames';
import styleheet from './px-table-view.scss';
import TableRow from './TableRow';

import styled, {css} from 'styled-components';


/**
 * TableView component
 */

class TableView extends React.Component {
  constructor(props){
    super(props);
    this.displayName = 'TableView';
    this.renderRow = this.renderRow.bind(this);
  }
  _handleSelect(e){
    if(this.props.onSelect){
      this.props.onSelect(e);
    }
  }
  renderRow({ key, index, isScrolling, isVisible, style }) {
    const content = /* isScrolling ? '...' :*/ this.props.items[index];
    return (
      <TableRow 
        tappable={this.props.tappable}
        key={key}
        index={index}
        {...content}
        onClick={this._handleSelect}>
      </TableRow>
    );
  }
  render(){
    const {
      style = {
        outline: 'none'
      },
      items = [],
      selectedItem,
      selected,
      tappable,

      //sizes
      size,
      height = 300,
      width = 320,
      rowHeight = 44,
      children 
    } = this.props;

    const baseClassnames = classnames('px-table-view',
      { 'px-table-view--flush': size === 'flush' },
      { 'px-table-view--tiny': size === 'tiny' },
      { 'px-table-view--small': size === 'small' },
      { 'px-table-view--regular': size === 'regular' },
      { 'px-table-view--large': size === 'large' },
      { 'px-table-view--huge': size === 'huge' }
    );
    const tableViewClassnames = classnames(
      'table-view',
      { 'table-view--flush': size === 'flush' },
      { 'table-view--tiny': size === 'tiny' },
      { 'table-view--small': size === 'small' },
      { 'table-view--regular': size === 'regular' },
      { 'table-view--large': size === 'large' },
      { 'table-view--huge': size === 'huge' }
    );

    return (
      <div className={baseClassnames}>
        {children}
        {items && items.map((item, index) => (
           <TableRow 
            tappable={this.props.tappable}
            size={size}
            key={index}
            index={index}
            {...item}
            onClick={this._handleSelect}>
          </TableRow>
        ))}
      </div>
    );
  }
}
TableView.defaultProps = {
  items: []
};



export default TableView;