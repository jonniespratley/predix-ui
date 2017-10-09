import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-app-header.scss';
import AppNav from '../AppNav';
import BrandingBar from '../BrandingBar';

/**
 * AppHeader component
 */
export default ({
  title,
  selected,
  selectedItem,
  onChange,
  items,
  style,
  children
}) => {

  const baseClasses = classnames(
    'px-app-header',
    { 'px-app-header--children': children }
  );

  return (
    <div className={baseClasses} style={style}>
      <BrandingBar title={title}/>
      {items && <AppNav items={items} selected={selected} onChange={onChange}/>}
      {children && <div>{children}</div>}
      <style jsx>{stylesheet}</style>
    </div>
  );
}
