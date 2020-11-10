import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PopperContent from './PopperContent';
import { omit, mapToCssModules, getTarget } from '../utils';

const DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};

const defaultProps = {
  isOpen: false,
  disabled: false,
  target: null,
  innerClassName: null,
  cssModule: null,
  className: null,
  container: null,
  modifiers: null,
  hideArrow: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: () => {}
};

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.getRef = this.getRef.bind(this);
    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    const { target } = this.props;
    this._target = getTarget(target);
    this.handleProps();
  }

  componentDidUpdate() {
    this.handleProps();
  }

  componentWillUnmount() {
    this.clearShowTimeout();
    this.clearHideTimeout();
    this.removeTargetEvents();
  }

  getRef(ref) {
    this._popover = ref;
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return delay[key] === 'NaN' ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.clearHideTimeout();
    this.addTargetEvents();
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
    }
  }

  hide() {
    this.clearShowTimeout();
    this.removeTargetEvents();
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
    }
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  handleDocumentClick(e) {
    if (
      e.target !== this._target
      && !this._target.contains(e.target)
      && e.target !== this._popover
      && !(this._popover && this._popover.contains(e.target))
    ) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen) {
        this.toggle(e);
      }
    }
  }

  addTargetEvents() {
    ['click', 'touchstart'].forEach(event => document.addEventListener(event, this.handleDocumentClick, true));
  }

  removeTargetEvents() {
    ['click', 'touchstart'].forEach(event => document.removeEventListener(event, this.handleDocumentClick, true));
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    const {
      innerClassName, isOpen, placement, className, cssModule
    } = this.props;

    if (!isOpen) {
      return null;
    }

    const attributes = omit(this.props, Object.keys(PropTypes));
    const classes = mapToCssModules(classNames('popover-inner', innerClassName), cssModule);

    const popperClasses = classNames(
      'popover',
      'show',
      `bs-popover-${placement}`,
      className
    );

    return (
      <PopperContent
        className={popperClasses}
        {...this.props}
      >
        <div {...attributes} className={classes} ref={this.getRef} />
        <style>
          {`
          .popover{
            top: 0;
            left: 0;
            z-index: 1060;
            max-width: 276px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            text-align: left;
            text-decoration: none;
            text-shadow: none;
            text-transform: none;
            letter-spacing: normal;
            word-break: normal;
            word-spacing: normal;
            white-space: normal;
            line-break: auto;
            font-size: 1rem;
            word-wrap: break-word;
            background-clip: padding-box;
            border: 1px solid var(--px-popover-border-color, #000);
            background: var(--px-popover-background-color, #fff);
            color: var(--px-popover-text-color, #000);
            box-shadow: 0 1px 3px 0 var(--px-popover-shadow-color, #000);
            position: absolute;
            display: block;
          }
            .popover,
            .popover .arrow {
                position: absolute;
                display: block
            }

            .popover .arrow {
                width: 1rem;
                height: .5rem;
                margin: 0 .3rem
            }

            .popover .arrow:after,.popover .arrow:before {
                position: absolute;
                display: block;
                content: "";
                border-color: transparent;
                border-style: solid
            }

            .bs-popover-auto[x-placement^=top],.bs-popover-top {
                margin-bottom: .5rem
            }

            .bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow {
                bottom: calc((.5rem + 1px) * -1)
            }

            .bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:after,.bs-popover-top .arrow:before {
                border-width: .5rem .5rem 0
            }

            .bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:before {
                bottom: 0;
                border-top-color: rgba(0,0,0,.25)
            }

            .bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-top .arrow:after {
                bottom: 1px;
                border-top-color: #fff
            }

            .bs-popover-auto[x-placement^=right],.bs-popover-right {
                margin-left: .5rem
            }
            .bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow {
                left: calc((.5rem + 1px) * -1);
                width: .5rem;
                height: 1rem;
                margin: .3rem 0
            }

            .bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:after,.bs-popover-right .arrow:before {
                border-width: .5rem .5rem .5rem 0
            }

            .bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:before {
                left: 0;
                border-right-color: rgba(0,0,0,.25)
            }

            .bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-right .arrow:after {
                left: 1px;
                border-right-color: #fff
            }

            .bs-popover-auto[x-placement^=bottom],.bs-popover-bottom {
                margin-top: .5rem
            }

            .bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow {
                top: calc((.5rem + 1px) * -1)
            }

            .bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:after,.bs-popover-bottom .arrow:before {
                border-width: 0 .5rem .5rem
            }

            .bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:before {
                top: 0;
                border-bottom-color: rgba(0,0,0,.25)
            }

            .bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-bottom .arrow:after {
                top: 1px;
                border-bottom-color: #fff
            }

            .bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before {
                position: absolute;
                top: 0;
                left: 50%;
                display: block;
                width: 1rem;
                margin-left: -.5rem;
                content: "";
                border-bottom: 1px solid #f7f7f7
            }

            .bs-popover-auto[x-placement^=left],.bs-popover-left {
                margin-right: .5rem
            }

            .bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow {
                right: calc((.5rem + 1px) * -1);
                width: .5rem;
                height: 1rem;
                margin: .3rem 0
            }

            .bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:after,.bs-popover-left .arrow:before {
                border-width: .5rem 0 .5rem .5rem
            }

            .bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:before {
                right: 0;
                border-left-color: rgba(0,0,0,.25)
            }

            .bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-left .arrow:after {
                right: 1px;
                border-left-color: #fff
            }
        `}

        </style>
      </PopperContent>
    );
  }
}


Popover.defaultProps = defaultProps;

Popover.propTypes = {
  innerClassName: PropTypes.string,
  target: PropTypes.oneOfType(PropTypes.element, PropTypes.string),
  container: PropTypes.element,
  cssModule: PropTypes.objectOf(PropTypes.string),
  modifiers: PropTypes.objectOf(PropTypes.string),
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  hideArrow: PropTypes.bool,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number
  }),
  toggle: PropTypes.func
};

export default Popover;
