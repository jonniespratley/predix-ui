import React from 'react';
import classnames from 'classnames';
//import stylesheet from './px-tree.scss';
import TreeNode from './TreeNode';
import BaseComponent from '../BaseComponent';
import styled, {css} from 'styled-components';




/**
 * Tree component
 */
class Tree extends BaseComponent {
	constructor(props) {
		super(props, {displayName: 'Tree'});
		this.state = {
			selectedNode: props.selectedNode || null,
			selected: props.selected || null
		};
		this.onSelect = this.onSelect.bind(this);
	}

  onSelect(node) {
		console.log('onSelect', node);
		if (this.state.selected) {
			this.state.selected.setState({ selected: false });
		}
		this.setState({ selected: node });
		node.setState({ selected: true });
		if (this.props.onChange) {
			this.props.onChange(node);
		}
    
	}


	render() {
		const { items, children } = this.props;
		const {selectedNode} = this.state;
		const baseClasses = classnames('px-tree');
    const _items = items.length ? items : [items];
		const treeStyle = {
			margin: 0,
			padding: 0
		};
		return (
			<ul className='px-tree' style={treeStyle}>
        {items && items.map((item, index) => (
						<TreeNode 
							key={index} 
							data={item} 
							{...item}
							onCategorySelect={this.onSelect}/>
					))
				}
			</ul>
		);
	}
}

Tree.defaultProps = {
	items: null,
	style: null,
	selected: null
};
export default Tree;