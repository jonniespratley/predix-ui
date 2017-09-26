import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * px-key-value-pair component
 */
export default ({
  label = 'px-key-value-pair',
  value,
  size,
  uom,
  children
}) => {

const _getAdjustedSize = (s) => {
  return (
    s === 'alpha' ? 'delta' :
    s === 'beta' ? 'epsilon' :
    s === 'gamma' ? 'value' :
    s === 'delta' ? 'value' : 'zeta'
  );
};
  const baseClassnames = classnames(
    'px-key-value-pair'
  );
  const valueClassnames = classnames(
    size,
    `kvp-value--${size}`
  );

  return (
    <div className={baseClassnames}>
      <div className='label'>{label}</div>
      <div className={valueClassnames}>
        {value}
        {uom && <span className={_getAdjustedSize(size)}>{uom}</span>}
      </div>
      <style jsx>{style}</style>
    </div>
  );
}
