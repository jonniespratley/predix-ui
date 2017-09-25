A collection of components that can be used to structure your app's layout.

The Predix UI Layout module defines the 'grid' for Predix UI. Layout items can be autosized, or given a specific width, and layouts reflow responsively on smaller viewports.

> https://www.predix-ui.com/#/css/layout/px-layout-design

## Usage

```code
<px.DrawerLayout>
  This can be anything
</px.DrawerLayout>
```

### `px.DrawerLayout`
This is used for layouts with a drawer that is rendered offscreen on small viewports.

```react
responsive:true
frame:true
---
const drawerContent = (<div>
  <div className="u-p u-mv flex flex--center flex--middle">
      <px.PredixSvgLogo size={95}/>
    </div>
    <div>
      <p className="u-p">
        Place your navigation here.
      </p>
      <px.TableView bare>
        <px.TableRow title="Tappable Item" tappable/>
      </px.TableView>
    </div>
</div>);
const navbarContent = (<px.ViewHeader title='My App'/>);
const style = {
  height: 400
};

const headerContent = (<px.BrandingBar/>);
<div style={style}>
  <px.DrawerLayout
    headerContent={headerContent}
    navbarContent={navbarContent}
    drawerContent={drawerContent}>


    <px.Card title='Card'>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </px.Card>
  </px.DrawerLayout>
</div>
```
