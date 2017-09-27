import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-overlay component
 */
export default (props) => {
  const {
    visible,
    style,
    onOverlayClick,
    zIndex = 900,
    children
  } = props;
  const baseClasses = classnames('px-overlay', {
    'px-overlay--invisible': !visible
  });

  return (
    <div className={baseClasses} onClick={onOverlayClick}>
      {children}
      <style jsx>{`
        .px-overlay{
          position        : fixed;
          top             : 0;
          right           : 0;
          bottom          : 0;
          left            : 0;
          z-index         : 900;
          background-color: var(--px-modal-overlay-color, rgba(0, 0, 0, 0.5));
          transition      : background-color 0.2s cubic-bezier(.78,.13,.16,.87);
        }
        .px-overlay--invisible{
          visibility      : hidden;
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
