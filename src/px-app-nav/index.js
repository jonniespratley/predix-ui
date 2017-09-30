import React from 'react';
import classnames from 'classnames';
import stylesheet from './style.scss';
import NavItem from './px-app-nav-item';
import BaseComponent from '../base-component';


/**
 * AppNav component
 */
export default class AppNav extends BaseComponent {
  constructor(props){
    super(props, {name: 'AppNav'});
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
    this._log('handleClick', val);
    //event.preventDefault();
    this.setState({
      selected: index,
      selectedItem: this._getValueForIndex(index)
    });
    if(this.props.onChange){
      this.props.onChange(this._getValueForIndex(index))
    }
  }

  _reset(){
    this._items = [];
    this._keys = [];
  }

  _renderItem(child, index){
    this._log('_renderItem', child, index, propForSelect);

    let propForSelect = (this.props.propForSelect ? child[this.props.propForSelect] : index);
    this._items.push(child);
    this._keys.push(propForSelect);

    //selected index is selected key
    let selected = (this.state.selected === this._getIndexForValue(propForSelect));
    let itemClasses = classnames(
      {'iron-selected': selected}
    );

    return (<NavItem
        onClick={this.handleClick.bind(this, propForSelect)}
        selected={selected}
        key={index}
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
