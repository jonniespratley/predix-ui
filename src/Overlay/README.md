The `<Overlay/>` is a component used for modal dialogues, popovers, and other use cases where the remainder of the application content is obscured or falls away from the primary actionable component. The overlay covers the entire screen.


## Usage

```react
state:
  open: false
---
const {Button, Overlay} = PxReact;
<div>
  <Button
    onClick={(e) => setState({open: !state.open})}>Open Overlay</Button>
  <Overlay
    opened={state.open}
    onOverlayClick={(e) => setState({open: !state.open})}/>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: opened
    Type: bool
    Description: The visibility of the modal.

  - Name: ignoreEscapeKeyUp
    Type: bool
    Description: If true, ESC key will not close modal.

  - Name: ignoreOverlayClick
    Type: bool
    Description: If true, clicking backdrop will not close modal.

  - Name: onRequestClose
    Type: function
    Description: Invoked when request to close overlay happens.

  - Name: onEscapeKeyUp
    Type: function
    Description: Invoked when ESC key is up.

```
