The `<Notification/>` component provides a way to notify the user of a state change or actions taken on a specific context.

## Usage

```react
const { Notification } = px;
<Notification 
  type='important' 
  statusIcon='px-utl:delete'
  opened>
  Widget has been removed from your dashboard.
</Notification>
```

> Note: This is an uncontrolled component.

### Types 

```react
const { Notification } = px;
const types = [
	'healthy',
	'important',
	'warning',
	'error',
	'info',
	'unknown'
];
<div>
{types && types.map((type, index) => (
  <Notification 
    key={index}
    type={type} 
    opened>
    This is an {type} notification.
  </Notification>
))}
</div>
```

### Confirmation Example
```react
state:
  opened: true
---
const { Button, Notification } = px;
<div>
  <Notification 
    type='warning' 
    actionIcon='px-nav:close' 
    statusIcon='px-utl:filter'
    opened={state.opened}
    onClick={e => setState({opened: !state.opened})}>
    26 Filters
  </Notification>
  <br/>
  <Button onClick={e => setState({opened: !state.opened})}>Toggle</Button>
  <pre>{JSON.stringify(state, null, 2)}</pre>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: actionIcon
    Type: String
    Description: The action icon.
  - Name: statusIcon
    Type: String
    Description: The status icon.
  - Name: children
    Type: node
    Description: The child nodes.
  - Name: slotRight
    Type: node
    Description: The right content.
  - Name: opened
    Type: Boolean
    Description: The visiblity of the notification.
  - Name: type
    Type: String
    Description: The type of notification.
```


### Styling
The following custom properties are available for styling.

```table
span: 6
rows:
  - Custom Property: --px-notification-height	
    Description: Height of the notification. Defaults to 80px on a mobile device, and 40px otherwise.
```
