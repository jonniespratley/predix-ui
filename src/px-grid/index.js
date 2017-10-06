import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-grid.scss';

/**
 * px-grid component
 */
export default ({
  style,

  item,
  container,

  //position


  top,
  middle,
  bottom,

  left,
  center,
  right,

  //type
  row,
  column,

  stretch,
  justify,
  wrap,
  nowrap,

  children
}) => {


  const baseClasses = classnames('px-grid',
    {'flex': container },
    {'flex--row': row},
    {'flex--col': column},
    {'flex--left': left},
    {'flex--right': right},
    {'flex--middle': middle},
    {'flex--center': center},
    {'flex--bottom': bottom},
    {'flex--wrap': wrap},
    {'flex--nowrap': nowrap},
    {'flex--justify': justify},
    {'flex--stretch': stretch},
    {'flex__item': item}
  );
  return (
    <div className={baseClasses} style={style}>
      {children}
      <style jsx>{stylesheet}</style>
    </div>
  );
}
