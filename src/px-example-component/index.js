import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.css';

/**
 * px-example-component component
 */
export default ({
  label = 'px-example-component',
  style,
  children
}) => {

  const baseClasses = classnames(
    'px-example-component',
    { 'px-example-component--children': children }
  );

  return (
    <div className={baseClasses} style={style}>
      <h4 className={stylesheet.title}>{label}</h4>
      <div>{children}</div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
