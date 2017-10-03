## Basic Structure

The basic components of a page include an optional branding area, navigation, cards to group similar content, and an optional footer. Navigation may live on the left side or the top of the page structure.



```image
plain: true
span: 3
src: "https://www.predix-ui.com/img/guidelines/horizontal_layout.png"
title: "Page assembly with horizontal navigation"
```

```image
plain: true
span: 3
src: "https://www.predix-ui.com/img/guidelines/vertical_layout.png"
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
  <Grid item>Item 2</Grid>
  <Grid item>Item 3</Grid>
</Grid>
```

### Single Column
Commonly used for dashboards or layouts with large widgets displaying high level information.

```react
const {Grid} = PxReact;
<Grid container>
  <Grid item>Item 1</Grid>
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
