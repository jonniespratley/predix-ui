The `<Toggle/>` is a simple on/off switch component. Use it to create UI elements that enable and disable things.


## Usage

```react
state:
  checked: false
---
const { Toggle } = PxReact;
<div>
  <Toggle id='toggle-1' name='new' value='true'
    onClick={(e) => setState({checked: !state.checked})}
    checked={state.checked}/>
  <br/>
  <Toggle id='toggle2' name='used1' value='true' size='small' checked={state.checked}/>				
  <br/>
  <Toggle id='toggle3' name='used2' value='true' size='large' checked={state.checked}/>
  <br/>
  <Toggle id='toggle4' name='used3' value='true' size='huge' checked={state.checked}/>
  <pre>{JSON.stringify(state, null, 2)}</pre>
</div>
```

> Note: This is an uncontrolled component. You must set the state via `props`.

### Disabled

```react
const { Toggle } = PxReact;
<form>
  <Toggle id='toggle2' name='used1' value='true' size='small' disabled/>				
  <br/>
  <Toggle id='toggle3' name='used2' value='true' size='large' disabled/>
  <br/>
  <Toggle id='toggle4' name='used3' value='true' size='huge' disabled/>
  <br/>
  <Toggle id='toggle2' name='used1' value='true' size='small' checked disabled/>				
  <br/>
  <Toggle id='toggle3' name='used2' value='true' size='large' checked disabled/>
  <br/>
  <Toggle id='toggle4' name='used3' value='true' size='huge' checked disabled/>
</form>
```


## Properties

```table
span: 6
rows:
  - Name: id
    Type: String
    Description: The id of the input
  - Name: name
    Type: String
    Description: The name of the input
  - Name: value
    Type: String
    Description: The value of the input
  - Name: checked
    Type: Boolean
    Description: The checked value of the input
  - Name: disabled
    Type: Boolean
    Description: The disabled value of the input
  
```


### Styling
The following custom properties are available for styling.

```table
span: 6
rows:
  - Custom Property: --px-toggle__background--checked
    Description: Toggle background color when checked and enabled.

  - Custom Property: --px-toggle__background--checked--hover
    Description: Toggle background color on hover when checked and enabled.

  - Custom Property: --px-toggle__background--checked--pressed
    Description: Toggle background color on pressed/active when checked and enabled.

  - Custom Property: --px-toggle__background--checked--disabled
    Description: Toggle background color when checked and disabled.

  - Custom Property: --px-toggle__background--unchecked
    Description: Toggle background color when unchecked and enabled.

  - Custom Property: --px-toggle__background--unchecked--hover
    Description: Toggle background color on hover when unchecked and enabled.

  - Custom Property: --px-toggle__background--unchecked--pressed
    Description: Toggle background color on pressed/active when unchecked and enabled.

  - Custom Property: --px-toggle__background--unchecked--disabled
    Description: Toggle background color when unchecked and disabled.

  - Custom Property: --px-toggle__background-border--unchecked
    Description: Toggle border color when unchecked and enabled.

  - Custom Property: --px-toggle__background-border--unchecked--hover
    Description: Toggle border color on hover when unchecked and enabled.

  - Custom Property: --px-toggle__background-border--unchecked-pressed
    Description: Toggle border color on pressed/active when unchecked and enabled.

  - Custom Property: --px-toggle__background-border--unchecked--disabled
    Description: Toggle border color when unchecked and disabled.

  - Custom Property: --px-toggle__switch
    Description: Toggle switch color when both checked and unchecked. (The `switch` is the circular part of the toggle.)

  - Custom Property: --px-toggle__switch--hover
    Description: Toggle switch color on hover when both checked and unchecked.

  - Custom Property: --px-toggle__switch--pressed
    Description: Toggle switch color on pressed/active when both checked and unchecked.

  - Custom Property: --px-toggle__switch--disabled
    Description: Toggle switch color on disabled when both checked and unchecked.

  - Custom Property: --px-toggle__switch-border
    Description: Toggle switch border color when both checked and unchecked.

  - Custom Property: --px-toggle__switch-border--hover
    Description: Toggle switch border color on hover when both checked and unchecked.

  - Custom Property: --px-toggle__switch-border--pressed
    Description: Toggle switch border color on pressed/active when both checked and unchecked.

  - Custom Property: --px-toggle__switch-border--disabled
    Description: Toggle switch border color on disabled when both checked and unchecked.

  - Custom Property: --px-toggle__switch-shadow-color
    Description: Toggle switch shadow color.
```
