import classnames from 'classnames';
import React from 'react';
import style from './style.scss';

export default({
	label = 'Button',
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
	children
}) => {
	let cssClasses = classnames('btn',
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
    <button className={cssClasses} type={type} onClick={onClick}>
      {label}
      {children}
      <style jsx>
        {
            style
        }</style>
    </button>
	);
}
