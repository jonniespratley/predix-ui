The `<ViewHeader/>` component is located at the top of the page and provides the user an overview of the content they are viewing and interacting with.

```hint
Reference https://www.predix-ui.com/#/elements/px-view-header
```

## Usage

```react
  const { ViewHeader } = PxReact;
  <ViewHeader
    title='Current View Title'
    subtitle='A subtitle describing the view.'
    showMenuButton/>
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
    Default: whitesmoke
    Description: Background color for the view header
  - Property: --px-view-header-title-color
    Default: black
    Description: Color for the title
  - Property: --px-view-header-subtitle-color
    Default: gray
    Description: Color for the subtitle
```
