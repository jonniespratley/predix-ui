import React from 'react';
import classnames from 'classnames';
// import stylesheet from './px-overlay.scss';
import BaseComponent from '../BaseComponent';

import styled, { css } from 'styled-components';

const Overlay = styled.div`
  position        : fixed;
  top             : 0;
  right           : 0;
  bottom          : 0;
  left            : 0;
  z-index         : 900;
  background-color: var(--px-modal-overlay-color, rgba(0, 0, 0, 0.5));
  transition      : background-color 0.2s cubic-bezier(.78,.13,.16,.87);
  
  ${props => props.invisible && css`
     visibility      : hidden;
     background-color: transparent;
  `}
`;

class OverlayComponent extends BaseComponent {
  constructor(props) {
    super(props, { displayName: 'Overlay' });
    this.state = {
      opened: props.opened
    };
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscKeyUp = this._handleEscKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this._handleEscKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this._handleEscKeyUp);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ opened: nextProps.opened });
  }

  _handleEscKeyUp(e) {
    if (e.keyCode === 27 && !this.props.ignoreEscapeKeyUp) {
      if (this.props.onEscapeKeyUp) {
        this.props.onEscapeKeyUp(e);
      }
    }
  }

  _handleOverlayClick(e) {
    if (this.props.onOverlayClick && !this.props.ignoreOverlayClick) {
      this.props.onOverlayClick(e);
    }
  }

  close() {
    this.setState({ opened: false });
  }

  open() {
    this.setState({ opened: true });
  }

  render() {
    const {
      style,
      onOverlayClick,
      ignoreOverlayClick,
      ignoreEscapeKeyUp,
      zIndex = 900,
      children
    } = this.props;
    const { opened } = this.state;
    return (
      <Overlay invisible={!opened} onClick={this._handleOverlayClick}>
        {children}
      </Overlay>
    );
  }
}

OverlayComponent.defaultProps = {
  fullScreen: false,
  onEscapeKeyUp: null,
  onOverlayClick: null,
  onRequestClose: null,
  ignoreEscapeKeyUp: false,
  ignoreBackdropClick: false
};
OverlayComponent.displayName = 'Overlay';

export default OverlayComponent;
