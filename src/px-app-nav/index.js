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
      propForSelect: this.props.propForSelect
    };
    this._items = [];
    this._keys = [];
  }

  _getIndexForValue(val){
    return this._keys.indexOf(val);
  }

  handleClick(val, event) {
    this._log('handleClick', val);
    //event.preventDefault();
    this.setState({
      selected: this._getIndexForValue(val)
    });
  }

  _reset(){
    this._items = [];
    this._keys = [];
  }

  _renderItem(child, index){
    let propForSelect = (this.props.propForSelect ? child.props[this.props.propForSelect] : index);
    this._items.push(child);
    this._keys.push(propForSelect);

    //selected index is selected key
    let selected = (this.state.selected === this._getIndexForValue(propForSelect));
    let itemClasses = classnames(
      {'iron-selected': selected}
    );
    return (<li className={itemClasses}>
      <NavItem
        selected={selected}
        onClick={this.handleClick(propForSelect)}
        key={index} {...child.props}/>
    </li>);
  }

  _renderItems(items){
    this._reset();
    return (
      <ul className="tabs-container__nav flex">
        {items && items.map(this._renderItem.bind(this))}
      </ul>
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
        <section className='app-nav__items'>
          {this._renderItems(items)}
        </section>
        {/* Horizontal menu */}

        {/* Overflowed or collapsed */}

        <div>{children}</div>
        <style jsx>{stylesheet}</style>
      </nav>
    );
  }

}
