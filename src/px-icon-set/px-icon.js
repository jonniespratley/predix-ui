import React from 'react';
import classnames from 'classnames';
import stylesheet from './style.scss';

const iconSets = {
  'px-com': {},
  'px-doc': {},
  'px-obj': {},
  'px-nav': {}
};

const _renderRawHtml = (h) =>{
  return {
    __html: h
  }
};

const _renderSvgIcon = (icon, size) => {
  console.log('_renderSvgIcon', icon);
  let style = {
    pointerEvents: 'none',
    display: 'block',
    width: '100%',
    height: '100%'
  };
  return (
    <svg viewBox={`0 0 ${size} ${size}`}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      dangerouslySetInnerHTML={_renderRawHtml(icon)}
      style={style}>
    </svg>
  );
}

const getIconName = (name) =>{
  try {
    let n = name.split(':');
    name = name.replace(':', '-');
    console.log('getIconName', name);
    return iconSets[n[0]][n[1]];
  } catch (e) {
    console.error('Cannot find icon', name);
    return name;
  }
}

/**
 * px-icon component
 */
export default ({
  icon,
  size = 16,
  children
}) => {

  let style = {
    height: size,
    width: size,
    color: 'inherit',
    display: 'inline-block'
  };
  let name = icon && icon.replace(':', '-');

  const baseClasses = classnames(
    'px-icon'
  );
  const iconClasses = classnames(
    'icon',
    {[`${name}`]: icon}
  );
  return (
    <div className={baseClasses} style={style}>
      {/* _renderSvgIcon(getIconName(icon), size)*/ }
      <i className={iconClasses}></i>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
