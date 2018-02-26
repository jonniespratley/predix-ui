import React from 'react';
//import { List } from 'react-virtualized';
import classnames from 'classnames';
import styleheet from './px-table-view.scss';
import TableRow from './TableRow';
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
      flush,
      tiny,
      small,
      regular,
      large,
      huge,
      height = 300,
      width = 320,
      rowHeight = 44,
      children 
    } = this.props;

    const baseClassnames = classnames('px-table-view',
      { 'px-table-view--flush': flush },
      { 'px-table-view--tiny': tiny },
      { 'px-table-view--small': small },
      { 'px-table-view--regular': regular },
      { 'px-table-view--large': large },
      { 'px-table-view--huge': huge }
    );
    const tableViewClassnames = classnames(
      'table-view',
      { 'table-view--flush': flush },
      { 'table-view--tiny': tiny },
      { 'table-view--small': small },
      { 'table-view--regular': regular },
      { 'table-view--large': large },
      { 'table-view--huge': huge }
    );

    return (
      <div className={baseClassnames}>
        {children}
        {items && items.map((item, index) => (
           <TableRow 
            tappable={this.props.tappable}
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