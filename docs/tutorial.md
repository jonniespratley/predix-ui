

## TODO

### Device Layout Viewer
Use the `<DeviceLayoutViewer/> view a page on different device layouts.


```react
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
<DeviceView
  landscape
  device="phone"
  src={url}/>
```
