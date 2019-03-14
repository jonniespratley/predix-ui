The `<AlertMessage/>` component appear in a queue within the message container. Each message consists of an icon, title, body, and action.


## Usage

```react
<px.AlertMessage
  type='information'
  messageTitle='Alert'
  message='This is an information message'
  visible/>
```

> Note: This is an uncontrolled component.

### Types

```react
const {AlertMessage} = PxReact;
const types = ['info', 'warning', 'error', 'success', 'important', 'unknown'];
<div>
  <AlertMessage type='info' messageTitle='Alert' message='This is an message' visible/>
  <AlertMessage type='warning' messageTitle='Alert' message='This is an message' visible/>
  <AlertMessage type='error' messageTitle='Alert' message='This is an message' visible/>
  <AlertMessage type='important' messageTitle='Alert' message='This is an message' visible/>
  <AlertMessage type='success' messageTitle='Alert' message='This is an message' visible/>
  <AlertMessage type='unknown' messageTitle='Alert' message='This is an message' visible/>
</div>
```


## Properties

```table
span: 6
rows:
  - Name: action
    Type: String
    Description: Show dismiss icon, or show acknowledge button
  
  - Name: message
    Type: String
    Description: The content of the message.
  
  - Name: messageTitle
    Type: String
    Description: The title of the message.
  
  - Name: type
    Type: String
    Description: The type of message.
  
  - Name: actions
    Type: Node
    Description: Render actions component.
  
  - Name: onActionClick
    Type: Function
    Description: Invoked when action button is clicked
  
  - Name: onDismissClick
    Type: Function
    Description: Invoked when dismiss button is clicked

```



### Styling
The following custom properties are available for styling:
```table
span: 6
rows:
  - Property: --px-alert-message-background-color
    Default: null
    Description: Background color for the body of the alert

  - Property: --px-alert-message-text-color
    Default: null
    Description: Text color for the title and message

  - Property: --px-alert-message-color--important
    Default: null
    Description: Status color for an 'important' alert

  - Property: --px-alert-message-color--warning
    Default: null
    Description: Status color for a 'warning' alert

  - Property: --px-alert-message-color--error
    Default: null
    Description: Status color for an 'error' alert

  - Property: --px-alert-message-color--information
    Default: null
    Description: Status color for an 'information' alert

  - Property: --px-alert-message-dismiss-icon-color
    Default: null
    Description: Color of the dismiss icon
```
