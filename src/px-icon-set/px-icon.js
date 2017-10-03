import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-icon.scss';

//import IronIcon from '../iron-components/iron-icon';
import com from './px-icon-set-communication';
import utl from './px-icon-set-utility';
import doc from './px-icon-set-document';
import nav from './px-icon-set-navigation';
import obj from './px-icon-set-object';
import vis from './px-icon-set-vis';
import fea from './px-icon-set-feature';


const iconSets = Object.assign({}, doc, nav, obj, vis, fea, com, utl);

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
    width: size,
    height: size
  };
  return (
    <svg viewBox={`0 0 22 22`}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      dangerouslySetInnerHTML={_renderRawHtml(icon)}
      style={style}>
    </svg>
  );
}

const getIconSvgByName = (name) =>{
  try {
    let n = name.split(':');
    name = name.replace(':', '-');
    console.log('getIconName', name);
    return iconSets[name];
  } catch (e) {
    console.error('Cannot find icon', name);
    return name;
  }
}


const renderSvgIcon = (name, size) =>{
  const icon = getIconSvgByName(name);
  return _renderSvgIcon(icon, size);
};


/**
 * px-icon component
 *
 * TODO Right now we are just using iron-icons set
 */
export default ({
  icon,
  size = 22,
  children
}) => {

  let style = {
    height: size,
    width: size,
    color: 'inherit',
    display: 'inline-block'
  };

  const baseClasses = classnames(
    'px-icon'
  );

  return (
    <div className={baseClasses} style={style}>
      {renderSvgIcon(icon, size)}
      <style jsx>{stylesheet}</style>
    </div>
  );
}
