The `px.Navbar` component is a responsive mobile first navigation bar.

## Usage


```react
<px.Navbar
  title='Navbar'
  subtitle='Subtitle'
  backButtonLabel='< Back'
  showBackButton/>
```
```react
<px.Navbar
  title='Navbar'
  subtitle='Subtitle'
  
  showMenuButton/>
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
