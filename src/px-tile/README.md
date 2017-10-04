# px-tile
The `<tile/>` component enables you to ...



## Usage

```react
const { Tile } = PxReact;
<Tile image='https://www.predix-ui.com/bower_components/px-tile/turbine.jpg'>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna</p>
</Tile>
```


## Properties

```table
span: 6
rows:
  - Name: title
    Type: string
    Description: Main text label for the tile.
  - Name: description
    Type: string
    Description: Additional information to be displayed in the overlay of a hoverable card. Only the first ~6 lines of text will be displayed, after which it will be truncated.
  - Name: hoverable
    Type: bool
    Description: If true, hovering over the card will cause an overlay to appear with more detailed information, including the description and an optional slot for showing a footer at the bottom.
  - Name: children
    Type: node
    Description: The children content.
```


### Styling

```table
span: 6
rows:
  - Property: --px-tile-width
    Description: Width of the whole tile
    Default: 20rem

  - Property: --px-tile-height
    Description: Height of the whole tile
    Default: 17.93333rem

  - Property: --px-tile-thumbnail-width
    Description: Width of the thumbnail portion
    Default: 20rem

  - Property: --px-tile-thumbnail-height
    Description: Height of the thumbnail portion
    Default: 13.3333rem

  - Property: --px-tile-thumbnail-background-color
    Description: Background color of the thumbnail portion
    Default: white

  - Property: --px-tile-background-color
    Description: Background color of the title bar at the bottom
    Default: lightgray

  - Property: --px-tile-overlay-background-color
    Description: Background color for the overlay of a hoverable tile
    Default: black

  - Property: --px-tile-overlay-text-color
    Description: Text color for the overlay of a hoverable tile
    Default: white
```
