import React from 'react';
export default ({title = 'Card', children}) => (
  <div>
    <header>{title}</header>
    <div>{children}</div>
  </div>
);
