# px-input
The `<input/>` component enables you to ...



## Usage

```code
const { Input } = px;
<form >
  <fieldset class="form-field" style="max-width:400px;">
    <legend >Basic form</legend>
    <ol class="list-bare">
      <li class="form-field">
        <label for="basic-form-name" >Name</label>
        <input class="text-input" id="basic-form-name" type="text" placeholder="First name">
      </li>
      <li class="form-field">
        <input id="basic-form-checkbox" type="checkbox" >
        <span class="label--inline" for="basic-form-checkbox">No Lastname</span>
      </li>
      <li class="form-field">
        <select >
          <option >First</option>
          <option >Second</option>
          <option >Third</option>
        </select>
      </li>
      <li class="form-field">
        <textarea placeholder="Enter text here..." ></textarea>
      </li>
      <li class="form-field">
        <input id="checkbox1" type="checkbox" >
        <label class="label--inline" for="checkbox1">Option 1</label>
        <br >
        <input id="checkbox2" class="u-mt" type="checkbox">
        <label class="label--inline" for="checkbox2">Option 2</label>

      </li>


    </ol>
    <input class="btn" type="reset" value="Cancel">
    <input class="btn btn--primary" type="submit" value="Submit">
  </fieldset>
</form>
```

```react
const { Input } = px;
<Input/>
```


## Properties

```table
span: 6
rows:
  - Name: children
    Type: node
    Description: The child nodes.
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
