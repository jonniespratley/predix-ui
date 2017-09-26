import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import stylesheet from './style.scss';



/**
 * px-drawer component
 */
export default class Drawer extends React.Component {
  constructor(props){
    super(props);
  }

  toggle(){
    console.log('toggle');
  }

  _open(){
    console.log('open');
  }

  _close(){
    console.log('close');
  }
  componentDidMount() {
    this.hasUnprefixedTransform = 'transform' in document.documentElement.style;
    if (this.hasUnprefixedTransform) {
      this._setupTouchHandlers();
    }
    console.log('componentDidMount', this);
  }
  _setupTouchHandlers() {
    this.touchStartX = null;
    this.sideNavTransform = null;
    this.sideNavContent.addEventListener('touchstart', this.onSideNavTouchStart.bind(this));
    this.sideNavContent.addEventListener('touchmove', this.onSideNavTouchMove.bind(this));
    this.sideNavContent.addEventListener('touchend', this.onSideNavTouchEnd.bind(this));
  }

  onSideNavTouchStart(e) {
    e.preventDefault();
    this.touchStartX = e.touches[0].pageX;
  }

  onSideNavTouchMove(e) {
    e.preventDefault();
    const newTouchX = e.touches[0].pageX;
    this.sideNavTransform = Math.min(0, newTouchX - this.touchStartX);
    this.sideNavContent.style.transform = 'translateX(' + this.sideNavTransform + 'px)';
  }

  onSideNavTouchEnd(e) {
    let TOUCH_SLOP = 8 * window.devicePixelRatio * 3;
    if (this.sideNavTransform < -TOUCH_SLOP) {
      this._close();
      return;
    }
    this._open();
  }

  render(){
    const {
      style,
      className = 'drawer',
      containerClassName,

      open,

      overlay,
      docked,

      overlayClassName = 'drawer__overlay',
      overlayStyle,
      onOverlayClick,

      zDepth = 2,
      align = 'left',
      children
    } = this.props;


    const baseClassName = 'px-drawer';
    const baseClasses = classnames(
      baseClassName,
      {[`${baseClassName}--is-docked`]: docked},
      {[`${baseClassName}--is-open`]: open}
    );

    const overlayClasses = classnames(
      overlayClassName,
      {[`${overlayClassName}--is-open`]: open}
    );

    const drawerClasses = classnames(
      className,
      { [`${className}--${align}`]: true },
      {[`${className}--is-open`]: open},
      {[`${className}--is-docked`]: docked},
    );

    return (
      <div className={baseClasses}>
        {overlay && <div id="overlay" style={overlayStyle} onClick={onOverlayClick} className={overlayClasses}></div>}
        <div id="drawer" className={drawerClasses} style={style} ref={(e) => {this.sideNavContent = e;}}>
          <div id="drawerContent" className="drawer__content">
            <div>{children}</div>
          </div>
        </div>
        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}

Drawer.propTypes = {
  open: PropTypes.bool,
  docked: PropTypes.bool
};

Drawer.defaultProps = {
  opened: false,
  fixed: false,
  persistent: false,
  align: 'left'
};
