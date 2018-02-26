import React from 'react';
import classnames from 'classnames';

import style from './px-data-table.scss';

/**
 * DataTable component
 */
export default ({label = 'DataTable', children}) => {
  const baseClasses = classnames('px-data-table', {
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
