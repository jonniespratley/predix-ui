import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';

import DocumentIcons from './px-icon-set-document';

import chatIcon from './icons/optimized-doc/chart_16x16.svg';

/**
 * px-icon-set component
 */
export default ({
  name = 'px-icon-set',
  size = 32,
  style,
  children
}) => {

  const baseClasses = classnames('px-icon-set');

  const getIcon = (name) =>{
    return {
      __html: chatIcon
    }
  };

  return (
    <div className={baseClasses} style={style}>
      {name}
      <div dangerouslySetInnerHTML={getIcon(name)} />
    </div>
  );
}
