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
			label,
			style,

      type = 'text',
      className = 'px-input',
      placeholder,

      onChange,

      autoFocus,
      disabled,

      inputProps,
      inputRef,

			children
		} = this.props;

		const baseClasses = classnames(
      className
    );

		const inputClassnames = classnames(
      'text-input',
      {'input--regular': true}
    );

		return (
			<div className={baseClasses} style={style}>
        {label && <label htmlFor="input1">{label}</label>}
        <input id="input1"
          {...inputProps}
          placeholder={placeholder}
          className={inputClassnames}
          type={type}/>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}
}

Input.defaultProps = {
  /** The label */
  label: null,
  /** The input value, required for a controlled component. */
  value: null,
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
