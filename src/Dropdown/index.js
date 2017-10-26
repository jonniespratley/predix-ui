import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-dropdown.scss';
import BaseComponent from '../BaseComponent';

/**
 * px-example-component component
 */
export default class Dropdown extends BaseComponent {
  constructor(props){
    super(props, {name: 'Dropdown'});
  }
	render() {
		const {
			label = 'px-example-component',
			style,
      items,
      selected,
      selectBy,
      selectedValues,
      selectedItems,
      disabled,
      opened,
      hover,
      focusedItem,
      hideChevron,
      boundTarget,
      preventCloseOnOutsideClick,
      displayValue,
			children
		} = this.props;

		const baseClasses = classnames('px-dropdown');

		return (
			<div className={baseClasses} style={style}>
				<h4 className={stylesheet.title}>{label}</h4>
				<div>{children}</div>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}

}
