The `<Overlay/>` is a component used for modal dialogues, popovers, and other use cases where the remainder of the application content is obscured or falls away from the primary actionable component. The overlay covers the entire screen.

```hint
Reference https://www.predix-ui.com/#/elements/px-overlay
```

## Usage

```react
state:
  open: false
---
const {Button, Overlay} = PxReact;
<div>
  <Button
    label='Open Overlay'
    onClick={(e) => setState({open: !state.open})}/>
  <Overlay
    open={state.open}
    onOverlayClick={(e) => setState({open: !state.open})}/>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: visible
    Type: bool
    Description: The visibility of the modal.
```
