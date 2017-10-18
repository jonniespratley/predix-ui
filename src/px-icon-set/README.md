The `<Icon/>` component enables you to use icons.

```hint
Work in progress
```


```hint
Reference https://www.predix-ui.com/#/elements/px-icon-set
```




## Usage

```react
const { IconSet, Icon } = PxReact;
<Icon icon='px-fea:analysis'/>
```



### Document : Small - 16px


```react
const { IconSet, Icon } = PxReact;
const docIcons = [
  "px-doc:chart",
  "px-doc:document",
  "px-doc:document-csv",
  "px-doc:document-pdf",
  "px-doc:document-word",
  "px-doc:document-xls",
  "px-doc:image",
  "px-doc:note",
  "px-doc:website"
];

<Grid container wrap>
  {docIcons.map((icon, index) => (
    <Grid row key={index}>
      <Icon size={22} icon={icon}/>
      <span>{icon}</span>
    </Grid>
  ))}
</Grid>
```

### Utility : Small - 16px

```react
const utilIcons = [
  "px-utl:add",
  "px-utl:alert",
  "px-utl:app-settings",
  "px-utl:calculation",
  "px-utl:calendar",
  "px-utl:camera",
  "px-utl:check",
  "px-utl:chevron",
  "px-utl:chevron-left",
  "px-utl:chevron-right",
  "px-utl:chevron-up",
  "px-utl:clock",
  "px-utl:close",
  "px-utl:confirmed",
  "px-utl:copy",
  "px-utl:delete",
  "px-utl:desktop-computer",
  "px-utl:download",
  "px-utl:edit",
  "px-utl:failure",
  "px-utl:filter",
  "px-utl:flag",
  "px-utl:folder-closed",
  "px-utl:folder-open",
  "px-utl:formula",
  "px-utl:help",
  "px-utl:information",
  "px-utl:link",
  "px-utl:location",
  "px-utl:locked",
  "px-utl:map",
  "px-utl:module-settings",
  "px-utl:overflow",
  "px-utl:phone",
  "px-utl:remove",
  "px-utl:reply",
  "px-utl:save",
  "px-utl:search",
  "px-utl:share",
  "px-utl:tablet",
  "px-utl:unlink",
  "px-utl:unlocked",
  "px-utl:upload",
  "px-utl:zoom"
];
<div>
  {utilIcons.map((icon, index) => <px.Icon size={16} key={index} icon={icon}/>)}
</div>
```

### Navigation : Medium - 22px

```react
const {Icon} = PxReact;
const navIcons = ["px-nav-back","px-nav-close","px-nav-collapse","px-nav-confirmed","px-nav-down","px-nav-expand","px-nav-favorite","px-nav-generic-user","px-nav-grid-view","px-nav-hamburger","px-nav-hierarchy","px-nav-home","px-nav-inbox-view","px-nav-instance","px-nav-list-view","px-nav-log-out","px-nav-menu","px-nav-more","px-nav-new-window","px-nav-next","px-nav-notification","px-nav-open-context","px-nav-pause","px-nav-play","px-nav-reload","px-nav-search","px-nav-stop","px-nav-tile-view","px-nav-tree","px-nav-unconfirmed","px-nav-up"];
<ul>
  {navIcons && navIcons.map((item, key) => (<li key={key}><Icon icon={item} size={24}/>{item}</li>))}
</ul>
```

### Communication : Large - 32px

```react
const comIcons = [
 "px-com:chat",
 "px-com:comment",
 "px-com:email",
 "px-com:message",
 "px-com:phone",
 "px-com:sms"
];
<div>
  {comIcons.map((icon, index) => <px.Icon size={32} key={index} icon={icon}/>)}
</div>
```

### Feature : Large - 32px

```react
const featIcons = [
  "px-fea:administration",
  "px-fea:alerts",
  "px-fea:analysis",
  "px-fea:analytics",
  "px-fea:asset",
  "px-fea:attribute",
  "px-fea:bug",
  "px-fea:calendar",
  "px-fea:cases",
  "px-fea:catalog",
  "px-fea:dashboard",
  "px-fea:data-sources",
  "px-fea:deployments",
  "px-fea:dev-ops",
  "px-fea:digital-twin",
  "px-fea:home",
  "px-fea:log",
  "px-fea:microservice",
  "px-fea:orchestration",
  "px-fea:orders",
  "px-fea:pipeline",
  "px-fea:products",
  "px-fea:spaces",
  "px-fea:tag",
  "px-fea:tag-group",
  "px-fea:templates",
  "px-fea:users",
  "px-fea:versions"
];
<div>
  {featIcons.map((icon, index) => <px.Icon size={32} key={index} icon={icon}/>)}
</div>
```

### Object : Large - 32px

```react
const objIcons = [
  "px-obj:airplane",
  "px-obj:airplane-engine",
  "px-obj:airport",
  "px-obj:automobile",
  "px-obj:boiler",
  "px-obj:cell-tower",
  "px-obj:class",
  "px-obj:condenser",
  "px-obj:controller",
  "px-obj:cooling-tower",
  "px-obj:database",
  "px-obj:desktop",
  "px-obj:edge-box",
  "px-obj:fleet",
  "px-obj:gas-turbine",
  "px-obj:gateway",
  "px-obj:hrsg",
  "px-obj:imaging-machine",
  "px-obj:light-bulb",
  "px-obj:line",
  "px-obj:line-og",
  "px-obj:locomotive",
  "px-obj:machine",
  "px-obj:manufacturing-line",
  "px-obj:plant",
  "px-obj:predix-box",
  "px-obj:product",
  "px-obj:rail-yard",
  "px-obj:routes",
  "px-obj:sensor",
  "px-obj:solar-panel",
  "px-obj:steam-turbine",
  "px-obj:train",
  "px-obj:truck",
  "px-obj:wind-turbine"
];
<div>
  {objIcons.map((icon, index) => <px.Icon size={32} key={index} icon={icon}/>)}
</div>
```

### Visualization : Medium - 22px

```react
const visIcons = [
  "px-vis:add-brush",
  "px-vis:all-points-in-area",
  "px-vis:bring-to-front",
  "px-vis:brush",
  "px-vis:closest-point",
  "px-vis:closest-point-series",
  "px-vis:crosshair",
  "px-vis:draw-stripe",
  "px-vis:expand-radius",
  "px-vis:full-screen",
  "px-vis:move-axis",
  "px-vis:pan",
  "px-vis:pin",
  "px-vis:refresh",
  "px-vis:remove-brush",
  "px-vis:remove-stripe",
  "px-vis:reset-zoom",
  "px-vis:show-tooltip",
  "px-vis:shrink-radius",
  "px-vis:trash-series",
  "px-vis:x-axis",
  "px-vis:xy-axis",
  "px-vis:y-axis",
  "px-vis:zoom-generic",
  "px-vis:zoom-in",
  "px-vis:zoom-out",
  "px-vis:zoom-out-one-level",
  "px-vis:zoom-toolbar"
];
<div>
  {visIcons.map((icon, index) => <px.Icon size={22} key={index} icon={icon}/>)}
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
  - Property: --px-icon-set
    Default: null
    Description: Mixin applied to entire element.
```
