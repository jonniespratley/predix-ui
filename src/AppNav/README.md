The `<AppNav/>` component is an app-level navigation element that allows users to change the
current view. The element is designed to work on desktop and mobile/touch
devices, supporting any viewport size.

This data should be passed into the `items` Custom property on the component.

```code
[
  {
    "id" : "home",
    "label" : "Home",
    "icon" : "px-fea:home"
  },
  {
    "id" : "alert",
    "label" : "Alerts",
    "icon" : "px-fea:alerts"
  }
]
```



## Usage

```react
state:
  selected: 2
  selectedItem: null
---
const { AppNav } = PxReact;
const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home"},
  {id : "alerts", label: "Alerts", icon: "px-fea:alerts"},
  {id : "assets", label: "Assets", icon: "px-fea:asset"},
  {id : "dashboards", label: "Dashboards", icon: "px-fea:dashboard"}
];
<div>
  <AppNav 
    selected={state.selected} 
    items={navItems} 
    onChange={(e) => setState(e)}/>

  {state && <pre>selected: {state.selected}</pre>}
  {state && <pre>selectedItem: {JSON.stringify(state.selectedItem, null, 2)}</pre>}
</div>
```


### With propForSelect
The following example displays the propForSelect.

```react
state:
  selected: 'settings'
  selectedItem: null
---
const { AppNav } = PxReact;
const navItems = [
  {id : "home", label: "Home", icon: "px-fea-home"},
  {id : "alerts", label: "Alerts", icon: "px-fea:alerts"},
  {
    id : "assets", 
    label: "Assets", 
    icon: "px-fea:asset",
    children: [
      {
        "label": "Asset #1",
        "id": "a1"
      }, 
      {
        "label": "Asset #2",
        "id": "a2"
      }
    ]
  },
  {id : "dashboards", label: "Dashboards", icon: "px-fea:dashboard"}
];
<div className='custom'>
  <style>{`
    .custom{
      --px-app-nav-background-color: #e2e8ed;
      --px-app-nav-item-background-color: transparent;
    }
  `}</style>
  <AppNav
    propForSelect='id'
    onChange={(e) => setState(e)}
    items={navItems}/>
    
    {state && <pre>selected: {state.selected}</pre>}
    {state && <pre>selectedItem: {JSON.stringify(state.selectedItem, null, 2)}</pre>}
</div>
```



### With vertical menu
The vertical style defaults to CSS styles `position: absolute; left: 0; top: 0;` to stick to the left side of the screen. This causes the navigation element to fill the first position: relative item above it in the DOM. Override these values to position it in whatever way your app requires:

```react
const { AppNav, AppNavItem } = PxReact;
const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home"},
  {id : "assets", label: "Assets", icon: "px-fea:asset"},
  {id : "alerts", label: "Alerts", icon: "px-fea:alerts"},
  {id : "dashboards", label: "Dashboards", icon: "px-fea:dashboard"}
];
const style = {
  position: 'relative',
  height: 400
};
<div style={style}>
  <AppNav items={navItems} vertical/>
</div>
```





### With nested children

```react
const { AppNav } = PxReact;
const navItems = [{"label":"Home","id":"home","icon":"px-fea:home"},{"label":"Alerts","id":"alerts","icon":"px-fea:alerts","metadata":{"openCases":"12","closedCases":"82"}},{"label":"Assets","id":"assets","icon":"px-fea:asset","children":[{"label":"Asset #1","id":"a1"},{"label":"Asset #2","id":"a2"}]},{"label":"Dashboards","path":"dashboards","icon":"px-fea:dashboard","subitems":[{"label":"See Live Truck View","path":"trucks","icon":"px-obj:truck"},{"label":"Track Orders","path":"orders","icon":"px-fea:orders"},{"label":"Analyze Invoices","path":"invoices","icon":"px-fea:templates"}]}];
const style = {
  position: 'relative',
  height: 400
};
<div style={style}>
  <AppNav items={navItems} vertical/>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: items
    Type: array
    Description: Array of nav items.

  - Name: vertical
    Type: bool
    Description: Show the vertical navigation

  - Name: style
    Type: object
    Description: The style object to apply

  - Name: children
    Type: node
    Description: The child nodes.
```


