import React from 'react';
import style from './style.scss';

/**
 * px-layout component
 */
export default ({label = 'Button', drawerContent, navbarContent, children}) => (
  <div className='px-drawer-layout'>
    <div id="container" className="l-drawer-layout flex flex--stretch">
      <div id="drawerContainer" className="l-drawer-layout__drawer">
        <div id="drawerContent">{drawerContent}</div>
      </div>
      <div id="contentContainer" className="l-drawer-layout__container">
        <nav id="navbarContent">{navbarContent}</nav>
        <div id="content">{children}</div>
      </div>
    </div>
    <style jsx>{style}</style>
  </div>
);
