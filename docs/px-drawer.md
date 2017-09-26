This is the documentation.





## Usage



```react
state:
  overlay: false
  docked: false
  clicked: 0
  open: false
---
const style = {
  height: 400,
  overflow: 'hidden',
  position: 'relative'
};
<div>
<button onClick={() => setState({open: (state.open ? false : true)})}>Toggle</button>

<label>
  docked:
  <input
    type='checkbox'
    onClick={() => setState({docked: !state.docked})}
    checked={state.docked}/>
</label>

<label>
  overlay:
  <input
    type='checkbox'
    onClick={() => setState({overlay: !state.overlay})}
    checked={state.overlay}/>
</label>



<p>
  {state.open && 'Open'}
  {!state.open && 'Closed'}
</p>


<div style={style}>

  <px.Drawer
    overlay={state.overlay}
    onOverlayClick={(e) => setState({open: !state.open})}
    open={state.open}
    docked={state.docked}>
    This is the children
  </px.Drawer>

  <div className='content'>
    <p>THis is content</p>
  </div>

</div>
</div>
```




## Properties

```table
span: 6
rows:
  - Name: children
    Type: String
    Default: null
    Description: The contents of the Drawer.

  - Name: docked
    Type: bool
    Default: null
    Description: If true, the drawer will be docked, the overlay won't show and clicking items will not close the drawer.

  - Name: open
    Type: bool
    Default: null
    Description: If true, the Drawer is opened. Providing a value will turn the Drawer into a controlled component.

  - Name: overlayClassName
    Type: String
    Default: null
    Description: The CSS class name to add to the Overlay component that is rendered behind the Drawer

  - Name: overlayStyle
    Type: object
    Default:
    Description: Override the inline-styles of the Overlay component that is rendered behind the Drawer.

  - Name:
    Type:
    Default: null
    Description:

  - Name:
    Type:
    Default: null
    Description:

  - Name: zDepth
    Type: propTypes.zDepth
    Default: null
    Description: The zDepth of the Drawer.


```




## Styling

Custom property	                    Description	Default

```
--px-drawer	                 Style mixin to be applied to the element	{}
--px-drawer-content	          Style mixin to be applied to the content	{}
--px-drawer-opened	           Style mixin to be applied to the element when opened	{}
--px-drawer-background-color	   The background-color of the drawer	#242326 (gray10)
--px-drawer-width	                 The width of the drawer	256px
--px-drawer-height	                The height of the drawer	100vh
--px-drawer-overlay-background	    The background color of the overlay	rgba(0, 0, 0, 0.5))
```



---

### NavDrawer

```react
state:
  clicked: 0
  open: false
---

const style = {
  height: 300,
  position: 'relative',
  display: 'flex'
};
<div style={style}>
  <px.NavDrawer opened={state.open} persistent>
    This is the children
  </px.NavDrawer>
  <div>
    <h4>Main Content</h4>

    <button onClick={() => setState({clicked: state.clicked + 1})}>
      Clicked {state.clicked} times
    </button>

    <button onClick={() => setState({open: (state.open ? false : true)})}>Toggle</button>
    <p>{state.open && 'Open'}</p>
    <p>{!state.open && 'Closed'}</p>
  </div>
</div>
```
