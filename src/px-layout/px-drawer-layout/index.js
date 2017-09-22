import React from 'react';
import style from './style.scss';

/**
 * px-layout component
 */
export default class DrawerLayout extends React.Component {

  render() {
    const {drawerContent, navbarContent, children} = this.props;
    console.log('render', this.props)
    return (
      <div className='px-drawer-layout'>
        <div id="container" className="l-drawer-layout layout">
          <div id="drawerContainer" className="l-drawer-layout__drawer layout__item u-1/4">
            <div id="drawerContent">{drawerContent}</div>
          </div>
          <div id="contentContainer" className="l-drawer-layout__container layout__item u-1/1">
            <nav id="navbarContent">{navbarContent}</nav>
            <div id="content">{children}</div>
          </div>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}
