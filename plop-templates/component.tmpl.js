import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';

/**
 * {{dashCase name}} component
 */
export default ({
  label = '{{name}}',
  style,
  children
}) => {

  const baseClasses = classnames(
    '{{dashCase name}}',
    { '{{dashCase name}}--children': children }
  );

  return (
    <div className={baseClasses} style={style}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
