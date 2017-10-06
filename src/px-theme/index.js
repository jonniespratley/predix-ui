import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-theme.scss';
import darkStylesheet from './px-dark-theme.scss';

/**
 * px-theme component
 */
export default ({
  style,
  light = false,
  dark = false,
  children
}) => {

  const baseClasses = classnames(
    'px-theme',
    {'px-dark-theme': dark},
    {'px-light-theme': light}
  );

  return (
    <div className={baseClasses} style={style}>

      <div>{children}</div>

      <style jsx global>{darkStylesheet}</style>
    </div>
  );
}
