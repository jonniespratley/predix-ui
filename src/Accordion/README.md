The `<Accordion/>` component provides expandable and collapsible subsection headers for a page.

```hint
Reference https://www.predix-ui.com/#/elements/px-accordion
```


## Usage

```react
const { Accordion } = PxReact;
<div>
  <Accordion
    headerText="Header Caption"
    status="Last Updated: 3 Days Ago">
    <p>Accordion content goes here.</p>
  </Accordion>

  <Accordion
    headerText="Header Caption"
    status="Last Updated: 3 Days Ago">
    <p>Accordion content goes here.</p>
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
  - Name: headerText
    Type: string
    Default: null
    Description: String that will appear in header.

  - Name: status
    Type: string
    Default: null
    Description: String that will appear in the right hand side of the accordion.

  - Name: showAction
    Type: bool
    Default: fals
    Description: Flag indicating whether the 'action' icon should be shown on the right hand side.

  - Name: disabled
    Type: bool
    Default: fals
    Description: Flag indicating whether the accordion should be disabled.
```

## Styling
The following custom properties are available for styling

```table
rows:
  - Name: --px-headings-heading-subsection-color
    Description: Text color for the accordion header
  - Name: --px-headings-heading-subsection-background
    Description: Background color for the accordion header
```
