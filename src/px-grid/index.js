import React from 'react';
import classnames from 'classnames';

import styles from './style.scss';

/**
 * px-grid component
 */
export default ({
  container,
  style,
  center,
  middle,
  row,
  wrap,
  column,
  left,
  right,
  top,
  bottom,
  stretch,
  justify,
  item,
  children}) => {
  const baseClasses = classnames('px-grid',
    {'flex': container},
    {'flex--row': row},
    {'flex--col': column},
    {'flex--left': left},
    {'flex--right': right},
    {'flex--middle': middle},
    {'flex--center': center},
    {'flex--bottom': bottom},
    {'flex--wrap': wrap},
    {'flex--justify': justify},
    {'flex--stretch': stretch},
    {'flex__item': item}
  );
  return (
    <div className={baseClasses} style={style}>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
}
