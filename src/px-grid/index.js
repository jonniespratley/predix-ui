import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-grid component
 */
export default ({ container = true, item, children}) => {
  const baseClasses = classnames('px-grid',
    {'flex': container},
    {'flex__item': item}
  );
  return (
    <div className={baseClasses}>
      {children}
      <style jsx>{style}</style>
    </div>
  );
}
