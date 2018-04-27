/* eslint-disable */
/* src/styles/index - Hold methods that components use to export component with theme. */

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
/*

const $base-line-height         = 20px ;
const $base-text-color          = var(--px-base-text-color,  rgb(44,64,76));
const $base-background-color    = var(--px-base-background-color, rgb(255,255,255)) !default;
const $namespace                = null !default;
const $base-spacing-unit        = calculateRem($-base-font-size);
const $base-spacing-unit--tiny  = calculateRem(round($-base-line-height / 4));
const $base-spacing-unit--small = calculateRem(round($-base-line-height / 2));
const $base-spacing-unit--large = calculateRem($-base-line-height);
const $base-spacing-unit--huge  = calculateRem(round($inuit-base-line-height * 1.5));
*/
const helpers = { calculateRem, remToPx };
export default helpers;
