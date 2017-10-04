import React from 'react';

import classnames from 'classnames';
import stylesheet from './px-layout.scss';

/**
 * px-layout component
 * Renders a div with proper classes
 */
export default ({
  style,

  item,
  container,

  //padding
  tiny,
  small,
  large,
  huge,
  flush,

  //position
  rev,
  middle,
  bottom,
  full,

  //responsive sizes
  xs,
  sm,
  md,
  lg,
  xl,

  children
}) => {
    const baseClasses = classnames (
      'px-layout',
      {'layout': container},
      {'layout__item': item},
      {'layout--tiny': tiny},
      {'layout--small': small},
      {'layout--large': large},
      {'layout--huge': huge},
      {'layout--flush': flush},
      {'layout--rev': rev},
      {'layout--bottom': bottom},
      {'layout--full': full}
    );


      let size = xs || sm || md || lg,
      screen;

    const layoutSizeClasses = classnames (
      {[`u-1/${size}-xs`]: xs},
      {[`u-1/${size}-sm`]: sm},
      {[`u-1/${size}-md`]: md},
      {[`u-1/${size}-lg`]: lg}
    );
    return (
      <div className={baseClasses} style={style}>
        {children}
        <style jsx>{stylesheet}</style>
      </div>
    )
};
