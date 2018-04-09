The `<Popover/>` component is similar to a tooltip, but is invoked by clicking instead of hovering on a target component. Popovers have an optional title, and can also contain richer content than a basic tooltip – longer or formatted text, labels, badges, etc. Popovers stay visible on screen until the user clicks outside of the popover.

```hint
Work in progress
```



## Usage

```react
state:
  id: 'popover1'
  popoverOpen: false
  placement: 'bottom'
---
const { 
  Button, 
  Popover, 
  PopoverHeader, 
  PopoverBody,
  Select
} = PxReact;

const exampleStyle = {
  padding: '4rem',
  display: 'flex',
  justifyContent: 'center'
};

const PopperPlacements = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
];
<div style={exampleStyle}>
  <div>
    <Button id={state.id} onClick={(e) => setState({popoverOpen: !state.popoverOpen})}>
      Launch Popover
    </Button>
    <Select onChange={(e) => setState({placement: e.target.value})}>
      {PopperPlacements.map((o, i) =>(
        <option key={i} >{o}</option>
      ))}
    </Select>
  </div>
  <Popover 
    placement={state.placement}
    isOpen={state.popoverOpen}
    target={state.id}
    toggle={(e) => setState({popoverOpen: !state.popoverOpen})}>
    <PopoverHeader>
      Popover Header
    </PopoverHeader>
    <PopoverBody>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
    </PopoverBody>
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