### Styling
The following custom properties are available for styling.

```table
span: 6
rows:
  - Custom property: --px-app-nav-background-color
    Description: The background color of the app nav bar
  - Custom property: --px-app-nav-item-background-color--collapsed
    Description: The background color for a collapsed app nav

  - Custom property: --px-app-nav-item-background-color--empty
    Description: The background color for an empty app nav

  - Custom property: --px-app-nav-item-background-color--hover
    Description: The hover state color for an app nav item

  - Custom property: --px-app-nav-item-background-color--pressed
    Description: The pressed state color for an app nav item

  - Custom property: --px-app-nav-item-background-color--selected
    Description: The background color for a selected app nav item

  - Custom property: --px-app-nav-item-background-color
    Description: The background color for an unselected app nav item

  - Custom property: --px-app-nav-item-icon-color--collapsed
    Description: The color of the icon in a collapsed app nav

  - Custom property: --px-app-nav-item-icon-color--hover
    Description: The hover state color for an icon

  - Custom property: --px-app-nav-item-icon-color--pressed
    Description: The pressed state color for an icon

  - Custom property: --px-app-nav-item-icon-color--selected
    Description: The color for the icon in a selected item

  - Custom property: --px-app-nav-item-icon-color
    Description: The normal, unselected color for an icon

  - Custom property: --px-app-nav-item-stripe-color--selected
    Description: The stripe accent color on the top or side of a selected item

  - Custom property: --px-app-nav-item-text-color--collapsed
    Description: The text color in a collapsed state

  - Custom property: --px-app-nav-item-text-color--hover
    Description: The text color in a hover state

  - Custom property: --px-app-nav-item-text-color--pressed
    Description: The text color in a pressed state

  - Custom property: --px-app-nav-item-text-color--selected
    Description: The text color for a selected item

  - Custom property: --px-app-nav-item-text-color
    Description: The normal, unselected text color

  - Custom property: --px-app-nav-subitem-background-color--hover
    Description: The hover state background color for the dropdown submenu

  - Custom property: --px-app-nav-subitem-background-color--selected
    Description: The background color for a selected item in the dropdown submenu

  - Custom property: --px-app-nav-subitem-background-color
    Description: The background color for the dropdown submenu

  - Custom property: --px-app-nav-subitem-text-color--collapsed
    Description: The collapsed state text color for a submenu item

  - Custom property: --px-app-nav-subitem-text-color--hover
    Description: The hover state text color for a submenu item

  - Custom property: --px-app-nav-subitem-text-color--selected
    Description: The text color for a selected submenu item

  - Custom property: --px-app-nav-subitem-text-color
    Description: The normal, unselected text color for a submenu item

  - Custom property: --px-app-nav-subitem-background-color--collapsed
    Description: The background color for the dropdown submenu in a collapsed state

  - Custom property: --px-app-nav-subitem-background-color--collapsed-hover
    Description: The hover state background color for the dropdown submenu in a collapsed state

  - Custom property: --px-app-nav-subitem-text-color--parent-collapsed-selected
    Description: The background color for the selected dropdown submenu in a collapsed state

  - Custom property: --px-app-nav-subitem-background-color--parent-collapsed-selected
    Description: The background color for the parent item of a selected submenu item in a collapsed state

  - Custom property: --px-app-nav-subitem-accent-color--parent-collapsed-selected
    Description: The strip accent color for the parent item of a selected submenu item in a collapsed state

  - Custom property: --px-app-nav-subitem-background-color--parent-collapsed-hover
    Description: The background color for the parent of a hovered submenu item in a collapsed state

  - Custom property: --px-app-nav-subitem-background-color--parent-collapsed-selected
    Description: The background color for the parent of a selected submenu item in a collapsed state

  - Custom property: --px-app-nav-subitem-text-color--parent-collapsed-selected
    Description: The text color for the parent of a hovered submenu item in a collapsed state

  - Custom property: --px-app-nav-subitem-text-color--parent-collapsed-not-selected
    Description: The text color for the parent of an open, unselected submenu item in a collapsed state

  - Custom property: --px-app-nav-subitem-background-color--parent-collapsed-not-selected
    Description: The background color for the parent of an open, unselected submenu item in a collapsed state
```
