import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-datatable component
 */
export default ({label = 'px-datatable', children}) => {
  const baseClasses = classnames('px-datatable', {
    'px-datatable--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
