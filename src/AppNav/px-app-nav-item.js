import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-app-nav-item.scss';

/**
 * AppNav-item component
 */
export default ({
  label = 'AppNav-item',
  icon,
  id,
  item,
  style,
  selected,
  collapsed,
  overflowed,
  onlyShowIcon,
  onClick,
  children
}) => {

  const baseClasses = classnames(
    'px-app-nav-item',
    {'selected': selected},
    {'collapsed': collapsed},
    {'overflowed': overflowed},
    {'only-show-icon': onlyShowIcon}
  );

  return (
    <div onClick={onClick} className={baseClasses} style={style} data-id={id}>
      <span className='app-nav-item__label'>{label}</span>
      {children && <div>{children}</div>}
      <style jsx>{stylesheet}</style>
    </div>
  );
}
