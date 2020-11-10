The `<BrandingBar/>` component provides a header area to contain title, logo and branding content.


## Usage

```react
const {BrandingBar} = PxReact;
<BrandingBar title="Predix Design System"/>
```

## Properties

```table
span: 6
rows:
  - Name: hideLogo
    Type: Bool
    Description: To show the logo or not.
  - Name: hidePowered
    Type: Bool
    Description: To show the powered by or not.
  - Name: responsiveWidth
    Type: String
    Description: The window size in which to hide.
  - Name: title
    Type: String
    Description: The application title to display in the lefthand corner of the branding bar.
```


### Styling

```table
span: 6
rows: 
  - Custom Property: --px-branding-bar-height
    Description: Height of the branding bar
  - Custom Property: --px-branding-bar-background-color
    Description: Background color for the branding bar
  - Custom Property: --px-branding-bar-font-size
    Description: Font size for text displayed in the branding bar
  - Custom Property: --px-branding-bar-logo-and-title-text-color
    Description: Text color of the logo and title area of the branding bar
```