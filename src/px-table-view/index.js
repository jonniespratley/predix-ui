import React from 'react';
import style from './style.scss';

/**
 * px-table-view component
 */
export default ({label = 'Button', children}) => (
  <div className='px-table-view'>
    <h4>{label}</h4>
    <div>{children}</div>
    <style jsx>{style}</style>
  </div>
);
