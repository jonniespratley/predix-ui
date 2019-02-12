/**
 * This function checks if the passed argument is a function
 * @param {*} functionToCheck The function
 */
export function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
}

/**
 * This function handles checking if a property of a component is an actual DOM element.
 * @param {Object} props The props
 * @param {String} propName The name of the prop
 * @param {String} componentName The name of the component
 */
export function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected prop to be an instance of Element. Validation failed.`);
  }
}

/**
 * This function handles locating the target DOM element.
 * @param {DOMElement} target The target element to locate.
 */
export function getTarget(target) {
  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && document) {
    let selection = document.querySelector(target);
    if (selection === null) {
      selection = document.querySelector(`#${target}`);
    }
    if (selection === null) {
      throw new Error(`The target '${target}' could not be identified in the dom, tip: check spelling`);
    }
    return selection;
  }
  return target;
}

/** Placements available for the tooltip */
export const Placements = ['top', 'bottom', 'right', 'left'];

/** Replicating jQuery Offset Methods * */

export function isWindow(obj) {
  return obj !== null && obj === obj.window;
}

export function getWindow(elem) {
  return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
}

/**
 * This function handles getting the position of an element.
 * @param {DOMElement} elem The target element
 */
export function offset(elem) {
  let box = { top: 0, left: 0 };
  const doc = elem && elem.ownerDocument;
  const docElem = doc.documentElement;

  if (typeof elem.getBoundingClientRect !== typeof undefined) {
    box = elem.getBoundingClientRect();
  }
  const win = getWindow(doc);
  return {
    top: box.top + win.pageYOffset - docElem.clientTop,
    left: box.left + win.pageXOffset - docElem.clientLeft
  };
}

/**
 * This function handles getting the dimensions of an element.
 * @param {DOMElement} element The target element
 */
export function getElemDimensions(element) {
  const info = {
    left: offset(element).left,
    top: offset(element).top
  };

  element.classList.add('fake');
  info.width = element.offsetWidth;
  info.height = element.offsetHeight;
  element.classList.remove('fake');
  return info;
}
/**
 * This function handles setting the position of the tooltip relative to the target.
 * @param {DOMElement} tooltip The target tooltip
 * @param {DOMElement} source The target source
 * @param {String} placement The position of the tooltip
 */
export function setPosition(tooltip, source, placement) {
  const _pos = Placements;
  const sourceDimensions = getElemDimensions(source);
  const tooltipDimensions = getElemDimensions(tooltip);
  const offsetSize = 0;

  // The best target x, y positions
  const imaginaryPositions = {
    if_top_y:
      sourceDimensions.top - tooltipDimensions.height - offsetSize,
    if_bottom_y: sourceDimensions.top + sourceDimensions.height,
    if_left_x: sourceDimensions.left - tooltipDimensions.width,
    if_right_x: sourceDimensions.left + sourceDimensions.width,
    if_vertical_x:
      sourceDimensions.left + (sourceDimensions.width / 2 - tooltipDimensions.width / 2),
    if_horizontal_y:
      sourceDimensions.top + (sourceDimensions.height / 2 - tooltipDimensions.height / 2) - offsetSize
  };

  // The target x, y positions
  const positions = {
    top: {
      y_pos: imaginaryPositions.if_top_y,
      x_pos: imaginaryPositions.if_vertical_x
    },
    bottom: {
      y_pos: imaginaryPositions.if_bottom_y,
      x_pos: imaginaryPositions.if_vertical_x
    },
    right: {
      y_pos: imaginaryPositions.if_horizontal_y,
      x_pos: imaginaryPositions.if_right_x
    },
    left: {
      y_pos: imaginaryPositions.if_horizontal_y,
      x_pos: imaginaryPositions.if_left_x
    }
  };
  const key = Object.keys(positions)[
    computeBestPosition(imaginaryPositions, tooltipDimensions, placement)
  ];

  tooltip.classList.remove(..._pos);
  tooltip.classList.add(key);

  Object.assign(tooltip.style, {
    left: `${positions[key].x_pos}px`,
    top: `${positions[key].y_pos}px`
  });
}

/**
 * This function handles returning the best position to place the tooltip.
 * @param {Object} imaginaryPositions Positions to place
 * @param {Object} tooltipDimensions Dimensions of tooltip
 * @param {String} placement Placement of tooltip
 */
export function computeBestPosition(
  imaginaryPositions,
  tooltipDimensions,
  placement
) {
  const screenTop = window.pageYOffset;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const selector = [0, 0, 0, 0];

  if (screenTop < imaginaryPositions.if_top_y) {
    selector[0] += 1;
    if (placement === 'top') {
      selector[0] += 2;
    }
  }

  if (
    screenTop > imaginaryPositions.if_top_y ||
    screenTop < imaginaryPositions.if_bottom_y
  ) {
    selector[1] += 1;
    if (placement === 'bottom') {
      selector[1] += 2;
    }
  }

  if (
    imaginaryPositions.if_vertical_x < 0 ||
    (placement === 'right' &&
      imaginaryPositions.if_right_x + tooltipDimensions.width <
        screenWidth)
  ) {
    selector[2] += 1;
    if (placement === 'right') {
      selector[2] += 2;
    }
  }

  if (imaginaryPositions.if_left_x > 0) {
    selector[3] += 1;
    if (placement === 'left') {
      selector[3] += 2;
    }
  }

  return selector.indexOf(Math.max(...selector));
}
