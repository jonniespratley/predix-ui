import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-app-header.scss';

import AppNav from '../px-app-nav';
import BrandingBar from '../px-branding-bar';

/**
 * px-app-header component
 */
export default ({
  title = 'px-app-header',
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
      {items && <AppNav items={items}/>}
      {children && <div>{children}</div>}
      <style jsx>{stylesheet}</style>
    </div>
  );
}
