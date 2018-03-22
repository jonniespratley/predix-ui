import React from 'react';
import classnames from 'classnames';
import BaseComponent from '../BaseComponent';
import Icon from '../IconSet/Icon';
import AppNavItem from './px-app-nav-item';
import AppNavSubItem from './px-app-nav-sub-item';

class AppNavSubGroup extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'AppNavSubGroup'});
    this.state = {
      opened: props.opened || false
    }
  }
  _handleClick(e, item, isChild){
    this.setState({opened: !this.state.opened});
    if(this.props.onClick){
      this.props.onClick(item, isChild);
    }
  }
  render(){
    const { opened } = this.state;
    const subgroupClasses = classnames(
      'px-app-nav-sub-group',
      { 'px-app-nav-sub-group--opened': opened }
    );
    const dropdownClasses = classnames(
      'app-nav-subgroup__dropdown',
      {'app-nav-subgroup__dropdown--open': opened}
    );
    const {
      onClick,
      children,
      icon,
      item,
      label,
      selected,
      overflowed,
      collapsed,
      onlyShowIcon,
      emptyIcon
    } = this.props;
    
    return (
      <div className={subgroupClasses}>
        <AppNavItem
          dropdown
          onClick={this._handleClick.bind(this, item)}
          item={item}
          label={label}
          selected={selected}
          overflowed={overflowed}
          collapsed={collapsed}
          onlyShowIcon={onlyShowIcon}
          emptyIcon={emptyIcon}
          icon={icon}
        />
        <div className={dropdownClasses}>
          <div className='app-nav-subgroup__dropdown__content'>
            {item.children && item.children.map((child, index) => (
              <AppNavSubItem 
                onClick={this._handleClick.bind(this, child, true)}
                key={index} 
                item={child}/>
            ))}
          </div>
        </div>
       
      </div>
    );
  }
}

AppNavSubGroup.displayName = 'AppNavSubGroup';
AppNavSubGroup.defaultProps = {
  selected: false,
  collapsed: false,
  overflowed: false,
  item: null,
  label: null,
  icon: null,
  emptyIcon: false,
  opened: false,
  onlyShowIcon: false
};

export default AppNavSubGroup;
