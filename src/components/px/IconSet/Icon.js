import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css } from 'styled-components';
import IconSet from './';

const PxIcon = styled.i`
  color: var(--iron-icon-stroke-color, inherit);
  fill: var(--iron-icon-fill-color, none);
  stroke: var(--iron-icon-stroke-color, currentColor);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  vertical-align: middle;
  width: var(--iron-icon-width);
  height: var(--iron-icon-height);
  > svg {
    color         : var(--iron-icon-stroke-color, inherit);
    fill          : var(--iron-icon-fill-color, none);
    stroke        : var(--iron-icon-stroke-color, currentColor);
    position      : relative;
    vertical-align: middle;
  }
  ${props => props.color !== null && css`
    color: ${props.color} !important;
  `}
  &.hidden {
    display: none;
  }
`;

const IconSizes = {
  doc: 16,
  utl: 16,
  nav: 22,
  vis: 22,
  com: 32,
  fea: 32,
  obj: 32
};

const getIconSetSize = (name = '') => {
  const iconSet = name && name.replace(':', '-').split('-')[1];
  return IconSizes[iconSet];
};

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.createMarkup = this.createMarkup.bind(this);
  }
  createMarkup(icon) {
    const name = icon && icon.replace(':', '-');
    const html = this.getIcon(name);
    return { __html: html };
  }
  getIcon(name) {
    this.name = name;
    if (IconSet[name]) {
      return IconSet[name];
    }
    return name;
  }
  render() {
    const {
      icon,
      size,
      style,
      className,
      viewBox,
      color
    } = this.props;

    const iconSetSize = getIconSetSize(icon);

    const styles = {
      width: size || iconSetSize,
      height: size || iconSetSize
    };

    const svgStyles = Object.assign({
      pointerEvents: 'none',
      display: 'block'
    }, styles);

    const _viewBox = viewBox || `0 0 ${iconSetSize} ${iconSetSize}`;
    return (
      <PxIcon className={classnames('px-icon', className, icon.replace(':', '-'))} style={styles} color={color}>
        <svg
          viewBox={_viewBox}
          preserveAspectRatio="xMidYMid meet"
          dangerouslySetInnerHTML={this.createMarkup(icon) /* eslint-disable-line */ }
          style={Object.assign({}, svgStyles, style)}
        />
      </PxIcon>
    );
  }
}

Icon.defaultProps = {
  size: null,
  icon: '',
  viewBox: null,
  color: null,
  className: null,
  style: null
};

Icon.propTypes = {
  size: PropTypes.number,
  icon: PropTypes.string,
  viewBox: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.func
};

export default Icon;
