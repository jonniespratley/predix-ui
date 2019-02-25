import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const SpinnerRotateAnimation = keyframes`
 to {
    stroke-dashoffset: 0;
  }
`;
/*
const SpinnerAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`; */

const SpinnerCircle1 = styled.circle`
  fill: none;
  stroke: var(--px-spinner-background-color, gray);
  stroke-width: 5px;
`;

const SpinnerCircle2 = styled.circle`
  fill: none;
  stroke: var(--px-spinner-fill-color, black);
  stroke-width: 5px;
  stroke-dasharray: 283;
  stroke-dashoffset: 566;
  animation: ${SpinnerRotateAnimation} 1.5s infinite cubic-bezier(0.78, 0.13, 0.16, 0.87);
`;

const Component = ({ size, finished }) => (
  <div>
    {!finished && (
    <svg viewBox="0 0 100 100" height={size} width={size}>
      <SpinnerCircle1 cx="50" cy="50" r="45" />
      <SpinnerCircle2 cx="50" cy="50" r="45" transform="rotate(-45,50,50)" />
    </svg>
    )}
  </div>
);

Component.defaultProps = {
  size: 100,
  finished: false
};

Component.propTypes = {
  size: PropTypes.number,
  finished: PropTypes.bool
};

Component.displayName = 'Spinner';

export default Component;
