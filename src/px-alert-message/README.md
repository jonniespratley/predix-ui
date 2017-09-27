# px.AlertMessage
Alert Messages appear in a queue within the message container. Each message consists of an icon, title, body, and action.

> https://www.predix-ui.com/#/elements/px-alert-message

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


## Props

```table
span: 6
rows:
  - Name: label
    Type: String
    Description: This is the desc
```


### Styling
The following custom properties are available for styling:
Custom property | Description

:----------------|:-------------
`--px-alert-message-background-color` | Background color for the body of the alert
`--px-alert-message-text-color` | Text color for the title and message
`--px-alert-message-color--important` | Status color for an 'important' alert
`--px-alert-message-color--warning` | Status color for a 'warning' alert
`--px-alert-message-color--error` | Status color for an 'error' alert
`--px-alert-message-color--information` | Status color for an 'information' alert
`--px-alert-message-dismiss-icon-color` | Color of the dismiss icon
