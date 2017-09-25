import React from 'react';

import styles from './style.scss';
import classnames from 'classnames';

const baseClasses = classnames('px-card');

export default ({title = 'Card', children}) => (
  <div className={baseClasses}>
    <header>
      <span className='epsilon caps'>{title}</span>
    </header>
    <section>{children}</section>
    <style jsx>{styles}</style>
  </div>
);
