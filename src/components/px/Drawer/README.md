This is the documentation.

- The drawer by default is hidden off screen and only visible when open is `true`.
- Setting the `docked` prop to `true` will make the overlay hidden and drawer visible.



## Usage



```react

state:
  overlay: false
  docked: false
  clicked: 0
  open: false
---
const style = {
  height: 300,
  overflow: 'hidden',
  position: 'relative'
};
const { AppNav } = PxReact;
const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home", selected: true},
  {id : "settings", label: "Settings", icon: "px-fea:settings"},
  {id : "alert", label: "Alerts", icon: "px-fea:alerts"}
];
<div>
  <div style={style}>
    <px.Navbar
      title='Navbar'
      subtitle='Subtitle'

      onMenuButtonClick={()=> setState({open: !state.open})}
      showMenuButton/>

    <px.Drawer
      overlay={state.overlay}
      onClose={()=> setState({open: state.open})}
      onOverlayClick={(e) => setState({open: !state.open})}
      open={state.open}
      docked={state.docked}>

      <AppNav items={navItems} vertical/>
    </px.Drawer>

    <div className='content u-p'>
      <p>This is content</p>

      <button onClick={() => setState({overlay: !state.overlay})}>Toggle Overlay</button>
      <button onClick={() => setState({docked: !state.docked})}>Toggle Docked</button>
    </div>

  </div>
</div>
```


### Temporary drawer
Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.


```
// code here
```

### Permanent drawer
Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.

```
// code here
```


### Persistent drawer
Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user. The state of the drawer is remembered from action to action and session to session.

When the drawer is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport.

```
// code here
```


### Mini drawer


```
// code here
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
