import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-overlay.scss';
import BaseComponent from '../BaseComponent';

class Overlay extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'Overlay'});
    this.state = {
      open: props.open || props.visible || false
    };
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscKeyUp = this._handleEscKeyUp.bind(this);
  }

  componentDidMount(){
    window.addEventListener('keyup', this._handleEscKeyUp);
  }

  componentWillUnmount(){
    window.removeEventListener('keyup', this._handleEscKeyUp);
  }

  componentWillReceiveProps(nextProps){
    this.setState({open: nextProps.open});
  }

  _handleEscKeyUp(e){
    if(e.keyCode === 27 && !this.props.ignoreEscapeKeyUp){
      if(this.props.onEscapeKeyUp){
        this.props.onEscapeKeyUp(e);
      }
    }
  }

  _handleOverlayClick(e){
    if(this.props.onOverlayClick && !this.props.ignoreOverlayClick){
      this.props.onOverlayClick(e);
    }

  }

  close(){
    this.setState({open: false});
  }

  open(){
    this.setState({open: true});
  }

  render(){
    const {
      style,
      onOverlayClick,
      ignoreOverlayClick,
      ignoreEscapeKeyUp,
      zIndex = 900,

      children
    } = this.props;

    const { open } = this.state;

    const baseClasses = classnames('px-overlay', {
      'px-overlay--is-open': open,
      'px-overlay--invisible': !open
    });

    return (
      <div className={baseClasses} onClick={this._handleOverlayClick} style={style}>
        {children}
        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}

Overlay.defaultProps = {
  fullScreen: false,
  onEscapeKeyUp: null,
  onOverlayClick: null,
  onRequestClose: null,
  ignoreEscapeKeyUp: false,
  ignoreBackdropClick: false
};
export default Overlay;
