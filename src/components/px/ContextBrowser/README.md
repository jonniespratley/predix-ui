The `<Chip/>` component is a persistent object that can be toggled on and off.
The static chip is not meant to be dismissed or removed. A Static Chip is best used for curated filters.


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

```code
rows:
  - Property: --px-chip-background-color
    Description: Background color for chip

  - Property: --px-chip-background-color--hover
    Description: Background color for chip on hover

  - Property: --px-chip-background-color--selected
    Description: Background color for chip on selected

  - Property: --px-chip-border-color
    Description: Border or outline color for chip

  - Property: --px-chip-border-color--hover
    Description: Border or outline color for chip on hover

  - Property: --px-chip-border-color--selected
    Description: Border or outline color for chip on selected

  - Property: --px-chip-icon-color
    Description: Icon color

  - Property: --px-chip-icon-color--hover
    Description: Icon color on hover

  - Property: --px-chip-text-color
    Description: Text color for chip content

  - Property: --px-chip-text-color--hover
    Description: Text color for chip content on hover

  - Property: --px-chip-text-color--selected
    Description: Text color for chip content on selected

  - Property: --px-chip-max-width
    Description: Max width of the chip (default: 120px)
```
