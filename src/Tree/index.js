import React from 'react';
import classnames from 'classnames';
import stylesheet from './px-tree.scss';
import TreeNode from './px-tree-node';

import BaseComponent from '../BaseComponent';
/**
 * Tree component
 */
export default class Tree extends BaseComponent {
	constructor(props) {
		super(props, {displayName: 'Tree'});
		this.state = {
			selectedNode: null
		};
		this.onSelect = this.onSelect.bind(this);
	}


  onSelect(node) {
		if (this.state.selected) {
			this.state.selected.setState({ selected: false });
		}
		this.setState({ selected: node });
		node.setState({ selected: true });
		if (this.props.onSelect) {
			//this.props.onSelect(node);
		}
    this._log('onSelect', node);
	}

	render() {
		const {style, items, children} = this.props;
		const {selectedNode} = this.state;
		const baseClasses = classnames('px-tree');
    const _items = items.length ? items : [items];

		return (
			<div className={baseClasses} style={style}>
        <TreeNode data={items} onCategorySelect={this.onSelect}/>
				<style jsx>{stylesheet}</style>
			</div>
		);
	}
}
