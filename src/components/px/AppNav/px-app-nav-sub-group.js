import React from 'react';
import classnames from 'classnames';
import stylesheet from './styles/px-app-nav-subgroup.scss';


import BaseComponent from '../BaseComponent';
import AppNavItem from './px-app-nav-item';
import Icon from '../IconSet/px-icon';


const AppNavSubItem = ({label}) => {
  return (<p className='app-nav-subitem__label'>{label}</p>);
};

class AppNavSubGroup extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'AppNavSubGroup'});
  }
  render(){
    const {
      children,
      icon,
      label,
      selected,
      overflowed,
      collapsed,
      onlyShowIcon,
      emptyIcon
    } = this.props;
    return (
      <div className='px-app-nav-group'>
        <AppNavItem
          dropdown
          cancelSelect
          label={label}
          selected={selected}
          overflowed={overflowed}
          collapsed={collapsed}
          onlyShowIcon={onlyShowIcon}
          emptyIcon={emptyIcon}
          icon={icon}
        />
        <div className='app-nav-subgroup__dropdown'>
          <div className='app-nav-subgroup__dropdown__content'>{children}</div>
        </div>
       
      </div>
    );
  }
}

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
