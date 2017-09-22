import React from 'react';
import style from './style.scss';

/**
 * px-layout component
 */
export default ({label = 'Button', children}) => (
  <div className='px-layout'>
    <h4>{label}</h4>
    <div>{children}</div>
    <style jsx global>{style}</style>
  </div>
);
