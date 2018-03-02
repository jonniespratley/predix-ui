# px-tile
The `<tile/>` component enables you to ...



## Usage

```react
const { Tile } = PxReact;
<Tile image='http://via.placeholder.com/750x200'>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna</p>
</Tile>
```

### As Images
```react
const { Tile, Flex } = PxReact;
const images = [
  {title: 'Image 1', src:'http://via.placeholder.com/350x220', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {title: 'Image 2', src:'http://via.placeholder.com/350x220', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {title: 'Image 3', src:'http://via.placeholder.com/350x220', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {title: 'Image 4', src:'http://via.placeholder.com/350x220', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
];
<Flex wrap='true'>
  {images.map((img, index) => (
    <Flex item className='u-mr' key={index}>
      <Tile title={img.title} image={img.src}>
        {img.body}
      </Tile>
    </Flex>
  ))}
</Flex>
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
