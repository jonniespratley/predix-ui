import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-breadcrumbs component
 */
export default ({label = 'px-breadcrumbs', children}) => {
  const baseClasses = classnames('px-breadcrumbs', {
    'px-breadcrumbs--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
