# px-dropdown
The `<Dropdown/>` component has two primary use cases. First, as a form control, dropdown lists are ideal for a user to choose from a preconfigured list of options – ideally, between 5 and 15. If there are fewer than 5 options, consider using a radio button. For very large lists of options, consider adding typeahead functionality in addition to, or instead of, a dropdown. The second primary use case for a dropdown list is as a filter or navigation item, where invoking an option from the dropdown menu results in an action of some kind.



## Usage


```react
state:
  selectedItem: null
---
const { Dropdown } = PxReact;
const items = [
  {"key":"1","val":"iPhone"},
  {"key":"2","val":"Android"},
  {"key":"3","val":"Blackberry"},
  {"key":"4","val":"Windows Phone"},
  {"key":"5","val":"Flip Phone","disabled":true}
];
<div>
  <Dropdown 
    onChange={(e) => setState({selectedItem: e})}
    items={items}
    sortMode="key" 
    buttonStyle="default" 
    displayValue="Select" 
    triggerHeight={30}>
  </Dropdown>
  <pre>selectedItem: {JSON.stringify(state.selectedItem, null, 2)}</pre>
</div>
```

```react
state:
  selectedItem: null
---
const { Dropdown } = PxReact;
const items = [
  {"key":"1","val":"iPhone"},
  {"key":"2","val":"Android"},
  {"key":"3","val":"Blackberry"},
  {"key":"4","val":"Windows Phone"},
  {"key":"5","val":"Flip Phone","disabled":true}
];
<div>
  <Dropdown 
    onChange={(e) => setState({selectedItem: e})}
    items={items}
    sortMode="key" 
    buttonStyle="default" 
    displayValue="Select" 
    searchMode
    multi 
    triggerHeight={30}>
  </Dropdown>
  <pre>selectedItem: {JSON.stringify(state.selectedItem, null, 2)}</pre>
</div>
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
