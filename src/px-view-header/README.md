The `ViewHeader` component provides the user an overview of the content they are viewing and interacting with.

## Usage

```react
  const { ViewHeader } = PxReact;
  <ViewHeader
    title='Current View Title'
    subtitle='A subtitle describing the view.'/>
```



## Properties

```table
span: 6
rows:
  - Name: title
    Type: string
    Description: The title displayed in the center of the header.
  - Name: subtitle
    Type: string
    Description: The (optional) subtitle displayed in the center of the header.
  - Name: children
    Type: node
    Description: The children content.
```


### Styling
The following custom properties are available for styling:

```table
span: 6
rows:
  - Property: --px-view-header-background-color
    Default: null
    Description: Background color for the view header
```
