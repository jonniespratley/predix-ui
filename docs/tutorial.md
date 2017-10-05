# TODO

```hint
Work in progress....
```

## Demo Helpers
The following components are used in demos.




### Device Layout Viewer
Use the `<DeviceLayoutViewer/>` view a page on different device layouts.

```code
const {DeviceLayoutViewer} = DemoHelpers;
const url = 'https://app-shell.run.aws-usw02-pr.ice.predix.io';
<DeviceLayoutViewer
  device="all"
  src={url}/>
```


### Device View
Use the `<DeviceView/>` to display a page on a device layout.


```react
const {DeviceView} = DemoHelpers;
const url = 'https://app-shell.run.aws-usw02-pr.ice.predix.io';
const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 5
};
<div style={style}>
  <DeviceView
    landscape
    device="phone"
    src={url}/>
</div>
```




## Iron Components
The following components are implemented to transition from web components.

### `<IronCollapse/>`

```react
const { Button } = PxReact;
const { IronCollapse } = IronComponents;
<div>
  <Button label='Toggle'/>
  <IronCollapse>
    Test
  </IronCollapse>
</div>
```

### `<IronResizable/>`

```react
const { IronResizable } = IronComponents;
```

### `<IronMediaQuery/>`

```react
const { IronMediaQuery } = IronComponents;
```


### `<IronSelector/>`

```react
const { IronSelector } = IronComponents;
```
