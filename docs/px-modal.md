Element providing means to open and close an overlay modal dialog, with events and methods to capture when a button inside the modal is pressed. Both the modal trigger and the contents of the modal can be passed inside the <px-modal> tags. The trigger should have the class modal-trigger to ensure it doesn't appear inside of the modal itself. The modalButtonClicked() method can also be programmatically called on the modal to trigger it to open.


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
