import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-input.scss';
import BaseComponent from '../BaseComponent';

/**
 *  component
 */
export default class Input extends BaseComponent {
  constructor(props){
    super(props, {displayName: 'Input'});
    this.state = {};
  }
	render() {

    const {
			label = 'Input',
			style,
      type = 'text',
      placeholder = "Type something...",
			children
		} = this.props;

		const baseClasses = classnames(
      'px-input',
      {'px-input--children': children}
    );

		const inputClassnames = classnames(
      'text-input',
      {'input--regular': true}
    );

		return (
			<div className={baseClasses} style={style}>
				<h4 className={stylesheet.title}>{label}</h4>
				<div>{children}</div>
        <label htmlFor="input1" >Input Label</label>
        <input id="input1" placeholder={placeholder} className={inputClassnames} type={type}/>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}
}
