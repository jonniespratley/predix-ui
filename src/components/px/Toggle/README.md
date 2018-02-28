The `<Toggle/>` is a simple on/off switch component. Use it to create UI elements that enable and disable things.


## Usage

```react
const { Toggle } = PxReact;
<div>
  <Toggle id="toggle1" name='new' value="true"/>
  <br/>
  <Toggle id="toggle2" name='used1' value="true" size='small'/>				
  <br/>
  <Toggle id="toggle3" name='used2' value="true" size='large'/>
  <br/>
  <Toggle id="toggle4" name='used3' value="true" size='huge'/>
  <br/>
  <Toggle id="toggle5" name='used4' value="true" size='huge' disabled/>
</div>
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
  - Property: --toggle-input
    Default: null
    Description: Mixin applied to entire element.
```
