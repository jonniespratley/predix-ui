import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-tile component
 */
export default ({label = 'px-tile', children}) => {
  const baseClasses = classnames('px-tile', {
    'px-tile--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
