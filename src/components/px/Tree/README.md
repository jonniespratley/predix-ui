# px-tree
The `<Tree/>` component enables you to ...



## Usage

```react
state:
  selectedNode: null
---
const { Tree, TreeNode } = PxReact;
var data = [{
	id: 1,
	label: "All Categories",
	children: [
		{
			id: 2,
			label: "For Sale",
			children: [
				{ label: "Audio & Stereo" },
				{ label: "Baby" },
				{ label: "Music" }
			]
		},
		{
			id: 6,
			label: "Motors",
			children: [
				{
					id: 7,
					label: "Car Parts & Accessories",
					children: [
						{
							id: 7,
							label: "Category 1"
						},
						{
							id: 8,
							label: "Category 2"
						},
						{
							id: 13,
							label: "Category 3"
						}
					]
				},
				{
					id: 8,
					label: "Cars"
				},
				{
					id: 13,
					label: "Motorbike Parts & Accessories"
				}
			]
		},
		{
			id: 9,
			label: "Jobs",
			children: [
				{
					id: 10,
					label: "Accountancy"
				},
				{
					id: 11,
					label: "Financial Services & Insurance"
				},
				{
					id: 12,
					label: "Bar Staff & Management"
				}
			]
		}
	]
}];

<div className='flex'>
  <Tree items={data} onSelect={(e) => {setState({selectedNode: e})}}/>
  <div>{state.selectedNode}</div>
</div>
```

### Tree Node

```react

const { Tree, TreeNode } = PxReact;
const data = {
  id: 0,
	label: 'Tree Node',
	icon: 'px-utl:confirmed'
};

<div>
  <TreeNode {...data}/>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: items
    Type: Array
    Description: Array of tree nodes.
```


### Styling

```table
span: 6
rows:
  - Property: --my-prop
    Default: null
    Description: This is the style prop.
```
