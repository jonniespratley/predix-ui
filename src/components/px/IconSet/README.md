The `<Icon/>` component enables you to use Predix Design System icons.

```hint
Reference https://www.predix-ui.com/#/elements/px-icon-set
```

## Usage

```react
const { Icon } = PxReact;
<Icon icon='px-doc:chart' size={16}/>
```

## Cheatsheet

```react
const { IconSet, Icon } = PxReact;
const NavIcons = ["px-nav-back", "px-nav-close", "px-nav-collapse", "px-nav-confirmed", "px-nav-down", "px-nav-expand", "px-nav-favorite", "px-nav-generic-user", "px-nav-grid-view", "px-nav-hamburger", "px-nav-hierarchy", "px-nav-home", "px-nav-inbox-view", "px-nav-instance", "px-nav-list-view", "px-nav-log-out", "px-nav-menu", "px-nav-more", "px-nav-new-window", "px-nav-next", "px-nav-notification", "px-nav-open-context", "px-nav-pause", "px-nav-play", "px-nav-reload", "px-nav-search", "px-nav-stop", "px-nav-tile-view", "px-nav-tree", "px-nav-unconfirmed", "px-nav-up"];
const ObjIcons = ["px-obj-airplane", "px-obj-airplane-engine", "px-obj-airport", "px-obj-automobile", "px-obj-boiler", "px-obj-cell-tower", "px-obj-class", "px-obj-condenser", "px-obj-controller", "px-obj-cooling-tower", "px-obj-database", "px-obj-desktop", "px-obj-edge-box", "px-obj-fleet", "px-obj-gas-turbine", "px-obj-gateway", "px-obj-hrsg", "px-obj-imaging-machine", "px-obj-light-bulb", "px-obj-line", "px-obj-line-og", "px-obj-locomotive", "px-obj-machine", "px-obj-manufacturing-line", "px-obj-plant", "px-obj-predix-box", "px-obj-product", "px-obj-rail-yard", "px-obj-routes", "px-obj-sensor", "px-obj-solar-panel", "px-obj-steam-turbine", "px-obj-train", "px-obj-truck", "px-obj-wind-turbine"];
const DocIcons = ["px-doc-chart", "px-doc-document", "px-doc-document-csv", "px-doc-document-pdf", "px-doc-document-word", "px-doc-document-xls", "px-doc-image", "px-doc-note", "px-doc-website"];
const UtlIcons = ["px-utl-add", "px-utl-alert", "px-utl-app-settings", "px-utl-calculation", "px-utl-calendar", "px-utl-camera", "px-utl-check", "px-utl-chevron", "px-utl-chevron-left", "px-utl-chevron-right", "px-utl-chevron-up", "px-utl-clock", "px-utl-close", "px-utl-confirmed", "px-utl-copy", "px-utl-delete", "px-utl-desktop-computer", "px-utl-download", "px-utl-edit", "px-utl-failure", "px-utl-filter", "px-utl-flag", "px-utl-folder-closed", "px-utl-folder-open", "px-utl-formula", "px-utl-help", "px-utl-information", "px-utl-link", "px-utl-location", "px-utl-locked", "px-utl-map", "px-utl-module-settings", "px-utl-overflow", "px-utl-phone", "px-utl-remove", "px-utl-reply", "px-utl-save", "px-utl-search", "px-utl-share", "px-utl-tablet", "px-utl-unlink", "px-utl-unlocked", "px-utl-upload", "px-utl-zoom"];
const FeaIcons = ["px-fea-administration", "px-fea-alerts", "px-fea-analysis", "px-fea-analytics", "px-fea-asset", "px-fea-asset-ingestion", "px-fea-attribute", "px-fea-bug", "px-fea-calendar", "px-fea-cases", "px-fea-catalog", "px-fea-dashboard", "px-fea-data-sources", "px-fea-deployments", "px-fea-dev-ops", "px-fea-digital-twin", "px-fea-home", "px-fea-log", "px-fea-microservice", "px-fea-orchestration", "px-fea-orders", "px-fea-pipeline", "px-fea-products", "px-fea-spaces", "px-fea-tag", "px-fea-tag-group", "px-fea-templates", "px-fea-users", "px-fea-versions"];

const RenderIconSet = ({icons, size}) => (
<ul>
	{icons && icons.map((item, key) => (
    <li key={key}><Icon icon={item} size={size} />{item}</li>
	))}
</ul>
);

<div className='cheatsheet'>
  <h3>Document : Small - 16px</h3>
  <RenderIconSet icons={DocIcons} size={16}/>

  <h3>Utility : Small - 16px</h3>
  <RenderIconSet icons={UtlIcons} size={16}/>

  <h3>Navigation : Medium - 22px</h3>
  <RenderIconSet icons={NavIcons} size={22}/>

  <h3>Feature : Large - 32px</h3>
  <RenderIconSet icons={FeaIcons} size={32}/>

  <h3>Object : Large - 32px</h3>
  <RenderIconSet icons={ObjIcons} size={32}/>

  <style>{`
    .cheatsheet ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      margin: 0;
      padding: 0;
    }
    .cheatsheet li {
      flex: 1 0 200px;
      list-style: none;
      margin: 0.5rem;
      cursor: pointer;
    }
    .cheatsheet .px-icon{
      margin-right: 1rem;
    }
  `}</style>
</div>
```



## Properties

```table
span: 6
rows:
  - Name: size
    Type: number
    Description: The size of the icon.
  - Name: icon
    Type: string
    Description: The name of the icon.
```


### Styling
The following custom properties are available for styling.

```table
span: 6
rows:
  - Property: --px-icon-width
    Default: 22px
    Description: Width applied to the icon.
```
