The `<Popover/>` component is similar to a tooltip, but is invoked by clicking instead of hovering on a target component. Popovers have an optional title, and can also contain richer content than a basic tooltip – longer or formatted text, labels, badges, etc. Popovers stay visible on screen until the user clicks outside of the popover.

```hint
Work in progress
```

```hint
Reference https://www.predix-ui.com/#/elements/px-popover
```


## Usage

```react
state:
  open: false
---

const { Button, Popover } = PxReact;
<div>
  <Button
    label='Toggle'
    onClick={(e) => setState({open: !state.open})}/>
  <Popover
    orientation='right'
    open={state.open}
    title='This is a popover'
    body='this can be the body'>
    This is the children
  </Popover>
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
  - Property: --px-popover-background-color
    Default: null
    Description: Background color for the popover

  - Property: --px-popover-border-color
    Default: null
    Description: Border color for the popover

  - Property: --px-popover-text-color
    Default: null
    Description: Color for the text

  - Property: --px-popover-max-width
    Default: null
    Description: Maximum width of the popover
```
