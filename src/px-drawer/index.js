import React from 'react';
import style from './style.scss';
import classnames from 'classnames';

/**
 * px-drawer component
 */
export default class Drawer extends React.Component {
  toggle(){
    console.log('toggle');
  }
  open(){
    console.log('open');
  }
  close(){
    console.log('close');
  }
  render(){
    const {opened, fixed, overlay, persistent, align = 'left', children} = this.props;


    const drawerClasses = classnames(
      'px-drawer',
      {'px-drawer--opened': opened}
    );

    const overlayClasses = classnames(
      'drawer__overlay',
      {'drawer__overlay--opened': opened}
    );

    const classes = classnames(
      'drawer',
      { [`drawer--${align}`]: true },
      {'drawer--opened': opened},
      {'drawer--fixed': fixed},
      {'drawer--persistent': persistent},
    );

    return (
      <div className={drawerClasses}>
        <div id="overlay" className={overlayClasses}></div>
        <div id="drawer" className={classes}>
          <div id="drawerContent" className="drawer__content">
            <div>{children}</div>
          </div>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}
Drawer.defaultProps = {
  opened: false,
  fixed: false,
  persistent: false,
  align: 'left'
};
