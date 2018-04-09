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
    Description: The contents of the Drawer.

  - Name: docked
    Type: bool
    Description: If true, the drawer will be docked, the overlay won't show and clicking items will not close the drawer.

  - Name: open
    Type: bool
    Description: If true, the Drawer is opened. Providing a value will turn the Drawer into a controlled component.

  - Name: overlayClassName
    Type: String
    Description: The CSS class name to add to the Overlay component that is rendered behind the Drawer

  - Name: overlayStyle
    Type: object
    Description: Override the inline-styles of the Overlay component that is rendered behind the Drawer.
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

 