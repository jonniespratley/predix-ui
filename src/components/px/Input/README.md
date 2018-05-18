The `<Input/>`, `<FormField/>`, `<Select/>`, `<Textarea/>` components enables you to use design system form inputs in your app.


## Usage

```react
const { Button, Input, FormField } = px;
<form>
  <FormField label='Username'>
    <Input name='username' placeholder='Username'/>
  </FormField>
  <FormField label='Password' >
    <Input name='password' type='password' placeholder='Password'/>
  </FormField>
  <Button type='submit' primary>Submit</Button>
</form>
```

### Sizes

```react
const { Button, Input, FormField } = px;
<form>
  <FormField>
    <Input name='input1' tiny placeholder='Tiny size'/>
  </FormField>
  <FormField>
    <Input name='input2' small placeholder='Small size'/>
  </FormField>
  <FormField>
    <Input name='input3' regular placeholder='Regular size'/>
  </FormField>
  <FormField>
    <Input name='input4' large placeholder='Large size'/>
  </FormField>
  <FormField>
    <Input name='input5' huge placeholder='Huge size'/>
  </FormField>
  <FormField>
    <Input name='input6' placeholder='Auto size'/>
  </FormField>
  <Button type='submit' primary>Submit</Button>
</form>
```

### HTML5 Input Types

```react
const { Button, Input, FormField } = px;
const inputTypes = [
  'color', 
  'date', 'datetime-local', 
  'month', 
  'week', 
  'time',
  'email', 
  'file', 
  'number',
  'password', 
  'range', 
  'search', 
  'tel', 
  'text', 
  'url', 
  'radio',
  'checkbox'
];
<form>
  {inputTypes.map((type, index) => (
    <FormField key={index} label={type}>
      <Input name={type} type={type}/>
    </FormField>
  ))}
  <Button type='submit' primary>Submit</Button>
</form>
```

---

#### Text Input:
```react
const { Input } = px;
<Input
  name='input1'
  type='text'
  placeholder='Type something...'/>
```

#### Textarea:
```react
const { Textarea } = px;
<form>
  <Textarea placeholder='Enter text here...'></Textarea>
  <Textarea placeholder='Disabled text area...' disabled></Textarea>
</form>
```

#### Checkbox:
```react
const { Input, Label, FormField } = px;
<form>
  <Input id='checkbox1' type='checkbox'/>
  <Label for='checkbox1' inline>Option 1</Label>
  <br/>
  <Input id='checkbox2' type='checkbox'/>
  <Label for='checkbox2' inline>Option 2</Label>
</form>
```


#### Radio button:
```react
const { Input, Label } = px;
<form>
  <Input id='radio1' name='radio-group' type='radio'/>
  <Label for='radio1' inline>Option 1</Label>
  <br/>
  <Input id='radio2' name='radio-group' type='radio'/>
  <Label for='radio2' inline>Option 2</Label>
</form>
```

#### Select (dropdown):
```react
const { Select } = px;
<form>
  <Select>
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
  </Select>
</form>
```

#### Select (multiple):
```react
const { Select } = px;
<form>
  <Select multiple>
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
  </Select>
</form>
```

#### Inline fields
```react
const { Input, Label, Select } = px;
<form>
  <Label for='inline1' inline>From</Label>
  <Input id='inline1' tiny/>
  <Label for='inline2' inline>To</Label>
  <Input id='inline2' tiny/>
</form>
```



---

## Styling
The following custom properties are available for styling

```table
span: 6
rows:
  - Custom Property: --px-input-text-color
    Description: Default font color
            
  - Custom Property: --px-input-label-text-color
    Description: Label font color
            
  - Custom Property: --px-input-text-color--placeholder
    Description: Placeholder font color
            
  - Custom Property: --px-input-text-color--placeholder--focused
    Description: Placeholder font color on focus
            
  - Custom Property: --px-input-text-color--help
    Description: Help font color
            
  - Custom Property: --px-input-background-color
    Description: Background color
            
  - Custom Property: --px-input-background-color--hover
    Description: Hover background color
            
  - Custom Property: --px-input-border-color--outer
    Description: Outer border style
            
  - Custom Property: --px-input-text-color--focused
    Description: Focused text color
            
  - Custom Property: --px-input-background-color--focused
    Description: Focused Background color
            
  - Custom Property: --px-input-border-color--outer--focused
    Description: Focused outer border color
            
  - Custom Property: --px-input-text-color--disabled
    Description: Disabled font color
            
  - Custom Property: --px-input-border-color--disabled
    Description: Disabled border color
            
  - Custom Property: --px-input-background-color--disabled
    Description: Disabled background color
            
  - Custom Property: --px-input-textarea-background--focused
    Description: Textarea focused background color
            
  - Custom Property: --px-select-text-color
    Description: Select text color
            
  - Custom Property: --px-select-background-color
    Description: Select background color
            
  - Custom Property: --px-select-background-color--hover
    Description: Select hover background color
            
  - Custom Property: --px-select-background-color--active
    Description: Select active background color
            
  - Custom Property: --px-select-border-color
    Description: Select border color
            
  - Custom Property: --px-multiselect-background-color
    Description: Multiple select background color
            
  - Custom Property: --px-validation-warning-text-color
    Description: Validation warning text color
            
  - Custom Property: --px-validation-warning-background-color
    Description: Validation warning background color
            
  - Custom Property: --px-validation-error-text-color
    Description: Validation error text color
            
  - Custom Property: --px-validation-error-background-color
    Description: Validation error background color
            
  - Custom Property: --px-validation-success-text-color
    Description: Validation success text color
            
  - Custom Property: --px-validation-success-background-color
    Description: Validation success background color
```
 