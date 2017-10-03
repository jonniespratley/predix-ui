# px-tree
The `<Tree/>` component enables you to ...



## Usage

```react
const { Tree, TreeNode } = PxReact;
var data = {
	id: 1,
	name: "All Categories",
	children: [
		{
			id: 2,
			name: "For Sale",
			children: [
				{
					id: 3,
					name: "Audio & Stereo"
				},
				{
					id: 4,
					name: "Baby & Kids Stuff"
				},
				{
					id: 5,
					name: "Music, Films, Books & Games"
				}
			]
		},
		{
			id: 6,
			name: "Motors",
			children: [
				{
					id: 7,
					name: "Car Parts & Accessories",
					children: [
						{
							id: 7,
							name: "Car Parts & Accessories"
						},
						{
							id: 8,
							name: "Cars"
						},
						{
							id: 13,
							name: "Motorbike Parts & Accessories"
						}
					]
				},
				{
					id: 8,
					name: "Cars"
				},
				{
					id: 13,
					name: "Motorbike Parts & Accessories"
				}
			]
		},
		{
			id: 9,
			name: "Jobs",
			children: [
				{
					id: 10,
					name: "Accountancy"
				},
				{
					id: 11,
					name: "Financial Services & Insurance"
				},
				{
					id: 12,
					name: "Bar Staff & Management"
				}
			]
		}
	]
};

<Tree items={data}/>
```

### Tree Node

```react
const { Tree, TreeNode } = PxReact;
const data = [{"label":"Leaf 0.0"},{"label":"Leaf 0.1"},{"label":"Leaf 0.2"},
{"label":"Branch 0.3","items":[{"label":"Leaf 1.0"},{"label":"Branch 1.1",
"children":[{"label":"Leaf 2.0"},{"label":"Leaf 2.1"},{"label":"Leaf 2.2"},{"label":"Leaf 2.3"}]},{"label":"Leaf 1.2"},{"label":"Branch 1.3","items":[{"label":"Leaf 2.0"},{"label":"Leaf 2.1"},{"label":"Leaf 2.2"},{"label":"Leaf 2.3"},{"label":"Leaf 2.4"},{"label":"Leaf 2.5"},{"label":"Leaf 2.6"},{"label":"Leaf 2.7"},{"label":"Leaf 2.8"}]},{"label":"Leaf 1.4"},{"label":"Leaf 1.5"},
{"label":"Branch 1.6","items":[{"label":"Leaf 2.0"},{"label":"Leaf 2.1"},{"label":"Leaf 2.2"},{"label":"Leaf 2.3"},{"label":"Leaf 2.4"},{"label":"Leaf 2.5"},{"label":"Leaf 2.6"},{"label":"Leaf 2.7"},{"label":"Leaf 2.8"},{"label":"Leaf 2.9"}]}]},{"label":"Branch 0.4",
"children":[{"label":"Leaf 1.0"},
{"label":"Leaf 1.1"},{"label":"Leaf 1.2"},{"label":"Leaf 1.3"},{"label":"Leaf 1.4"},{"label":"Leaf 1.5"},{"label":"Leaf 1.6"},
{"label":"Leaf 1.7"},{"label":"Leaf 1.8"}]},{"label":"Leaf 0.5"},{"label":"Branch 0.6","items":[{"label":"Leaf 1.0"},{"label":"Leaf 1.1"},{"label":"Leaf 1.2"},{"label":"Leaf 1.3"},{"label":"Leaf 1.4"},{"label":"Leaf 1.5"}]},{"label":"Branch 0.7","items":[{"label":"Leaf 1.0"},{"label":"Leaf 1.1"},{"label":"Leaf 1.2"},{"label":"Leaf 1.3"},{"label":"Leaf 1.4"},{"label":"Leaf 1.5"}]},{"label":"Leaf 0.8"}];

<TreeNode data={data}></TreeNode>
```


## Properties

```table
span: 6
rows:
  - Name: children
    Type: node
    Description: The children content.
```


### Styling

```table
span: 6
rows:
  - Property: --my-prop
    Default: null
    Description: This is the style prop.
```
