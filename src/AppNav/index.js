import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-app-nav.scss';
import NavItem from './px-app-nav-item';
import BaseComponent from '../BaseComponent';


/**
 * AppNav component
 */
export default class AppNav extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'AppNav'});
    this.state = {
      selected: this.props.selected,
      selectedItem: null,
      propForSelect: this.props.propForSelect
    };
    this._items = [];
    this._keys = [];
  }

  _getIndexForValue(val){
    return this._keys.indexOf(val);
  }

  _getValueForIndex(index){
    return this._items[index];
  }

  handleClick(val, event) {
    const index = this._getIndexForValue(val);
    const item = this._getValueForIndex(index);
    const state = {
      selected: index,
      selectedItem: item
    };
    this.setState(state);
    if(this.props.onChange){
      this.props.onChange(state);
    }
  }

  _reset(){
    this._items = [];
    this._keys = [];
  }

  _renderItem(child, index){
    //this._log('_renderItem', child, index, propForSelect);

    let propForSelect = (this.props.propForSelect ? child[this.props.propForSelect] : index);
    this._items.push(child);
    this._keys.push(propForSelect);

    //selected index is selected key
    let selected = (this.state.selected === this._getIndexForValue(propForSelect));
    let itemClasses = classnames(
      { 'iron-selected': selected }
    );

    return (<NavItem key={index}
      selected={selected}
      onClick={this.handleClick.bind(this, propForSelect)}
      {...child}/>);
  }

  _renderItems(items){
    this._reset();
    return (
      <div className="app-nav__items">
        {items && items.map(this._renderItem.bind(this))}
      </div>
    );
  }

  render(){
    const {
      classes,
      style,
      vertical,
      opened = true,
      items,
      selected,
      selectedItem,
      onChange,
      children
    } = this.props;

    const baseClasses = classnames(
      'px-app-nav',
      'app-nav',
      { 'vertical': vertical },
      { 'vertical-opened': opened }
    );

    return (
      <nav className={baseClasses} style={style}>
        {this._renderItems(items)}
        {/* Horizontal menu */}

        {/* Overflowed or collapsed */}

        <div>{children}</div>
        <style jsx>{stylesheet}</style>
      </nav>
    );
  }

}
