import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-overlay component
 */
export default ({label = 'px-overlay', children}) => {
  const baseClasses = classnames('px-overlay', {
    'px-overlay--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
