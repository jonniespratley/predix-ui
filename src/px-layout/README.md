A collection of components that can be used to structure your app's layout.

The Predix UI Layout module defines the 'grid' for Predix UI. Layout items can be autosized, or given a specific width, and layouts reflow responsively on smaller viewports.

> https://www.predix-ui.com/#/css/layout/px-layout-design

## Usage

```react
const style = {
  layout: {
    backgroundColor: '#eee'
  },
  layoutItem: {
    backgroundColor: 'white',
    margin: '1rem'
  }
};

const { Layout, LayoutItem } = px;

<Layout style={style.layout} large container>
  <Layout style={style.layoutItem} item>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </Layout>

  <LayoutItem style={style.layoutItem}>
    This can be anything.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </LayoutItem>
</Layout>
```




### `px.DrawerLayout`
This is used for layouts with a drawer that is rendered offscreen on small viewports.

```react
light: true
frame: true

state:
  opened: false
---
const { BrandingBar, DrawerLayout, AppNav } = PxReact;



const navItems = [
  {id : "home", label: "Home", icon: "px-fea:home"},
  {id : "settings", label: "Settings", icon: "px-fea:settings"},
  {id : "alert", label: "Alerts", icon: "px-fea:alerts"}
];



const drawerContent = (
  <div>
    <p className="u-p">
      Place your navigation here.
      </p>
  </div>
);


const style = {
  height: 600
};

<div style={style}>
  <px.DrawerLayout
    title='My App'
    navItems={navItems}
    drawerContent={drawerContent}>



    <px.Card title='Card'>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </px.Card>
  </px.DrawerLayout>
</div>
```
