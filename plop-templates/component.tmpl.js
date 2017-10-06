import React from 'react';
import classnames from 'classnames';
import stylesheet from './{{dashCase name}}.css';
import BaseComponent from '../base-component';

/**
 * px-example-component component
 */
export default class {{titleCase name}} extends BaseComponent {
  constructor(props){
    super(props, {displayName: '{{dashCase name}}'});
    this.state = {};
  }
	render() {

    const {
			label = '{{dashCase name}}',
			style,
			children
		} = this.props;

		const baseClasses = classnames(
      '{{dashCase name}}',
      {'{{dashCase name}}--children': children}
    );

		return (
			<div className={baseClasses} style={style}>
				<h4 className={stylesheet.title}>{label}</h4>
				<div>{children}</div>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}
}
