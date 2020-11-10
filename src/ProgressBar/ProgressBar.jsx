import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from '../styled';

const ProgressAnimation = keyframes`
  0% {
    left     : 0;
    right    : 100%;
    transform: scaleX(0);
  }
  50% {
    left     : 0;
    right    : 0;
    transform: scaleX(1);
  }
  100% {
    left     : 100%;
    right    : 0;
    transform: scaleX(0);
  }
`;

/* eslint-disable-next-line */
const _computeRatio = v => (v < 0 ? 0 : v > 100 ? 1 : v / 100);

const ProgressFill = styled.div`
  background-color: var(--px-progress-bar-fill-color, black);
  height: var(--px-progress-bar-height, 5px);
  transition: transform 1s cubic-bezier(0.78, 0.13, 0.16, 0.87);
  -webkit-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  overflow: hidden;

  ${props => props.value
    && css`
      transform: scaleX(${_computeRatio(props.value)});
    `}
  ${props => props.infinite
    && css`
      position: relative;
      animation: ${ProgressAnimation} 2s cubic-bezier(0.78, 0.13, 0.16, 0.87)
        infinite;
    `}
`;

const ProgressBackground = styled.div`
  background-color: var(--px-progress-bar-background-color, lightgray);
  height: var(--px-progress-bar-height, 5px);
`;

const ProgressBar = styled.div`
  height: var(--px-progress-bar-height, 5px);
`;

const Component = ({
  value, max, min, infinite
}) => (
  <div aria-valuemin={min} aria-valuemax={max}>
    <ProgressBar>
      <ProgressBackground>
        <ProgressFill value={value} infinite={infinite} />
      </ProgressBackground>
    </ProgressBar>
  </div>
);

Component.defaultProps = {
  value: 0,
  max: 100,
  min: 0,
  infinite: false
};

Component.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  infinite: PropTypes.bool
};
Component.displayName = 'ProgressBar';

export default Component;
