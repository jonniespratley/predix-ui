import React from 'react';
import classnames from 'classnames';

//import stylesheet from './px-key-value-pair.scss';

/**
 * KeyValuePair component
 */
export default ({
  label = 'KeyValuePair',
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
      
    </div>
  );
}
