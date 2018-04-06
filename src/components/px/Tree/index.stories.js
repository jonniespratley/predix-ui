import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, object, boolean, number, select } from '@storybook/addon-knobs';

import {Viewport} from '@storybook/addon-viewport';
import Tree from './';
import TreeNode from './TreeNode';
const treeData = [{
	"label": "Leaf 0.0",
	"id": "leaf-0-0"
}, {
	"label": "Leaf 0.1",
	"id": "leaf-0-1"
}, {
	"label": "Leaf 0.2",
	"id": "leaf-0-2"
}, {
	"label": "Branch 0.3",
	"id": "branch-0-3",
	"isSelectable": false,
	"children": [{
			"label": "Leaf 1.0",
			"id": "leaf-1-0"
	}, {
			"label": "Branch 1.1",
			"id": "branch-1-1",
			"children": [{
					"label": "Leaf 2.0",
					"id": "leaf-2-0"
			}, {
					"label": "Leaf 2.1",
					"id": "leaf-2-1"
			}, {
					"label": "Leaf 2.2",
					"id": "leaf-2-2"
			}, {
					"label": "Leaf 2.3",
					"id": "leaf-2-3"
			}]
	}, {
			"label": "Leaf 1.2",
			"id": "leaf-1-2"
	}, {
			"label": "Branch 1.3",
			"id": "branch-1-3",
			"children": [{
					"label": "Leaf 2.0",
					"id": "leaf-2-0"
			}, {
					"label": "Leaf 2.1",
					"id": "leaf-2-1"
			}, {
					"label": "Leaf 2.2",
					"id": "leaf-2-2"
			}, {
					"label": "Leaf 2.3",
					"id": "leaf-2-3"
			}, {
					"label": "Leaf 2.4",
					"id": "leaf-2-4"
			}, {
					"label": "Leaf 2.5",
					"id": "leaf-2-5"
			}, {
					"label": "Leaf 2.6",
					"id": "leaf-2-6"
			}, {
					"label": "Leaf 2.7",
					"id": "leaf-2-7"
			}, {
					"label": "Leaf 2.8",
					"id": "leaf-2-8"
			}]
	}, {
			"label": "Leaf 1.4",
			"id": "leaf-1-4"
	}, {
			"label": "Leaf 1.5",
			"id": "leaf-1-5"
	}, {
			"label": "Branch 1.6",
			"id": "branch-1-6",
			"children": [{
					"label": "Leaf 2.0",
					"id": "leaf-2-0"
			}, {
					"label": "Leaf 2.1",
					"id": "leaf-2-1"
			}, {
					"label": "Leaf 2.2",
					"id": "leaf-2-2"
			}, {
					"label": "Leaf 2.3",
					"id": "leaf-2-3"
			}, {
					"label": "Leaf 2.4",
					"id": "leaf-2-4"
			}, {
					"label": "Leaf 2.5",
					"id": "leaf-2-5"
			}, {
					"label": "Leaf 2.6",
					"id": "leaf-2-6"
			}, {
					"label": "Leaf 2.7",
					"id": "leaf-2-7"
			}, {
					"label": "Leaf 2.8",
					"id": "leaf-2-8"
			}, {
					"label": "Leaf 2.9",
					"id": "leaf-2-9"
			}]
	}]
}, {
	"label": "Branch 0.4",
	"id": "branch-0-4",
	"children": [{
			"label": "Leaf 1.0",
			"id": "leaf-1-0"
	}, {
			"label": "Leaf 1.1",
			"id": "leaf-1-1"
	}, {
			"label": "Leaf 1.2",
			"id": "leaf-1-2"
	}, {
			"label": "Leaf 1.3",
			"id": "leaf-1-3"
	}, {
			"label": "Leaf 1.4",
			"id": "leaf-1-4"
	}, {
			"label": "Leaf 1.5",
			"id": "leaf-1-5"
	}, {
			"label": "Leaf 1.6",
			"id": "leaf-1-6"
	}, {
			"label": "Leaf 1.7",
			"id": "leaf-1-7"
	}, {
			"label": "Leaf 1.8",
			"id": "leaf-1-8"
	}]
}, {
	"label": "Leaf 0.5",
	"id": "leaf-0-5"
}, {
	"label": "Branch 0.6",
	"id": "branch-0-6",
	"children": [{
			"label": "Leaf 1.0",
			"id": "leaf-1-0"
	}, {
			"label": "Leaf 1.1",
			"id": "leaf-1-1"
	}, {
			"label": "Leaf 1.2",
			"id": "leaf-1-2"
	}, {
			"label": "Leaf 1.3",
			"id": "leaf-1-3"
	}, {
			"label": "Leaf 1.4",
			"id": "leaf-1-4"
	}, {
			"label": "Leaf 1.5",
			"id": "leaf-1-5"
	}]
}, {
	"label": "Branch 0.7",
	"id": "branch-0-7",
	"children": [{
			"label": "Leaf 1.0",
			"id": "leaf-1-0"
	}, {
			"label": "Leaf 1.1",
			"id": "leaf-1-1"
	}, {
			"label": "Leaf 1.2",
			"id": "leaf-1-2"
	}, {
			"label": "Leaf 1.3",
			"id": "leaf-1-3"
	}, {
			"label": "Leaf 1.4",
			"id": "leaf-1-4"
	}, {
			"label": "Leaf 1.5",
			"id": "leaf-1-5"
	}]
}, {
	"label": "Leaf 0.8",
	"id": "leaf-0-8",
	"isSelectable": false
}];



var mockNode = {
	id: 'node-1',
	label: 'Node 1',
	children: [
		{id: 'node-1-a', label: 'Node 1a'},
		{id: 'node-1-b', label: 'Node 1d'},
		{id: 'node-1-c', label: 'Node 1c'}
	]
};
storiesOf('Tree', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Tree 
			items={treeData} 
			onChange={action('onChange')}/>
	))
	.add('with TreeNode', () => (
		<TreeNode
			isSelectable={boolean('isSelectable', true)}
			selected={boolean('selected', false)}
			open={boolean('open', false)}
			data={mockNode}
			children={mockNode.children}
			id={text('id', mockNode.id)}
			label={text('label', mockNode.label)}/>
	))
	;
