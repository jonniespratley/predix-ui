import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';

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
      <AppNav items={items}/>
      <div>{children}</div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
