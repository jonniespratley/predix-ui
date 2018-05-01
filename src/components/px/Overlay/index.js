import React from 'react';
import PropTypes from 'prop-types';
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
Overlay.defaultProps = {
  className: 'px-overlay'
};
Overlay.displayName = 'Overlay';

class OverlayComponent extends React.Component {
  constructor(props) {
    super(props, { displayName: 'Overlay' });
    this.state = {
      opened: props.opened
    };
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscKeyUp = this._handleEscKeyUp.bind(this);
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
    if (this.props.onRequestClose) {
      this.props.onRequestClose(this.state);
    }
    this.setState({ opened: false });
  }

  open() {
    this.setState({ opened: true });
  }

  render() {
    const {
      children,
      fullScreen
    } = this.props;
    const {
      opened
    } = this.state;
    return (
      <Overlay
        onKeyUp={this._handleEscKeyUp}
        fullScreen={fullScreen}
        invisible={!opened}
        onClick={this._handleOverlayClick}
      >
        {children}
      </Overlay>
    );
  }
}

OverlayComponent.defaultProps = {
  children: null,
  opened: false,
  fullScreen: false,
  onEscapeKeyUp: null,
  onOverlayClick: null,
  onRequestClose: null,
  ignoreEscapeKeyUp: false,
  ignoreOverlayClick: false
};

OverlayComponent.propTypes = {
  children: PropTypes.node,
  opened: PropTypes.bool,
  fullScreen: PropTypes.bool,
  onEscapeKeyUp: PropTypes.func,
  onOverlayClick: PropTypes.func,
  onRequestClose: PropTypes.func,
  ignoreEscapeKeyUp: PropTypes.bool,
  ignoreOverlayClick: PropTypes.bool
};

OverlayComponent.displayName = 'Overlay';

export default OverlayComponent;
