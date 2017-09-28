import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-app-nav-item.scss';

/**
 * px-app-nav-item component
 */
export default ({
  label = 'px-app-nav-item',
  icon,
  id,
  item,
  style,
  selected,
  collapsed,
  overflowed,
  onlyShowIcon,
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
    <div className={baseClasses} style={style} data-id={id}>
      <div>{children}</div>
      <span className='app-nav-item__label'>{label}</span>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
