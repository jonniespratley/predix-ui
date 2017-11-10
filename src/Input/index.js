import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-input.scss';
import BaseComponent from '../BaseComponent';

/**
 *  component
 */
class Input extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'Input'});
    this.state = {};
  }
	render() {

    const {
      name,
			label,
			style,
      value,

      type,
      className,
      placeholder,

      //validation-states
      error,
      success,
      warning,

      //size lengths
      regular,
      tiny,
      small,
      large,
      huge,

      onChange,

      autoFocus,
      disabled,
      required,
      inline,

      inputProps,
      inputRef,

			children
		} = this.props;

		const baseClasses = classnames(
      'px-input',
      {'flex': inline},
      {'flex-middle': inline},
      className
    );
		const labelClasses = classnames(
      {'label--inline': inline}
    );

		const inputClassnames = classnames(
      'text-input',
      {'input--regular': regular},
      {'input--tiny': tiny},
      {'input--small': small},
      {'input--large': large},
      {'input--huge': huge},
      {'validation-error': error},
      {'validation-success': success},
      {'validation-warning': warning}
    );

		return (
			<div className={baseClasses} style={style}>
        {label && <label htmlFor={`${name}Input`} className={labelClasses}>{label}</label>}
        <input id={`${name}Input`}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          autoFocus={autoFocus}
          name={name}
          placeholder={placeholder}
          className={inputClassnames}
          type={type}
          {...inputProps}/>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}
}

Input.defaultProps = {
  /** The label */
  label: null,
  className: null,
  /** The input value, required for a controlled component. */
  value: undefined,
  /** Type of the input element. It should be a valid HTML5 input type. */
  type: 'text',
  /** If true, the input will be disabled. */
  disabled: null,
  /** The short hint displayed in the input before the user enters a value. */
  placeholder: null,
  /** Use that property to pass a ref callback to the native input component. */
  inputRef: null,
  /** Properties applied to the input element. */
  inputProps: null
};

export default Input;
