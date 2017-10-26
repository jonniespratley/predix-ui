The `<Input/>` component enables you to use design system inputs in your app.



```hint
Reference https://www.predix-ui.com/#/css/visual/px-forms-design
```


## Usage

```react
const { Button, Input } = px;
const FormField = (props) => (<div className='u-mb-'>{props.children}</div>);
<form>
  <FormField>
    <Input label='Username' name='username'/>
  </FormField>
  <FormField>
    <Input label='Password' name='password' type='password'/>
  </FormField>
  <Button label='Submit' type='submit' primary/>
</form>
```

### Sizes

```react
const { Button, Input } = px;
const FormField = (props) => (<div className='u-mb-'>{props.children}</div>);
<form>
  <FormField>
    <Input label='Input Label' name='input1' tiny placeholder='Tiny size'/>
  </FormField>
  <FormField>
    <Input label='Input Label' name='input2' small placeholder='Small size'/>
  </FormField>
  <FormField>
    <Input label='Input Label' name='input3' regular placeholder='Regular size'/>
  </FormField>
  <FormField>
    <Input label='Input Label' name='input4' large placeholder='Large size'/>
  </FormField>
  <FormField>
    <Input label='Input Label' name='input5' huge placeholder='Huge size'/>
  </FormField>
  <FormField>
    <Input label='Input Label' name='input6' placeholder='Auto size'/>
  </FormField>
  <Button label='Submit' type='submit' primary/>
</form>
```

### Types

```react
const { Button, Input } = px;
const FormField = (props) => (<div className='u-mb-'>{props.children}</div>);
const inputTypes = ['color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week'];
<form>
  {inputTypes.map((type, index) => (
    <FormField key={index}>
      <Input label={type} name={type} type={type}/>
    </FormField>
  ))}
  <Button label='Submit' type='submit' primary/>
</form>
```


### Input Field

```
<label for="input1" >Input Label</label>
<input class="text-input" id="input1" type="text" placeholder="Type something...">
```

### Checkbox

```
<input id="checkbox1" type="checkbox" disabled="" >
<label class="label--inline" for="checkbox1">Checkbox</label>
```


## Properties

```table
span: 6
rows:
  - Name: name
    Type: string
    Description: The input name
  - Name: label
    Type: string
    Description: The input label
  - Name: type
    Type: string
    Description: The input type
```


### Styling
The following custom properties are available for styling.

```table
span: 6
rows:
  - Property: --px-input
    Default: null
    Description: Mixin applied to entire element.
```
