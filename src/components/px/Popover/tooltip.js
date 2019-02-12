import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getTarget, DOMElement, Placements, setPosition } from '../utils';

// Used for default delays
const DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    // Private interval props
    this._target = null;
    this._element = React.createRef();
    this._hideTimeout = null;
    this._showTimeout = null;

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.handleTargetEvents = this.handleTargetEvents.bind(this);
  }

  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.addTargetEvents();
    this.handleProps();
  }

  _componentDidUpdate() {
    this.handleProps();
  }

  componentWillUnmount() {
    this.clearTimeouts();
    this.removeTargetEvents();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  handleTargetEvents(e) {
    switch (e.type) {
      case 'mouseover':
        this.show();
        break;
      case 'mouseout':
        this.hide();
        break;
      default:
        break;
    }
  }

  addTargetEvents() {
    ['mouseover', 'mouseout'].forEach(event =>
      this._target.addEventListener(event, this.handleTargetEvents, true));
  }

  removeTargetEvents() {
    ['mouseover', 'mouseout'].forEach(event =>
      this._target.removeEventListener(event, this.handleTargetEvents, true));
  }

  show() {
    const pos = this.props.placement;
    const target = this._target;
    const tooltip = this._element.current;
    setPosition(tooltip, target, pos);
    this.clearHideTimeout();
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
    }
  }

  hide() {
    this.clearShowTimeout();
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
    }
  }

  toggle = (e) => {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }
    return this.props.toggle(e);
  };

  clearTimeouts() {
    this.clearHideTimeout();
    this.clearShowTimeout();
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  getDelay(state) {
    let delay;
    switch (state) {
      case 'show':
        delay = this.props.onMouseEnterDelay;
        break;
      case 'hide':
        delay = this.props.onMouseLeaveDelay;
        break;
      default:
        delay = DEFAULT_DELAYS.show;
        break;
    }
    return delay;
  }

  render() {
    const { isOpen, children } = this.props;
    const classes = classNames('tooltip', { 'tooltip--is-open': isOpen });

    if (!isOpen) {
      //  return null;
    }

    return (
      <span
        role="tooltip"
        aria-hidden={!isOpen}
        ref={this._element}
        className={classes}
      >
        {children}
      </span>
    );
  }
}

Tooltip.defaultProps = {
  children: null,
  disabled: false,
  isOpen: false,
  onMouseEnterDelay: null,
  onMouseLeaveDelay: null,
  placement: 'top',
  toggle: null
};

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.element
  ]),
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  onMouseEnterDelay: PropTypes.number,
  onMouseLeaveDelay: PropTypes.number,
  placement: PropTypes.oneOf(Placements),
  toggle: PropTypes.func,
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement])
    .isRequired
};
export default Tooltip;
