The `<Button/>` component provides a way to use Predix Design buttons.


```hint
Reference https://github.com/PredixDev/px-buttons-design
```

## Usage


```react|lang-jsx
const { Button } = PxReact;
<div>
  <Button label='Button'/>
  <Button label='Button' primary/>
  <Button label='Button' tertiary/>
  <Button label='Button' disabled/>
</div>
```

```react|lang-jsx
const { Button } = PxReact;
<div>
  <Button label='Button' small/>
  <Button label='Button' />
  <Button label='Button' large/>
  <Button label='Button' huge/>
</div>
```

## Properties

```table
span: 6
rows:
  - Name: label
    Type: String
    Description: Label for the button
  - Name: primary
    Type: Boolean
    Description: Enable primary button
  - Name: tertiary
    Type: Boolean
    Description: Enable tertiary button
  - Name: disabled
    Type: Boolean
    Description: Enable disabled button
  - Name: small
    Type: Boolean
    Description: Enable small button
  - Name: large
    Type: Boolean
    Description: Enable large button
  - Name: huge
    Type: Boolean
    Description: Enable huge button
```



### Styling

```table
span: 6
rows:
  - Property: --my-prop
    Default: null
    Description: This is the style prop.
```
