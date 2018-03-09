The `<Modal/>` component provides a way to open and close an overlay modal dialog, with events and methods to capture when a button inside the modal is pressed.


## Usage

```react
state:
  opened: false
---
const { Button, Modal } = PxReact;
<div>
  <Modal
    headerText="Sign in required"
    acceptText="Sign In"
    rejectText="Back"
    onBackdropClick={() => setState({opened: !state.opened})}
    opened={state.opened}>
    This is the children content of the modal.
  </Modal>

  <Button onClick={() => setState({opened: !state.opened})}>
    Open Modal
  </Button>
</div>
```



## Properties

```table
span: 6
rows:
  - Name: headerText
    Type: String
    Description: Header text for the modal window.

  - Name: acceptText
    Type: String
    Description: Text for button with positive action on modal.

  - Name: rejectText
    Type: String
    Description: Text for button with negative action on modal.

  - Name: onBtnModalNegativeClick
    Type: Function
    Description: Callback to invoke when clicked

  - Name: onBtnModalPositiveClick
    Type: Function
    Description: Callback to invoke when

  - Name: btnModalPositiveDisabled
    Type: Boolean
    Description: Flag to indicate if the positive button should be disabled within the modal.
```


### Styling

The following custom properties are available for styling:


```table
rows:
  - Property: --px-modal-background-color
    Default: null
    Description: Background color of the modal dialog

  - Property: --px-modal-overlay-color
    Default: null
    Description: Base color for the semi-opaque overlay

  - Property: --px-modal-border-color
    Default: null
    Description: Color used for the separator line in the modal dialog
```

In addition, the following mixins can be used to completely override the style of the modal component.

```table
rows:
   - Property: --px-modal
     Default: null
     Description: Style mixin to be applied to the modal overlay (background layer)

   - Property: --px-modal-content
     Default: null
     Description: Style mixin to be applied to the modal content box

   - Property: --px-modal-title
     Default: null
     Description: Style mixin to be applied to the title of the modal content box

   - Property: --px-modal-buttons
     Default: null
     Description: Style mixin to be applied to all of the buttons at the bottom of the overlay

   - Property: --px-modal-positive-button
     Default: null
     Description: Style mixin to be applied specifically to the positive action button of the overlay
```
