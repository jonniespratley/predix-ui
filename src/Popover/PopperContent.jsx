import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Arrow, Popper } from 'react-popper';
import styled from '../styled';

import { mapToCssModules, getTarget } from '../utils';

const PopoverInner = styled.div`
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
`;

PopoverInner.displayName = 'PopoverInner';

class PopperContent extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlacementChange = this.handlePlacementChange.bind(this);
    this.setTargetNode = this.setTargetNode.bind(this);
    this.getTargetNode = this.getTargetNode.bind(this);
    this.state = {};
  }

  getChildContext() {
    return {
      popperManager: {
        setTargetNode: this.setTargetNode,
        getTargetNode: this.getTargetNode
      }
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    if (isOpen !== prevProps.isOpen) {
      this.handleProps();
    } else if (this._element) {
      // rerender
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.hide();
  }

  setTargetNode(node) {
    this.targetNode = node;
  }

  getTargetNode() {
    return this.targetNode;
  }

  getContainerNode() {
    const { container } = this.props;
    return getTarget(container);
  }

  handlePlacementChange(data) {
    const { placement } = this.state;
    if (placement !== data.placement) {
      this.setState({ placement: data.placement });
    }
    return data;
  }

  handleProps() {
    const { container, isOpen } = this.props;
    if (container !== 'inline') {
      if (isOpen) {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  hide() {
    if (this._element) {
      this.getContainerNode().removeChild(this._element);
      ReactDOM.unmountComponentAtNode(this._element);
      this._element = null;
    }
  }

  show() {
    this._element = document.createElement('div');
    this.getContainerNode().appendChild(this._element);
    this.renderIntoSubtree();
    if (
      this._element.childNodes && this._element.childNodes[0]
      && this._element.childNodes[0].focus
    ) {
      this._element.childNodes[0].focus();
    }
  }

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );
  }

  renderChildren() {
    const {
      cssModule,
      children,
      flip,
      offset,
      fallbackPlacement,
      placementPrefix,
      hideArrow,
      className,
      tag,
      modifiers,
      ...attrs
    } = this.props;

    const { placement } = this.state;
    const arrowClassName = mapToCssModules('arrow', cssModule);
    const newPlacement = (placement || attrs.placement).split('-')[0];
    const popperClassName = mapToCssModules(
      classNames(
        className,
        placementPrefix ? `${placementPrefix}-${newPlacement}` : newPlacement
      ),
      cssModule
    );

    const extendedModifiers = {
      offset: { offset },
      flip: { enabled: flip, behavior: fallbackPlacement },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange
      },
      ...modifiers
    };
    /* return (
      <Popper
        modifiers={extendedModifiers}
        {...attrs}
        component={tag}
        className={popperClassName}>
        {({ popperProps, restProps }) => (
         <PopoverInner {...popperProps} {...at}>
            {children}
            {!hideArrow &&
          <Arrow>
            {({ arrowProps, restProps }) => (
              <PopoverArrow
                className="popper__arrow"
                {...arrowProps}
              />
            )}
          </Arrow>}
          </PopoverInner>
        )}
    </Popper>
  ); */
    return (
      <Popper
        modifiers={extendedModifiers}
        {...attrs}
        component={tag}
        className={popperClassName}
      >
        {children}
        {!hideArrow && <Arrow className={arrowClassName} />}
      </Popper>
    );
  }

  render() {
    const { target, container, isOpen } = this.props;
    this.setTargetNode(getTarget(target));
    if (container === 'inline') {
      return isOpen ? this.renderChildren() : null;
    }

    return null;
  }
}

PopperContent.childContextTypes = {
  popperManager: PropTypes.shape.isRequired
};

PopperContent.defaultProps = {
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {},
  cssModule: {},
  children: null,
  placementPrefix: null,
  tag: 'div',
  target: null,
  className: null
};

PopperContent.propTypes = {
  placement: PropTypes.oneOf([
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
  ]),
  hideArrow: PropTypes.bool,
  isOpen: PropTypes.bool,
  offset: PropTypes.number,
  fallbackPlacement: PropTypes.string,
  flip: PropTypes.bool,
  placementPrefix: PropTypes.string,
  className: PropTypes.string,
  container: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  target: PropTypes.oneOfType([PropTypes.instanceOf(Element), Popper]),
  cssModule: PropTypes.objectOf(PropTypes.string),
  modifiers: PropTypes.objectOf(PropTypes.string)
};

export default PopperContent;
