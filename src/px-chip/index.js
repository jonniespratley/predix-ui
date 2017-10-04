import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-chip.scss';

/**
 * px-chip component
 */
export default ({
  style,
  label = 'px-chip',
  icon,
  selected,
  showIcon,
  children
}) => {

  const baseClasses = classnames('px-chip');
  const chipClasses = classnames('chip', 'zeta', {'selected': selected});

  return (
    <div className={baseClasses} style={style}>
      <div className={chipClasses}>
        <div className='flexContainer'>
          <span className='chip__content truncate'>{children}</span>
          {showIcon && <span className='chip__actionable-icon'>{icon}</span>}
        </div>
      </div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
