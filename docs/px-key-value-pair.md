The `px.KeyValuePair` component allows you to prominently display information in a dashboard.


## Usage

```react
span: 6
---
<px.KeyValuePair
  label="Lorem Ipsum"
  value="12345"
  uom="units"
  size="alpha"/>
```


## Properties

```table
span: 6
rows:
  - Name: label (key)
    Type: String
    Description: The label (key) of the key-value pair

  - Name: size
    Type: String
    Description: The display size of the value in the key-value pair. (alpha, beta, gamma, delta, epsilon, regular)

  - Name: uom
    Type: String
    Description: The unit of measure for the value

  - Name: value
    Type: String
    Description: The value of the key-value pair
```
