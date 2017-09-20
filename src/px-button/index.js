import React from 'react';
export default ({label = 'Button', primary, children}) => (
  <button>
    {label}
    {children}
  </button>
);
