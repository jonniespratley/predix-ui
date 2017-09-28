import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';

import BrandingBar from '../px-branding-bar';

/**
 * px-app-header component
 */
export default ({
  title = 'px-app-header',
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
      <div>{children}</div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
