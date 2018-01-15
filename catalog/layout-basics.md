## Basic Structure

The basic components of a page include an optional branding area, navigation, cards to group similar content, and an optional footer. Navigation may live on the left side or the top of the page structure.



```image
plain: true
span: 3
src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/horizontal_layout.webp"
title: "Page assembly with horizontal navigation"
```

```image
plain: true
span: 3
src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/vertical_layout.webp"
title: "Page assembly with vertical navigation"
```



### Base Screen Sizes

- Desktop	1280x960
- Tablet	1024x768
- Mobile	320x568




## Grid Variations

There are five variations of the grid to supporting a one to six column layout, allowing a designer to choose a layout that matches the information to display.

### Six Column Grid
For information-dense screens and workflows such as cases, or asset records

```react
const {Grid} = PxReact;
<Grid container>
  <Grid item>Item 1</Grid>
  <Grid item>Item 2</Grid>
  <Grid item>Item 3</Grid>
  <Grid item>Item 4</Grid>
  <Grid item>Item 5</Grid>
  <Grid item>Item 6</Grid>
</Grid>
```

### Three & Four Column Grids
Commonly used for dashboards or layouts with large widgets displaying high level information.

```react
const {Grid} = PxReact;
<Grid container>
  <Grid item>Item 1</Grid>
  <Grid item>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Grid>
  <Grid item>Item 3</Grid>
</Grid>
```

### Single Column
Commonly used for dashboards or layouts with large widgets displaying high level information.

```react
const {Grid} = PxReact;
<Grid container>
  <Grid item>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Grid>
</Grid>
```

## Cards
Cards are used to group similar information into logical groups to make it easier for people to consume. They consist of a header area and content area, with spacing in between

```react
const { Card, Grid, Layout } = PxReact;
<Card headerText='Card Header'>
  <Layout container>
    <Layout item>Item 1</Layout>
  </Layout>
</Card>
```
