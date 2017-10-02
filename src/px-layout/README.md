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

```code
responsive:true
state:
  opened: false
---
const drawerContent = (
  <div>
    <p className="u-p">
      Place your navigation here.
      </p>
  </div>
);

const headerContent = (
  <px.BrandingBar/>
);

const style = {
  height: 600
};


<div style={style}>
  <px.DrawerLayout
    title='My App'
    headerContent={headerContent}
    drawerContent={drawerContent}>



    <px.Card title='Card'>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </px.Card>
  </px.DrawerLayout>
</div>
```
