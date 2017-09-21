import React from 'react';
import style from './style.scss';

/**
 * px-drawer component
 */
export default ({label = 'drawer', children}) => (
  <div className='px-drawer'>
      <div id="overlay" className="drawer__overlay"></div>
      <div id="drawer" className="drawer">
        <div id="drawerContent" className="drawer__content">
          <div>{children}</div>
        </div>
      </div>
    <style jsx>{style}</style>
  </div>
);
