import React from 'react';
import BaseComponent from '../BaseComponent';
import classnames from 'classnames';
import stylesheet from './px-app-nav-item.scss';
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
      <div onClick={onClick} className={baseClasses} style={style} data-id={id}>

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
  empty: false,
  emptyIcon: false,
  emptyLabel: false,
  collapsed: false,
  overflowed: false,
  fixedWidth: null,
  hideDropdownIcon: false,
  icon: null,
  label: null,
  item: null,
  selected: false
};

export default AppNavItem;
