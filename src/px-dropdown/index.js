import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-dropdown.scss';

/**
 * px-dropdown component
 */
export default ({label = 'px-dropdown', children}) => {
  const baseClasses = classnames('px-dropdown', {
    'px-dropdown--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
