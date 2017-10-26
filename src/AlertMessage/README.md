The `<AlertMessage/>` component appear in a queue within the message container. Each message consists of an icon, title, body, and action.

```hint
Reference https://www.predix-ui.com/#/elements/px-alert-message
```

## Usage

```react
<px.AlertMessage
  type='information'
  messageTitle='Alert'
  message='This is an information message'
  visible/>
```
```react
<px.AlertMessage
  type='error'
  messageTitle='Alert'
  message='This is an error message'
  visible/>
```

### Types

```react
<px.AlertMessage
  type='important'
  messageTitle='Alert'
  message='This is an important message'
  visible/>
```


## Properties

```table
span: 6
rows:
  - Name: action
    Type: string
    Description: dismiss, acknowledge
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
