import React from 'react';
import classnames from 'classnames';

//import style from './style.scss';

/**
 * px-icons component
 */
export default ({
  iconSet,
  icon,
  children
}) => {
  const baseClasses = classnames('px-icons');

  return (
    <div className={baseClasses}>
      <div>{children}</div>
    </div>
  );
}
