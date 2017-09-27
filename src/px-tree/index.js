import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-tree component
 */
export default ({label = 'px-tree', children}) => {
  const baseClasses = classnames('px-tree', {
    'px-tree--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
