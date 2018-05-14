/* eslint-disable */

const $baseFontSize = '15px';

function calculateRem($size) {
  const $remSize = $size / $baseFontSize;
  const $remUnit = '1rem';
  return $remSize * $remUnit;
}

function remToPx($size) {
  const $remUnit = '1rem';
  return ($rem / $remUnit) * $baseFontSize;
}

const helpers = { calculateRem, remToPx };

export default helpers;
