The `<AppHeader/>` component is used as a wrapper for the `<AppNav/>` and `<BrandingBar/>` components.
It provides a container that stays fixed to the top of the screen.

By default, the `<BrandingBar/>` will shrink to a minimized state as the user scrolls down the page, unless the `fixed` property is set.



## Usage

```react
const { AppHeader, AppNav, Card } = PxReact;
const navItems = [
{ "path":"tab1","icon":"px-fea:alerts","eventName":"firstItem","label":"Alerts","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2","eventName":"subitemTwo"},{"label":"Sub Category 3","path":"subitem3"}]},{"path":"tab2","icon":"px-fea:asset","label":"Cases","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2"},{"label":"Sub Category 3"}]},{"path":"tab3","icon":"px-fea:analysis","label":"Analysis"},{"path":"tab4","icon":"px-fea:dashboard","label":"Dashboards"}];

<AppHeader title='My App' items={navItems}>
  <div>
   
  </div>
</AppHeader>

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
  - Custom Property: --px-app-header
    Description: Mixin applied to entire element.
```
