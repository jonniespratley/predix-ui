import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';

/**
 * px-overlay component
 */
export default (props) => {
  const {
    visible,
    style,
    onOverlayClick,
    zIndex = 900,
    isOpen,
    children
  } = props;

  const baseClasses = classnames('px-overlay', {
    'px-overlay--is-open': visible,
    'px-overlay--invisible': !visible
  });

  return (
    <div className={baseClasses} onClick={onOverlayClick} style={style}>
      {children}
      <style jsx>{stylesheet}</style>
    </div>
  );
}
