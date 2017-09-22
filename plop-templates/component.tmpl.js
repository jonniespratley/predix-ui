import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

/**
 * {{dashCase name}} component
 */
export default ({label = '{{name}}', children}) => {
  const baseClasses = classnames('{{dashCase name}}', {
    '{{dashCase name}}--children': children
  });

  return (
    <div className={baseClasses}>
      <h4>{label}</h4>
      <div>{children}</div>
      <style jsx>{style}</style>
    </div>
  );
}
