# px.AlertLabel

Alert labels are used to draw attention to a particular piece of information on the screen.

Each type of label (important, warning, error, information, healthy, and unknown) has its own distinct background color and appropriate font color for maximum visibility.

The text within the label is configurable, but will always show up in all capital letters.
> Avoid using action verbs in an alert label, as users may confuse the label for a button.


## Usage

```react
span: 2
---
<PxAlertLabel
  label='Info'
  type='info'/>
```

```react
span: 2
---
<PxAlertLabel
  label='warning'
  type='warning'/>
```

```react
span: 2
---
<PxAlertLabel
  label='healthy'
  type='healthy'/>
```

```react
span: 2
---
<PxAlertLabel
  label='error'
  type='error'/>
```

```react
span: 2
---
<PxAlertLabel
  label='important'
  type='important'/>
```
