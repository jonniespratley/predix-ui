This is the documentation.


## Usage

```react
state:
  open: false
---
const {Overlay} = px;
<div>
  <button onClick={(e) => setState({open: !state.open})}>Open Overlay</button>
  <Overlay visible={state.open} onOverlayClick={(e) => setState({open: !state.open})}>
    This is the children
  </Overlay>
</div>
```


## Props

```table
span: 6
rows:
  - Name: label
    Type: String
    Description: This is the desc
```
