import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-theme.scss';
//import darkStylesheet from './px-dark-theme.scss';

/**
 * Theme component
 */
export default ({
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
    <div className={baseClasses}>
      <div>{children}</div>
      <style>{`${stylesheet}`}</style>
    </div>
  );
}
