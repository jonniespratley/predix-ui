# px.Accordion
The `px.Accordion` component provides expandable and collapsible subsection headers for a page.
An optional action icon on the right side will fire an event when pressed.



## Usage

```react
<div>
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
