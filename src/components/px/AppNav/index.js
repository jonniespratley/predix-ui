import React from 'react';
import classnames from 'classnames';

import NavItem from './px-app-nav-item';
import BaseComponent from '../BaseComponent';
import Icon from '../IconSet/px-icon';

import stylesheet from './styles/px-app-nav.scss';

import AppNavSubGroup from './px-app-nav-sub-group';
/**
 * AppNav component
 */
class AppNav extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'AppNav'});
    this.state = {
      selected: props.selected || 0,
      onlyShowIcon: props.onlyShowIcon ||  props.vertical,
      selectedItem: props.selectedItem || null,
      vertical: props.vertical || false,
      verticalOpened: props.verticalOpened || !props.vertical,
      propForSelect: props.propForSelect
    };
    this._items = [];
    this._keys = [];

    this._handleRef = this._handleRef.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseExit = this._handleMouseExit.bind(this);
  }

  componentDidMount(){
    if(this.base){
      this.base.addEventListener('mouseleave', this._handleMouseExit);
      this.base.addEventListener('mouseenter', this._handleMouseEnter);
    }
  }

  componentWillReceiveProps(nextProps){
    //console.log('componentWillReceiveProps', nextProps);
  }

  componentWillUnmount(){
    if(this.base){
      this.base.removeEventListener('mouseleave', this._handleMouseExit);
      this.base.removeEventListener('mouseenter', this._handleMouseEnter);
    }
  }

  _handleRef(el){
    this.base = el;
  }

  _handleMouseEnter(e){
    if (!this.state.vertical){
      return;
    }
    this._mouseIsOverNav = true;
    if (this._mouseIsOverNav && !this.state.verticalOpened) {
      this._setVerticalOpened(true);
    }
  }

  _handleMouseExit(e){
    if (!this.state.vertical){
      return;
    }
    this._mouseIsOverNav = false;
    if (!this._mouseIsOverNav && this.state.verticalOpened) {
      this._setVerticalOpened(false);
    }
  }

  _setVerticalOpened(bool){
    this.setState({
      verticalOpened: bool,
      onlyShowIcon: !bool
    });
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
    let propForSelect = (this.props.propForSelect ? child[this.props.propForSelect] : index);
    this._items.push(child);
    this._keys.push(propForSelect);
    let selected = (this.state.selected === this._getIndexForValue(propForSelect));
    if(!child.children){
      return (
        <NavItem key={index}
          id={child.id}
          item={child}
          icon={child.icon}
          label={child.label}
          selected={selected}
          onlyShowIcon={this.state.onlyShowIcon}
          onClick={this.handleClick.bind(this, propForSelect)}
        />
      );
    } else {
      return (
        <AppNavSubGroup
          key={index}
          id={child.id}
          item={child}
          icon={child.icon}
          label={child.label}
          onlyShowIcon={this.state.onlyShowIcon}
          selected={selected}
          onClick={this.handleClick.bind(this, propForSelect)}
        />
      );
    }
  }

  _renderItems(items){
    this._reset();
    return items.map(this._renderItem.bind(this));
  }

  render(){
    const {
      classes,
      style,
      items,
      selected,
      selectedItem,
      onChange,
      children
    } = this.props;

    const {
      vertical,
      verticalOpened
    } = this.state;

    const baseClasses = classnames(
      'px-app-nav',
      { 'vertical': vertical },
      { 'vertical-opened': vertical && verticalOpened }
    );

    const appNavClasses = classnames('app-nav');


    return (
      <nav className={baseClasses} style={style} ref={this._handleRef}>
        <div className={appNavClasses}>

          <div className='app-nav__items'>
            {/* app-nav__items */}
            {this._renderItems(items)}
          </div>

          {/* STATE: Horizontal or menu nav, any visible items */}

          {/* STATE: Items overflowed or collapsed */}

          {/* Actions */}
          <div className="app-nav__actions">
            {children}
          </div>

        </div>

        <style>{`${stylesheet}`}</style>
      </nav>
    );
  }

}

AppNav.defaultProps = {
  vertical: false,
  collapseAll: false,
  collapseAt: null,
  collapseWithIcon: false,
  onlyShowIcon: false,
  collapseOpened: false,
  verticalOpened: false,
  selected: 0,
  selectedItem: null,
  visibleItems: null,
  items: null,
  opened: null
};

export default AppNav;
