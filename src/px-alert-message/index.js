import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-alert-message component
 */
export default ({label = 'px-alert-message', children}) => {
  const baseClasses = classnames('px-alert-message', {
    'px-alert-message--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
