# px-action-sheet
This is the documentation.


## Usage

```react
state:
  fixed: false
  overlay: false
  persistent: false
  clicked: 0
  open: false
---
const style = {
  height: 300,
  position: 'relative',
  display: 'flex'
};
<div style={style}>
<label>
  open:
  <input
    type='checkbox'
    onClick={() => setState({open: !state.open})}
    checked={state.open}/>
</label>
  <px.ActionSheet
    onOverlayClick={() => setState({open: !state.open})}
    opened={state.open}>
    <p>This is actionsheet content</p>
    <p>Include actions here</p>
  </px.ActionSheet>
</div>
```
