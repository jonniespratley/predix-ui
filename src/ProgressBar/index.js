import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-progress-bar.scss';

/**
 * ProgressBar component
 */
export default ({

  value = 0,
  max = 100,
  min = 0,
  infinite,
  children
}) => {
  const baseClasses = classnames(
    'px-progress-bar',
    {'infinite': infinite }
  );

  const _computeRatio = (v) => {
    return v < 0 ? 0 : (v > 100 ? 1 : v / 100);
  };
  let transform = 'scaleX(' + _computeRatio(value) + ')';
  let fillStyle = {};
  fillStyle.transform = fillStyle.WebkitTransform = transform;

  return (
    <div className={baseClasses} role='progressbar'
      aria-valuemin={min}
      aria-valuemax={max}
    >
      <div id="background" className='background'>
        <div id="fill" className='fill' style={fillStyle}></div>
      </div>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
