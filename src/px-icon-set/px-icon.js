import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';

/**
 * px-icon-set component
 */
export default ({
  icon,
  size,
  style,
  children
}) => {

  const baseClasses = classnames(
    'px-icon'
  );

  return (
    <div className={baseClasses} style={style}>
      {icon}
    </div>
  );
}
