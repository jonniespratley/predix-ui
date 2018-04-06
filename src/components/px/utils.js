var globalCssModule = {};

export function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

export function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to `' + componentName +
      '`. Expected prop to be an instance of Element. Validation failed.'
    );
  }
}

export function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

export function mapToCssModules(className = "", cssModule = globalCssModule) {
  if (!cssModule) return className;
  return className
    .split(" ")
    .map(c => cssModule[c] || c)
    .join(" ");
}

export function getTarget(target) {
  if (isFunction(target)) {
    return target();
  }

  if (typeof target === "string" && document) {
    let selection = document.querySelector(target);
    if (selection === null) {
      selection = document.querySelector(`#${target}`);
    }
    if (selection === null) {
      throw new Error(
        `The target '${target}' could not be identified in the dom, tip: check spelling`
      );
    }
    return selection;
  }

  return target;
}

export const PopperPlacements = [
  "auto-start",
  "auto",
  "auto-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start"
];

export function omit(obj, omitKeys) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
