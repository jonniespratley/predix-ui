import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import stylesheet from './px-button.scss';


/**
 * Button component will render a button with Predix Design.
 */
const Button = (props) => {
  const {
  	label,
    className,
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
    id,
  	children
  } = props;
	let cssClasses = classnames(
    'px-button',
    'btn',
    className,
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
    <button className={cssClasses} type={type} onClick={onClick} style={style} {...attrs} id={id}>
      {label}
      {children}
      <style jsx>{stylesheet}</style>
    </button>
	);
}

Button.defaultProps = {
  disabled: false,
  label: null,
  onClick: () => {},
  style: null,
  type: 'button',
  id:null,
  attrs: {}
};
Button.propTypes = {
  /** Boolean indicating whether the button should render as disabled */
  disabled: PropTypes.bool,
  /** button label. */
  label: PropTypes.string,
  /** onClick event handler */
  onClick: PropTypes.func,
  /** Component styles */
  style: PropTypes.object,
  /** Any valid attributes to add to button element */
  attr: PropTypes.object
};
export default Button;
