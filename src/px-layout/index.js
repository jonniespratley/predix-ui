import React from 'react';

import classnames from 'classnames';
import stylesheet from './px-layout.scss';

/**
 * px-layout component
 * Renders a div with proper classes
 */
export default ({
  style,
  container,
  item,
  tiny,
  small,
  large,
  huge,
  flush,
  rev,
  middle,
  bottom,
  full,
  children}) => {
    const baseClassnames = classnames (
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
    const layoutClassnames = classnames (

    );
    return (
      <div className={baseClassnames} style={style}>
        {children}
        <style jsx>{stylesheet}</style>
      </div>
    )
};
