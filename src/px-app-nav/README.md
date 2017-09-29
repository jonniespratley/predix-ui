
The `<AppNav/>` is an app-level navigation element that allows users to change the
current view. The element is designed to work on desktop and mobile/touch
devices, supporting any viewport size. It has three distinct visual styles that
can be switched at any time to suit different app designs.


This data should be passed into the `items` property on the component.

This is a simple navigation data example:

```
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

```hint
For more information visit https://www.predix-ui.com/#/elements/px-app-nav
```


## Usage

```react
const { AppNav } = PxReact;
const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home", selected: true},
  {id : "settings", label: "Settings", icon: "px-fea:settings"},
  {id : "alert", label: "Alerts", icon: "px-fea:alerts"}
];
<div>
  <style>{`
    :root{
      --px-app-nav-background-color: #e2e8ed;
      --px-app-nav-item-background-color: transparent;
    }
  `}</style>
  <AppNav items={navItems}/>
</div>
```
### Vertical
```react
const { AppNav } = PxReact;
const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home", selected: true},
  {id : "settings", label: "Settings", icon: "px-fea:settings"},
  {id : "alert", label: "Alerts", icon: "px-fea:alerts"}
];
const style = {
  position: 'relative',
  height: 400
};
<div style={style}>
  <style>{`
    :root{
      --px-app-nav-background-color: #e2e8ed;
      --px-app-nav-item-background-color: transparent;
    }
  `}</style>
  <AppNav items={navItems} vertical/>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: children
    Type: node
    Description: The child nodes.
```


### Styling
The following custom properties are available for styling.

```table
span: 6
rows:
  - Property: --px-app-nav-background-color
    Default: null
    Description: The background color of the app nav bar

  - Property: --px-app-nav-item-background-color--collapsed
    Default: null
    Description: The background color for a collapsed app nav

  - Property: --px-app-nav-item-background-color--empty
    Default: null
    Description: The background color for an empty app nav

  - Property: --px-app-nav-item-background-color--hover
    Default: null
    Description: The hover state color for an app nav item

  - Property: --px-app-nav-item-background-color--pressed
    Default: null
    Description: The pressed state color for an app nav item

  - Property: --px-app-nav-item-background-color--selected
    Default: null
    Description: The background color for a selected app nav item

  - Property: --px-app-nav-item-background-color
    Default: null
    Description: The background color for an unselected app nav item

  - Property: --px-app-nav-item-icon-color--collapsed
    Default: null
    Description: The color of the icon in a collapsed app nav

  - Property: --px-app-nav-item-icon-color--hover
    Default: null
    Description: The hover state color for an icon

  - Property: --px-app-nav-item-icon-color--pressed
    Default: null
    Description: The pressed state color for an icon

  - Property: --px-app-nav-item-icon-color--selected
    Default: null
    Description: The color for the icon in a selected item

  - Property: --px-app-nav-item-icon-color
    Default: null
    Description: The normal, unselected color for an icon

  - Property: --px-app-nav-item-stripe-color--selected
    Default: null
    Description: The stripe accent color on the top or side of a selected item

  - Property: --px-app-nav-item-text-color--collapsed
    Default: null
    Description: The text color in a collapsed state

  - Property: --px-app-nav-item-text-color--hover
    Default: null
    Description: The text color in a hover state

  - Property: --px-app-nav-item-text-color--pressed
    Default: null
    Description: The text color in a pressed state

  - Property: --px-app-nav-item-text-color--selected
    Default: null
    Description: The text color for a selected item

  - Property: --px-app-nav-item-text-color
    Default: null
    Description: The normal, unselected text color

  - Property: --px-app-nav-subitem-background-color--hover
    Default: null
    Description: The hover state background color for the dropdown submenu

  - Property: --px-app-nav-subitem-background-color--selected
    Default: null
    Description: The background color for a selected item in the dropdown submenu

  - Property: --px-app-nav-subitem-background-color
    Default: null
    Description: The background color for the dropdown submenu

  - Property: --px-app-nav-subitem-text-color--collapsed
    Default: null
    Description: The collapsed state text color for a submenu item

  - Property: --px-app-nav-subitem-text-color--hover
    Default: null
    Description: The hover state text color for a submenu item

  - Property: --px-app-nav-subitem-text-color--selected
    Default: null
    Description: The text color for a selected submenu item

  - Property: --px-app-nav-subitem-text-color
    Default: null
    Description: The normal, unselected text color for a submenu item

  - Property: --px-app-nav-subitem-background-color--collapsed
    Default: null
    Description: The background color for the dropdown submenu in a collapsed state

  - Property: --px-app-nav-subitem-background-color--collapsed-hover
    Default: null
    Description: The hover state background color for the dropdown submenu in a collapsed state

  - Property: --px-app-nav-subitem-text-color--parent-collapsed-selected
    Default: null
    Description: The background color for the selected dropdown submenu in a collapsed state

  - Property: --px-app-nav-subitem-background-color--parent-collapsed-selected
    Default: null
    Description: The background color for the parent item of a selected submenu item in a collapsed state

  - Property: --px-app-nav-subitem-accent-color--parent-collapsed-selected
    Default: null
    Description: The strip accent color for the parent item of a selected submenu item in a collapsed state

  - Property: --px-app-nav-subitem-background-color--parent-collapsed-hover
    Default: null
    Description: The background color for the parent of a hovered submenu item in a collapsed state

  - Property: --px-app-nav-subitem-background-color--parent-collapsed-selected
    Default: null
    Description: The background color for the parent of a selected submenu item in a collapsed state

  - Property: --px-app-nav-subitem-text-color--parent-collapsed-selected
    Default: null
    Description: The text color for the parent of a hovered submenu item in a collapsed state

  - Property: --px-app-nav-subitem-text-color--parent-collapsed-not-selected
    Default: null
    Description: The text color for the parent of an open, unselected submenu item in a collapsed state

  - Property: --px-app-nav-subitem-background-color--parent-collapsed-not-selected
    Default: null
    Description: The background color for the parent of an open, unselected submenu item in a collapsed state
```
