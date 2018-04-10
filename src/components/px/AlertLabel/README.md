The `<AlertLabel/>` component labels are used to draw attention to a particular piece of information on the screen.


## Usage

```react
---
const {AlertLabel} = PxReact;
<AlertLabel
  type='info'
  label='Info'/>
```

```react
---
const {AlertLabel} = PxReact;
<AlertLabel 
  type='warning' 
  label='warning'/>
```

```react
---
const {AlertLabel} = PxReact;
<AlertLabel 
  type='healthy' 
  label='healthy'/>
```

```react
---
const {AlertLabel} = PxReact;
<AlertLabel 
  type='error'
  label='error'/>
```

```react
---
const {AlertLabel} = PxReact;
<AlertLabel 
  type='important'
  label='important'/>
```

```react
---
const {AlertLabel} = PxReact;
<AlertLabel 
  type='unknown'
  label='unknown'/>
```


## Styling
The following custom properties are available for styling

```table
rows:
  - Custom property: --px-alert-label-border-color
    Description: Border or outline color for all labels
  - Custom property: --px-alert-label-background-color--alert
    Description: Background color for 'alert' type labels
  - Custom property: --px-alert-label-text-color--alert
    Description: Text color for 'alert' type labels
  - Custom property: --px-alert-label-background-color--warning
    Description: Background color for 'warning' type labels
  - Custom property: --px-alert-label-text-color--warning
    Description: Text color for 'warning' type labels
  - Custom property: --px-alert-label-background-color--error
    Description: Background color for 'error' type labels
  - Custom property: --px-alert-label-text-color--error
    Description: Text color for 'error' type labels
  - Custom property: --px-alert-label-background-color--information
    Description: Background color for 'information' type labels
  - Custom property: --px-alert-label-text-color--information
    Description: Text color for 'information' type labels
  - Custom property: --px-alert-label-background-color--healthy
    Description: Background color for 'healthy' type labels
  - Custom property: --px-alert-label-text-color--healthy
    Description: Text color for 'healthy' type labels
  - Custom property: --px-alert-label-background-color--unknown
    Description: Background color for 'unknown' type labels
  - Custom property: --px-alert-label-text-color--unknown
    Description: Text color for 'unknown' type labels
```

