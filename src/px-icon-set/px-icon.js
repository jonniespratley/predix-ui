import React from 'react';
import classnames from 'classnames';

import stylesheet from './style.scss';

const iconSets = {
  'px-fea': {
    analysis: ''
  },
  'px-doc': {
    
  },
  'px-utl': {},
  'px-com': {
    chat: `<path d="M1.38 23.37V2.5h23v15l-17-.09z" transform="translate(-.88 -2)" stroke-linejoin="round"/><path stroke-linejoin="round" d="M25.27 11.5h4.38v17l-5-5h-13v-6.35"/>`,
    comment: `<g id="comment"><path stroke-linejoin="round" d="M15 28.5l-5.14-7H.5V.5h29v21h-9.36l-5.14 7zm-9.35-22h18.7m-18.7 4h13.09m-13.09 4h7.48"/></g>`,
    email: `<g id="email"><path stroke-linejoin="round" d="M29.5 2.63L15 13.5.5 2.63V.5h29v2.13z"/><path stroke-linejoin="round" d="M.5 6v15.5h29V6"/></g>`,
    message: `<g id="message"><path stroke-linejoin="round" d="M.5 27.17V.5h25v21.67"/><path d="M2.5 28.08a2.5 2.5 0 1 0 5 0v-2.5h23v2.5a2.5 2.5 0 0 1-2.5 2.5H5" transform="translate(-2 -.92)" stroke-linejoin="round"/><path stroke-linejoin="round" d="M5 5.67h14m-14 5h16m-16 5h14"/></g>`,
    phone: `<g id="phone"><path stroke-linejoin="round" d="M1.62 14.44l-.18.09m14.12 13.85l-.09.18"/><path d="M23.48 30.5a21.73 21.73 0 0 1-6.92-1.12A22 22 0 0 1 2.62 15.44a21.94 21.94 0 0 1 0-13.94H8l3.74 9.35L6 13.75A18.34 18.34 0 0 0 18.25 26l2.89-5.78L30.5 24v5.4a21.76 21.76 0 0 1-7.02 1.1z" transform="translate(-1 -1)" stroke-linejoin="round"/></g>`,
    sms: `<g id="sms"><path stroke-linejoin="round" d="M20.5 18v11.5H.5V.5h20V3"/><path stroke-linejoin="round" d="M12.5 4.5h17v11h-12l-5 5v-16zm-3 21h3v2h-3zm-8.5-2h20"/></g>`
  },
  'px-obj': {},
  'px-vis': {},
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
  console.log('getIconName', name);
  try {
    let n = name.split(':');
    return iconSets[n[0]][n[1]];
  } catch (e) {
    console.error('Cannot find icon', name);
    return name;
  }
}

/**
 * px-icon-set component
 */
export default ({
  icon,
  size = 16,
  children
}) => {

  let style = {
    height: size,
    width: size,
    display: 'inline-block'
  };

  const baseClasses = classnames(
    'px-icon'
  );

  return (
    <div className={baseClasses} style={style}>
      { _renderSvgIcon(getIconName(icon), size) }
    </div>
  );
}
