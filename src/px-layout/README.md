A collection of components that can be used to structure your app's layout.

The Predix UI Layout module defines the 'grid' for Predix UI. Layout items can be autosized, or given a specific width, and layouts reflow responsively on smaller viewports.

> https://www.predix-ui.com/#/css/layout/px-layout-design

## Usage

```react
const sizes = ['1/1', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/6', '2/6', '3/6', '4/6', '5/6'];
const rows = [
  ['1'],
  ['2', '2'],
  ['3', '3', '3'],
  ['4', '4', '4', '4'],
  ['6','6','6','6','6','6'],
  ['1','3'],
  ['2','4'],
  ['1','6']
];
const { Layout } = PxReact;
<div className='demo'>
  {rows.map((row, index) => (
    <Layout container key={index}>
      {row.map((size, i) => (
        <Layout
          item key={i}
          sm={1}
          lg={size}>
          <p><code>size={size}</code></p>
        </Layout>)
      )}
    </Layout>
    )
  )}
  <style>{`
    .demo p{
      padding: 1rem;
      background-color: white;
    }
  `}</style>
</div>
```




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

const { Layout, LayoutItem } = PxReact;

<Layout style={style.layout} large container>

  <Layout style={style.layoutItem} item sm={1}>
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

```
frame: true
light: true
state:
  opened: false
---
const { BrandingBar, DrawerLayout, AppNav } = PxReact;
const { DeviceView } = DemoHelpers;
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
  height: 400
};

<DeviceView device="phone" landscape>
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
</DeviceView>
```
