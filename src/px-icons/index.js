import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-icons component
 */
export default ({label = 'px-icons', children}) => {
  const baseClasses = classnames('px-icons', {
    'px-icons--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
