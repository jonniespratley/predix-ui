import React from 'react';
import style from './style.scss';

/**
 * {{dashCase name}} component
 */
export default ({label = 'Button', children}) => (
  <div className='{{dashCase name}}'>
    <h4>{label}</h4>
    <div>{children}</div>
    <style jsx>{style}</style>
  </div>
);
