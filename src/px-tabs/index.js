import React from 'react';
import style from './style.scss';

/**
 * px-tabs component
 */
export default ({label = 'Button', children}) => (
  <div className='px-tabs'>
    <h4>{label}</h4>
    <div>{children}</div>
    <style jsx>{style}</style>
  </div>
);
