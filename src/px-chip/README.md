The `<Chip/>` component is a persistent object that can be toggled on and off.
The static chip is not meant to be dismissed or removed. A Static Chip is best used for curated filters.


```hint
Work in progress
```

## Usage

```react
const {Chip} = PxReact;
<Chip showIcon selected>
  Text Label
</Chip>
```


## Properties

```table
span: 6
rows:
  - Name: children
    Type: node
    Description: This contents of the chip.
  - Name: showIcon
    Type: bool
    Description: Toggle the icon on or off.
```


### Styling
The following custom properties are available for styling:
Custom property | Description
:----------------|:-------------
`--px-chip-background-color` | Background color for chip
`--px-chip-background-color--hover`| Background color for chip on hover
`--px-chip-background-color--selected` | Background color for chip on selected
`--px-chip-border-color` | Border or outline color for chip
`--px-chip-border-color--hover` | Border or outline color for chip on hover
`--px-chip-border-color--selected` | Border or outline color for chip on selected
`--px-chip-icon-color` | Icon color
`--px-chip-icon-color--hover` | Icon color on hover
`--px-chip-text-color` | Text color for chip content
`--px-chip-text-color--selected` | Text color for chip content on selected
`--px-chip-max-width` | Max width of the chip (default: 120px)
