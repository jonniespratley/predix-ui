import React from 'react';
import classnames from 'classnames';
import stylesheet from './style.scss';

import IronIcon from '../iron-components/iron-icon';

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



const pxIconSets = {
  'px-com': {
    '': ''
  },
  'px-doc': {
    'chart': '',
    'document': '',
    'document-csv': '',
    'image': 'image'
  },
  'px-utl': {
    'chevron-up': 'expand-less',
    'chevron': 'expand-more',
    'chevron-down': 'expand-more'
  },
  'px-obj': {},
  'px-nav': {
    back: 'arrow-back',
    up: 'arrow-up',
    next: 'arrow-next',
    more: 'more-horiz',
    menu: 'more-vert',
    favorite: 'grade',
    expand: 'expand-more',
    collapse: 'expand-less',
    'generic-user': 'person-outline',


    'grid-view': 'view-module'
  }
};


//Create a map of px icons to polymer icons (TEMPORTARY)
// Maps to http://dmfrancisco.github.io/react-icons/
const pxIconToPolymerIcon = (name) =>{
  let pieces = name.split(':');
  let ns = pieces[0];
  let n = pieces[1];
  if(pxIconSets[ns] && pxIconSets[ns][n]){
    n = pxIconSets[ns][n];
  }
  console.log('pxIconToPolymerIcon', ns, n);
  return n;
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

  const iconName = pxIconToPolymerIcon(icon);
  return (
    <div className={baseClasses} style={style} data-icon={iconName}>
      <IronIcon icon={iconName} size={size}/>
      <style jsx>{stylesheet}</style>
    </div>
  );
}
