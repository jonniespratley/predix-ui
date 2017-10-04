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

  //sizes
  xs,
  sm,
  md,
  lg,


  children
}) => {

  const getScreenSize = (props) =>{
    let size = 1;
    let screen = 'sm';
    return `u-1/${size}-${screen}`;
  };
  let size, screen;

  size = xs || sm || md || lg;

  const baseClasses = classnames('px-grid',
    //{[getScreenSize(props)]: true},

    {[`u-1/${size}-xs`]: xs},
    {[`u-1/${size}-sm`]: sm},
    {[`u-1/${size}-md`]: md},
    {[`u-1/${size}-lg`]: lg},

    {'layout': container },

  //  {'flex': container && !size},
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
    {'flex__item': item && !size}
  );
  return (
    <div className={baseClasses} style={style}>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
}
