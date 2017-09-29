import React from 'react';

import stylesheet from './style.scss';
import classnames from 'classnames';

const baseClasses = classnames('px-card');

export default ({
  headerText,
  icon,
  style,
  children
}) => (
  <div className={baseClasses} style={style}>
    {headerText && <header>
      <span>{icon}</span>
      <span className='epsilon caps'>{headerText}</span>
    </header>}
    <section>{children}</section>
    <style jsx>{stylesheet}</style>
  </div>
);
