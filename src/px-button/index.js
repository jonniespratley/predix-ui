import classnames from 'classnames';
import React from 'react';
import stylesheet from './px-button.scss';

export default(props) => {
  const {
  	label,
    type = 'button',

    //colors
  	primary,
    tertiary,
    bare,
    disabled,
    icon,
    full,

    //sizes
    small,
    large,
    huge,

    //handlers
    onClick,
    style,
    attrs,
  	children
  } = props;
	let cssClasses = classnames(
    'px-button',
    'btn',
    { 'btn--primary': primary },
    { 'btn--tertiary': tertiary },
    { 'btn--bare': bare },
    { 'btn--disabled': disabled },
    { 'btn--icon': icon },
    { 'btn--small': small },
    { 'btn--large': large },
    { 'btn--huge': huge }
  );
	return (
    <button className={cssClasses} type={type} onClick={onClick} style={style} {...attrs}>
      {label}
      {children}
      <style jsx>{stylesheet}</style>
    </button>
	);
}
