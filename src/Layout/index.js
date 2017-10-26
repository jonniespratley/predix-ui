import React from 'react';

import classnames from 'classnames';
import stylesheet from './px-layout.scss';

/**
 * Layout component
 * Renders a div with proper classes
 */
export default ({
  className,
  style,

  item,
  container,
  size,

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
      className,
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

    const layoutSize = size || xs || sm || md || lg;

    const layoutSizeClasses = classnames (
      {[`u-1/${layoutSize}`]: size},
      {[`u-1/${layoutSize}-xs`]: xs},
      {[`u-1/${layoutSize}-sm`]: sm},
      {[`u-1/${layoutSize}-md`]: md},
      {[`u-1/${layoutSize}-lg`]: lg}
    );
    return (
      <div className={classnames(baseClasses, layoutSizeClasses)} style={style}>
        {children}
        <style jsx>{stylesheet}</style>
      </div>
    )
};
