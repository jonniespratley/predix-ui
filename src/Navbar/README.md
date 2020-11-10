The `<Navbar/>` component enables navigation through an information hierarchy and, optionally, management of screen contents.


## Usage


```react
const styles = {
  title: {
    cursor: 'pointer',
    fontSize: '2rem'
  }
};
<px.Navbar
  title={<span style={styles.title}>Title</span>}
  showBackButton/>
```

### With buttons

```react
const {Navbar, Button} = PxReact;

<Navbar
  title='Title' 
  iconElementRight={<Button>Save</Button>}/>
```

### With back button
```react
<px.Navbar
  title='Navbar'
  subtitle='Subtitle'
  showBackButton/>
```

### With menu

```react
<px.Navbar
  title='Navbar'
  subtitle='Subtitle'
  showMenuButton/>
```

### Custom icons

```react
<px.Navbar
  title='Navbar'
  subtitle='Subtitle'
  iconNameLeft='px-nav:close'
  iconNameRight='px-nav:menu'/>
```

### With custom CSS

```react
<div className='custom'>
  <style>{`
    .custom{
      --px-navbar-font-color: white;
      --px-navbar-button-color: white;
      --px-navbar-background-color: rgb(0, 188, 212);
    }
  `}</style>
  <px.Navbar
    title='Navbar'
    showMenuButton/>
</div>
```

## Properties

```table
span: 6
rows:
  - Name: title
    Type: String
    Description: Header text for navbar.

  - Name: subtitle
    Type: String
    Description: Subtitle header text for navbar.

  - Name: showBackButton
    Type: Boolean
    Description: Show the back button in the navbar.

  - Name: showMenuButton
    Type: Boolean
    Description: Show the menu button in the navbar.

  - Name: onMenuButtonClick
    Type: Function
    Description: Callback to invoke when clicked

  - Name: onBackButtonClick
    Type: Function
    Description: Callback to invoke when clicked

```

## Styling
The following custom properties are available for styling:

```table
rows:
  - Property: --px-navbar
    Default: null
    Description: Style mixin to be applied to the element

  - Property: --px-navbar-background-color
    Default: null
    Description: Background color.

  - Property: --px-navbar-title
    Default: null
    Description: Style mixin applied to the title

  - Property: --px-navbar-subtitle
    Default: null
    Description: Style mixin applied to the sub title

  - Property: --px-navbar-button
    Default: null
    Description: Style mixin applied to the button

```
