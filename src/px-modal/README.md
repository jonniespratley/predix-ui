The `px.Modal` component provides a way to open and close an overlay modal dialog, with events and methods to capture when a button inside the modal is pressed.


## Usage

```react
state:
  clicked: 0
  opened: false
---
<div>
  <px.Modal
    modalHeading="Sign in required"
    btnModalPositive="Sign In"
    btnModalNegative="Back"
    onBackdropClick={() => setState({opened: !state.opened})}
    visible={state.opened}>
    This is the children content of the modal.
  </px.Modal>
  <p>{state.opened ? 'Open' : 'Not open'}</p>
  <button onClick={() => setState({clicked: state.clicked + 1, opened: !state.opened})}>
    Clicked {state.clicked} times
  </button>
</div>
```



## Properties

```table
span: 6
rows:
  - Name: modalHeading
    Type: String
    Description: Header text for the modal window.

  - Name: btnModalPositive
    Type: String
    Description: Text for button with positive action on modal.

  - Name: btnModalNegative
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


```
Custom property                     Description
--px-modal-background-color         Background color of the modal dialog
--px-modal-overlay-color            Base color for the semi-opaque overlay
--px-modal-border-color             Color used for the separator line in the modal dialog
```

In addition, the following mixins can be used to completely override the style of the modal component.

```
Custom property	                    Description
--px-modal	                         Style mixin to be applied to the modal overlay (background layer)
--px-modal-content	                 Style mixin to be applied to the modal content box
--px-modal-title	                   Style mixin to be applied to the title of the modal content box
--px-modal-buttons	                 Style mixin to be applied to all of the buttons at the bottom of the overlay
--px-modal-positive-button	         Style mixin to be applied specifically to the positive action button of the overlay
```
