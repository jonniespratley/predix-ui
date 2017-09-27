import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-popover component
 */
export default ({label = 'px-popover', children}) => {
  const baseClasses = classnames('px-popover', {
    'px-popover--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
