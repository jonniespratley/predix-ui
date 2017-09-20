# px-button
The `px-button` component provides a way to use Predix Design buttons. (https://github.com/PredixDev/px-buttons-design)

## Props

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

```hint|neutral
A neutral hint.
```

## Color Palette

```color-palette
colors:
  - {name: "100", value: "#e3f1fc"}
  - {name: "200", value: "#c2d8ea"}
```

## Usage


```react|lang-jsx
<div>
  <px.Button label='Button'/>
  <px.Button label='Button' primary/>
  <px.Button label='Button' tertiary/>
  <px.Button label='Button' disabled/>
</div>
```

```react|lang-jsx
<div>
  <px.Button label='Button' small/>
  <px.Button label='Button' primary/>
  <px.Button label='Button' tertiary large/>
  <px.Button label='Button' disabled huge/>
</div>
```
