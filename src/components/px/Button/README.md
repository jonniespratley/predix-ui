The `<Button/>` component provides a way to use Predix Design buttons.


```hint
Reference https://github.com/PredixDev/px-buttons-design
```

## Usage


```react|lang-jsx
const { Button } = PxReact;
<div>
  <Button>Button</Button>
  <Button bare>Button</Button>
  <Button primary>Button</Button>
  <Button tertiary>Button</Button>
  <Button disabled>Button</Button>
</div>
```

### Sizes
```react|lang-jsx
const { Button } = PxReact;
<div>
  <Button small>Button</Button>
  <Button>Button</Button>
  <Button large>Button</Button>
  <Button huge>Button</Button>
</div>
```

### Custom style

```react|lang-jsx
const { Button } = PxReact;
<div>
  <Button className='btn--danger' large>Button</Button>
  <style>{`
    .btn--danger {
      color: white;
      background-color: red;
    }
    .btn--danger:hover,
    .btn--danger:focus,
    .btn--danger:active {
      color: white;
      background-color: darkred;
    }
  `}</style>
</div>
```

## Properties

```table
span: 6
rows:
  - Name: primary
    Type: Boolean
    Description: Enable primary button
  - Name: bare
    Type: Boolean
    Description: Enable bare button
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
