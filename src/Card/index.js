import React from 'react';

import stylesheet from './px-card.scss';
import classnames from 'classnames';

import Icon from '../px-icon-set/px-icon';

const baseClasses = classnames('Card');

export default ({
  headerText,
  icon,
  style,
  children
}) => (
  <div className={baseClasses} style={style}>
    {headerText && <header className='flex'>
      {icon && <span className='icon'><Icon icon={icon}/></span>}
      <span className='epsilon caps'>{headerText}</span>
    </header>}
    <section>{children}</section>
    <style jsx>{stylesheet}</style>
  </div>
);
