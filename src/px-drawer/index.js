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
  //handleToggle = () => this.setState({open: !this.state.open});

  //handleClose = () => this.setState({open: false});

  toggle(){
    console.log('toggle');
  }
  _open(){
    console.log('open');
  }
  _close(){
    console.log('close');
  }

  render(){
    const {
      style,
      className = 'drawer', //root element class
      containerClassName, //classname of container

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

    const drawerClasses = classnames(
      baseClassName,
      {[`${baseClassName}--is-docked`]: docked},
      {[`${baseClassName}--is-open`]: open}
    );

    const overlayClasses = classnames(
      overlayClassName,
      {[`${overlayClassName}--is-open`]: open}
    );

    const classes = classnames(
      className,
      { [`drawer--${align}`]: true },
      {[`${className}--is-open`]: open},
      {[`${className}--is-docked`]: docked},
    );

    return (
      <div className={drawerClasses}>
        {overlay && <div id="overlay" style={overlayStyle} onClick={onOverlayClick} className={overlayClasses}></div>}
        <div id="drawer" className={classes} style={style}>
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
