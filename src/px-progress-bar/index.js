import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-progress-bar component
 */
export default ({label = 'px-progress-bar', children}) => {
  const baseClasses = classnames('px-progress-bar', {
    'px-progress-bar--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
