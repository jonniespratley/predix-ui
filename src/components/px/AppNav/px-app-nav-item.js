import React from 'react';
import BaseComponent from '../BaseComponent';
import classnames from 'classnames';
import stylesheet from './styles/px-app-nav-item.scss';
import Icon from '../IconSet/px-icon';


/**
 * AppNav-item component
 */
class AppNavItem extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'AppNavItem'});
    this.state = {
      selected: this.props.selected
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(e){
    if(!this.props.cancelSelect && this.props.onClick){
      this.props.onClick(e);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.selected !== this.props.selected || nextProps.onlyShowIcon !== this.props.onlyShowIcon;
  }
  render(){
    const {
      label,
      icon,
      id,
      item,
      style,
      selected,
      collapsed,
      overflowed,
      emptyIcon,
      emptyLabel,
      empty,
      dropdown,
      onlyShowIcon,
      onClick,
      children
    } = this.props;

    const baseClasses = classnames(
      'px-app-nav-item',
      {'selected': selected},
      {'collapsed': collapsed},
      {'overflowed': overflowed},
      {'only-show-icon': onlyShowIcon}
    );

    const iconClasses = classnames(
      'app-nav-item__icon',
      {'app-nav-item__icon--with-label': label}
    );

    return (
      <div onClick={this._handleClick} className={baseClasses} style={style} data-id={id}>

        {/* icon */}
        {icon && <Icon size={32} icon={icon} className={iconClasses}/>}

        {/* emptyIcon */}
        {emptyIcon && <div className='app-nav-item__icon app-nav-item__icon--with-label app-nav-item__icon--empty'></div>}

        {/* emptyLabel */}
        {emptyLabel && <div className='app-nav-item__label app-nav-item__label--empty'></div>}

        {/* label */}
        {label && <span className='app-nav-item__label'>{label}</span>}

        {/* empty */}
        {empty && <div>
          <div className='app-nav-item__icon app-nav-item__icon--with-label app-nav-item__icon--empty'></div>
          <div className='app-nav-item__label app-nav-item__label--empty'></div>
        </div>}

        {/* dropdown */}
        {dropdown && <Icon icon='px-utl:chevron' size={16} className='app-nav-item__dropdown-icon'/>}


        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}

AppNavItem.defaultProps = {
  /**
   * Set to `true` if the item is in a collapsed dropdown.
   */
  collapsed: false,

  /**
   * Cancels events that trigger selection.
   */
  cancelSelect: false,
  /**
   * Used to set the icon for the item.
   */
  icon: null,
  /**
   * A reference the object used to create this nav item.
   */
  item: null,
  /**
   * Used as the label text for the item.
   */
  label: null,
  /**
   * Set to `true` if the item is selected.
   */
  selected: false,
  /**
   * Shows a dropdown arrow icon to indicate this item can be tapped to
   * open a subgroup.
   */
  dropdown: false,
  empty: false,
  /**
   * Shows an empty state outline for icon.
   */
  emptyIcon: false,
  /**
   * Shows an empty state outline for the label.
   */
  emptyLabel: false,
  /**
   * Set to `true` if the item is inside a overflowed dropdown.
   */
  overflowed: false,
  /**
   * Set to `true` if this is a subitem.
   */
  subitem: false,
  onClick: null,
  fixedWidth: null,
  hideDropdownIcon: false

};

export default AppNavItem;
