The `<Accordion/>` component provides expandable and collapsible subsection headers for a page.


## Usage

```react
const { Accordion } = PxReact;
<div>
  <Accordion headerText="Header Caption" status="Last Updated: 3 Days Ago">
    Accordion content goes here.
  </Accordion>

  <Accordion headerText="Header Caption" status="Last Updated: 3 Days Ago">
    Accordion content goes here.
  </Accordion>
</div>
```

### With custom CSS

```react
const { Accordion } = PxReact;
<div className='custom'>
  <style>{`
    .custom {
      --px-accordion-header-color: white;
      --px-accordion-header-background-color: crimson;
    }
  `}</style>
  <Accordion
    headerValue="Header Caption"
    status="Last Updated: 3 Days Ago">
    <p>Accordion content goes here.</p>
  </Accordion>
</div>
```

## Properties

```table
span: 6
rows:
  - Name: disabled
    Type: bool
    Description: Flag indicating whether the accordion should be disabled.

  - Name: headerText | headerValue
    Type: string
    Description: String that will appear in header.
  
  - Name: status
    Type: string
    Description: String that will appear in the right hand side of the accordion.

  - Name: showAction
    Type: bool
    Description: Flag indicating whether the 'action' icon should be shown on the right hand side.
  
  - Name: opened
    Type: bool
    Description: If true the accordion is opened. If false it is closed. Use to observe the user opening/closing the accordion, or set to programatically change the accordion state.

  - Name: onCollapsed
    Type: func
    Description: Callback function when accordion is collapsed.
  
  - Name: onExpanded
    Type: func
    Description: Callback function when accordion is expanded.

  - Name: onActionClick
    Type: func
    Description: Callback function when action icon is clicked.
  
```

## Styling
The following custom properties are available for styling

```table
rows:
  - Custom Property: --px-headings-heading-subsection-color
    Description: Text color for the accordion header
  
  - Custom Property: --px-headings-heading-subsection-background
    Description: Background color for the accordion header
```
