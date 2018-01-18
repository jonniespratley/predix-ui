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
const inputTypes = [
'color', 'date', 'datetime-local', 'email', 'file', 'month', 'number',
'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week',
'radio',
'checkbox'
];
<form>
  {inputTypes.map((type, index) => (
    <FormField key={index}>
      <Input label={type} name={type} type={type}/>
    </FormField>
  ))}
  <Button label='Submit' type='submit' primary/>
</form>
```

---

### Input Field:

```react
const { Input } = px;
<Input
  name='input1'
  type='text'
  label='Input Label'
  placeholder='Type something...'/>
```

### Error Message:

```react
const { Input } = px;
<Input
  name='input1'
  type='text'
  label='Input Label'
  placeholder='Type something...'
  error
  errorMessage='This is an error message'/>
```

### Checkbox:

```html
<input id="checkbox1" type="checkbox" disabled="" >
<label class="label--inline" for="checkbox1">Checkbox</label>
```

```react
const { Input } = px;
<div>
  <Input
    name='checkbox1'
    type='checkbox'
    label='Checkbox'
    disabled
    inline/>
  <Input
    name='checkbox2'
    type='checkbox'
    label='Checkbox 2'/>
</div>
```

### Radio Button:
```html
<input id="radio1" name="radios" type="radio" disabled="" >
<p class="label--inline" for="radio1">Option 1</p>
<input id="radio2" name="radios" type="radio" disabled="" >
<p class="label--inline" for="radio2">Option 2</p>
```

### Select (Dropdown):
```html
<select>
  <optgroup label="Header 1" >
    <option >Option 1</option>
    <option >Option 2</option>
    <option >Option 3</option>
    <option >Option 4</option>
  </optgroup>
  <optgroup label="Header 2" >
    <option >Option 1</option>
    <option >Option 2</option>
    <option >Option 3</option>
    <option >Option 4</option>
  </optgroup>
</select>
```

### Multi-select:

```html
<select multiple="" >
  <option >Option 1</option>
  <option >Option 2</option>
  <option >Option 3</option>
  <option >Option 4</option>
</select>
```


### Text Area:

```html
<textarea placeholder="Type something..." ></textarea>
```

### Inline Form:

```html
<label class="label--inline" for="inline1">Label Text</label>
<input class="text-input input--small" id="inline1" type="text">
```

### Basic Form:

```html
<form >
  <fieldset class="form-field">
    <legend >Basic form</legend>
    <ol class="list-bare">
      <li class="form-field">
        <label for="basic-form-name" >Name</label>
        <input id="basic-form-name" class="text-input" type="text" placeholder="First name">
        <span class="form-field__help">Hint Text</span>
      </li>
      <li class="form-field">
        <input id="basic-form-checkbox" type="checkbox" >
        <label class="label--inline" for="basic-form-checkbox">No Lastname</label>
      </li>
    </ol>
    <input class="btn" type="reset" value="Cancel">
    <input class="btn btn--primary" type="submit" value="Submit">
  </fieldset>
</form>
```


---

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
