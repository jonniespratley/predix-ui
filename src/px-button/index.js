import React from 'react';
import style from './style.scss';

export default ({label = 'Button', primary, children}) => (
  <button>
    {label}
    {children}
    <style jsx>{style}</style>
  </button>
);
