# px-tree
The `<Tree/>` component enables you to ...



## Usage

```react
const { Tree } = px;
const data = [{"label":"Leaf 0.0"},{"label":"Leaf 0.1"},{"label":"Leaf 0.2"},{"label":"Branch 0.3","items":[{"label":"Leaf 1.0"},{"label":"Branch 1.1","items":[{"label":"Leaf 2.0"},{"label":"Leaf 2.1"},{"label":"Leaf 2.2"},{"label":"Leaf 2.3"}]},{"label":"Leaf 1.2"},{"label":"Branch 1.3","items":[{"label":"Leaf 2.0"},{"label":"Leaf 2.1"},{"label":"Leaf 2.2"},{"label":"Leaf 2.3"},{"label":"Leaf 2.4"},{"label":"Leaf 2.5"},{"label":"Leaf 2.6"},{"label":"Leaf 2.7"},{"label":"Leaf 2.8"}]},{"label":"Leaf 1.4"},{"label":"Leaf 1.5"},{"label":"Branch 1.6","items":[{"label":"Leaf 2.0"},{"label":"Leaf 2.1"},{"label":"Leaf 2.2"},{"label":"Leaf 2.3"},{"label":"Leaf 2.4"},{"label":"Leaf 2.5"},{"label":"Leaf 2.6"},{"label":"Leaf 2.7"},{"label":"Leaf 2.8"},{"label":"Leaf 2.9"}]}]},{"label":"Branch 0.4","items":[{"label":"Leaf 1.0"},{"label":"Leaf 1.1"},{"label":"Leaf 1.2"},{"label":"Leaf 1.3"},{"label":"Leaf 1.4"},{"label":"Leaf 1.5"},{"label":"Leaf 1.6"},{"label":"Leaf 1.7"},{"label":"Leaf 1.8"}]},{"label":"Leaf 0.5"},{"label":"Branch 0.6","items":[{"label":"Leaf 1.0"},{"label":"Leaf 1.1"},{"label":"Leaf 1.2"},{"label":"Leaf 1.3"},{"label":"Leaf 1.4"},{"label":"Leaf 1.5"}]},{"label":"Branch 0.7","items":[{"label":"Leaf 1.0"},{"label":"Leaf 1.1"},{"label":"Leaf 1.2"},{"label":"Leaf 1.3"},{"label":"Leaf 1.4"},{"label":"Leaf 1.5"}]},{"label":"Leaf 0.8"}];

<Tree items={data}>
  This is the children
</Tree>
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
