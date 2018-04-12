
The `<Breadcrumbs/>` component displays the navigational path of the user through a context browser. The breadcrumb links provide a way to see the path of navigation or contextual relationship between objects. It also provides a quick way to navigate backwards within a path or within a specific context.



## Usage

```react
const { Breadcrumbs } = PxReact;
const selectedRoute = ["North America", "United States of America", "California", "San Ramon"];
<Breadcrumbs 
  clickOnlyMode
  selectedRoute={selectedRoute}/>
```

> Note: This is an uncontrolled component.

## Properties

```table
span: 6
rows:
  - Name: clickOnlyMode
    Type: Bool
    Description: Enable click only mode.
  - Name: selectedRoute
    Type: Array
    Description: Array of items to display.
```


### Styling

```table
span: 6
rows:
  - Custom Property: --px-breadcrumbs-chevron-color
    Description: Color of the chevrons between breadcrumb items
  - Custom Property: --px-breadcrumbs-text-color--disabled
    Description: Text color for a non-selectable top-level item
```
