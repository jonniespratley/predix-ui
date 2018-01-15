import React from 'react';
import BaseComponent from '../BaseComponent';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import stylesheet from './px-drawer.scss';



/**
 * Drawer component
 */
export default class Drawer extends BaseComponent {
  constructor(props){
    super(props, { name: 'Drawer' });
    this.state = {
      open: props.open || false,
      docked: props.docked || false
    };
  }

  isOpen(){
    return this.state.open;
  }

  toggle(){
    if(this.isOpen()){
      this._close();
    } else {
      this._open();
    }
  }

  _open(){
    this._log('open', this.state);
    this.setState({open: true});
  }

  _close(){
    this._log('close', this.state);
    this.setState({open: false});
    this.sideNavContent.style.transform = '';
  }

  componentDidMount() {
    this.hasUnprefixedTransform = 'transform' in document.documentElement.style;
    if (this.hasUnprefixedTransform) {
      this._setupTouchHandlers();
    }
    if(this.sideNavContent){
      this.sideNavContent.addEventListener('click', (e) =>{
        if(!this.state.docked){
          this._close();
        }
      });
    }

  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
  }

  _setupTouchHandlers() {
    this.touchStartX = null;
    this.sideNavTransform = null;
    if(this.sideNavContent){
      this.sideNavContent.addEventListener('touchstart', this.onSideNavTouchStart.bind(this));
      this.sideNavContent.addEventListener('touchmove', this.onSideNavTouchMove.bind(this));
      this.sideNavContent.addEventListener('touchend', this.onSideNavTouchEnd.bind(this));
    }

  }

  onSideNavTouchStart(e) {
    //e.preventDefault();
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
      fixed,
      className = 'drawer',
      containerClassName,
      overlay,
      //docked,
      overlayClassName = 'drawer__overlay',
      overlayStyle,
      onOverlayClick,

      type = 'persistent',
      align = 'left',
      children
    } = this.props;

    const { open, docked } = this.state;

    const baseClassName = 'px-drawer';
    const baseClasses = classnames(
      baseClassName,
      {[`${baseClassName}--is-docked`]: docked},
      {[`${baseClassName}--is-open`]: open}
    );

    const overlayClasses = classnames(
      overlayClassName,
      {[`${overlayClassName}--is-open`]: (open) }
    );

    const drawerClasses = classnames(
      className,
      { [`${className}--${type}`]: true },
      { [`${className}--${align}`]: true },
      {[`${className}--is-fixed`]: fixed},
      {[`${className}--is-open`]: open},
      {[`${className}--is-docked`]: docked},
    );

    return (
      <div className={baseClasses}>
        {!docked && <div id="overlay" style={overlayStyle} onClick={onOverlayClick} className={overlayClasses}></div>}
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
  docked: true,
  align: 'left'
};
