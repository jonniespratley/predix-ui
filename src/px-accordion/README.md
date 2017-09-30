The `<Accordion/>` component provides expandable and collapsible subsection headers for a page.

```hint
Reference https://www.predix-ui.com/#/elements/px-accordion
```


## Usage

```react
<div id="app">
  <style>{`
    #app{
      --px-headings-heading-subsection-color: black;
      --px-headings-heading-subsection-background: gray;
    }
  `}</style>
  <px.Accordion headerValue="Header Caption" status="Last Updated: 3 Days Ago">
    <p>Accordion content goes here.</p>
  </px.Accordion>
  <px.Accordion headerValue="Header Caption" status="Last Updated: 3 Days Ago">
    <p>Accordion content goes here.</p>
  </px.Accordion>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: headerValue
    Type: String
    Value: '" "'
    Description: String that will appear in header.
  - Name: status
    Type: String
    Value: '" "'
    Description: String that will appear in the right hand side of the accordion.
  - Name: showAction
    Type: boolean
    Value: "false"
    Description: Flag indicating whether the 'action' icon should be shown on the right hand side.
  - Name: disabled
    Type: boolean
    Value: "false"
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
