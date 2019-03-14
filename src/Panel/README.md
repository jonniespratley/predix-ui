The `<Panel/>` component provides a container for placing controls or content. Can be fixed or relatively positioned, and persistent or shown and hidden.



## Usage

```react
state:
  opened: false
---
const demoStyles = {
	position: 'relative',
	overflow: 'hidden',
	minHeight: '400px',
	width: '100%',
	boxSizing: 'border-box',
	border: '1px solid gray',
	padding: '1rem'
};

const { 
  Button,
  Panel 
} = PxReact;

<div style={demoStyles}>
    <p>Use the toggles in properties to invoke the panel.</p>
    <Button onClick={() => setState({opened: !state.opened})}>
      {state.opened ? 'Close' : 'Open'} 
    </Button>
    
    <Panel 
      position='right'
      background='light'
      opened={state.opened}>
      <p>This can be any type of content.</p>
    </Panel>
  </div>
```


## Properties

```table
span: 6
rows:
  
  - Name: background
    Type: String
    Description: Whether to display the panel with a light, medium, or dark background. These terms are relative, and can be used in conjunction with px-theme, px-dark-theme, or your custom theme or CSS variables to toggle between 3 different background colors.
  
  - Name: fixed
    Type: bool
    Description: If set to true, the panel will have position:fixed so it will be attached to the browser window instead of its parent container.
  
  - Name: floating
    Type: bool
    Description: If set to true, the panel will appear with an offset relative to the screen / container edges. Can be overridden or customized using the CSS variables.
  
  - Name: minimizable
    Type: bool
    Description: If set to true, the panel will not fully collapse when closed. It will appear in a minimized state. You can use the content slot minimized to determine what will appear inside the panel while minimized (likely an icon or button for fully opening the panel).


  - Name: opened
    Type: bool
    Description: Whether the panel is currently open (expanded). 
  
  - Name: persistent
    Type: bool
    Description: If set to true, the panel will be opened and calls to the close() method will be ignored. Mutating the opened property will still force a close of the panel.
  
  - Name: position
    Type: String
    Description: Where to place the panel - one of `top`, `bottom`, `left`, or `right`.
```



### Styling
The following custom properties are available for styling:

```table
span: 6
rows:
  - Custom Property: --px-panel-size
    Description: Width (left/right) or height (top/bottom) of the panel
  - Custom Property: --px-panel-size--minimized
    Description: Width (left/right) or height (top/bottom) of the panel when "minimized"
  - Custom Property: --px-panel-bg-color--light
    Description: Background color for "light" panels
  - Custom Property: --px-panel-bg-color--medium
    Description: Background color for "medium" panels
  - Custom Property: --px-panel-bg-color--dark
    Description: Background color for "dark" panels
  - Custom Property: --px-panel-offset--top
    Description: Offset for top of panel when "floating"
  - Custom Property: --px-panel-offset--right
    Description: Offset for right side of panel when "floating"
  - Custom Property: --px-panel-offset--bottom
    Description: Offset for bottom of panel when "floating"
  - Custom Property: --px-panel-offset--left
    Description: Offset for left side of panel when "floating"
  - Custom Property: --px-panel-z-index
    Description: Z-index of the panel - should be adjusted if multiple overlapping panels are possible
```