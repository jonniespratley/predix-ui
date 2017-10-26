import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-example-component.scss';
import BaseComponent from '../BaseComponent';

/**
 * px-example-component component
 */
export default class ExampleComponent extends BaseComponent {
  constructor(props){
    super(props, {name: 'ExampleComponent'});
  }
	render() {
		const {
			label = 'px-example-component',
			style,
			children
		} = this.props;

		const baseClasses = classnames('px-example-component', {'px-example-component--children': children});

		return (
			<div className={baseClasses} style={style}>
				<h4 className={stylesheet.title}>{label}</h4>
				<div>{children}</div>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}

}
