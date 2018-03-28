import React from 'react';
import BaseComponent from '../BaseComponent';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import stylesheet from './px-drawer.scss';



import styled, {css} from 'styled-components';

const Drawer = styled.div`
  z-index: var(--px-drawer-z-index, 20);
  color: var(--px-drawer-font-color, black);
  background-color: var(--px-drawer-background-color, white);
  width: var(--px-drawer-width, 256px);
  height: var(--px-drawer-height, 100%);
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px, rgba(0, 0, 0, 0.23) 0 1px 4px;
  position: fixed;
  transition: var(--px-drawer-transition, transform 450ms cubic-bezier(0.23, 1, 0.32, 1));
  transform: translateX(-110%);
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;

  ${props => props.opened && css`
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  `}
  ${props => props.docked && css`
    transform: translateX(0);
  `}
  ${props => props.fixed && css`
    position: fixed;
  `}
  
  &::after {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 100%;
    visibility: visible;
    width: 20px;
    content: "";
  }
`;
Drawer.displayName = 'Drawer';

const DrawerContent = styled.div`
  overflow-x: hidden;
`;
DrawerContent.displayName = 'DrawerContent';

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  transform: translateZ(0);
  opacity: 0;
  background: var(--px-drawer-overlay-background, rgba(0, 0, 0, 0.5));
  z-index: -1;
  visibility: hidden;
  display: none;
  
  ${props => props.opened && css`
    opacity: 1;
    z-index: 15;
    visibility: visible;
    display: block;
  `}
    
`;
DrawerOverlay.displayName = 'DrawerOverlay';


/**
 * Drawer component
 */
export default class DrawerComponent extends BaseComponent {
  constructor(props){
    super(props, { name: 'Drawer' });
    this.state = {
      opened: props.opened || false,
      docked: props.docked || false
    };
  }

  isOpen(){
    return this.state.opened;
  }

  toggle(){
    if(this.isOpen()){
      this._close();
    } else {
      this._open();
    }
  }

  _open(){
    this._log('opened', this.state);
    this.setState({opened: true});
    if(this.props.onOpen){
      this.props.onOpen();
    }
  }

  _close(){
    this._log('close', this.state);
    this.setState({opened: false});
    this.sideNavContent.style.transform = '';
    if(this.props.onClose){
      this.props.onClose();
    }
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
      if(this.props.onSideNavTouchEnd){
         return this.props.onSideNavTouchEnd(e);
      }
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

    const { opened, docked } = this.state;

    const baseClassName = 'px-drawer';
    const baseClasses = classnames(
      baseClassName,
      {[`${baseClassName}--is-docked`]: docked},
      {[`${baseClassName}--is-opened`]: opened}
    );

    const drawerClasses = classnames(
      className,
      { [`${className}--${type}`]: true },
      { [`${className}--${align}`]: true },
      {[`${className}--is-fixed`]: fixed},
      {[`${className}--is-opened`]: opened},
      {[`${className}--is-docked`]: docked},
    );

    return (
      <div className={baseClasses}>
        {!docked && <DrawerOverlay onClick={onOverlayClick} opened={opened}/>}
        <div id="drawer" className={drawerClasses} style={style} ref={(e) => {this.sideNavContent = e;}}>
          <DrawerContent>{children}</DrawerContent>
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  opened: PropTypes.bool,
  docked: PropTypes.bool
};

Drawer.defaultProps = {
  opened: false,
  docked: true,
  align: 'left'
};
