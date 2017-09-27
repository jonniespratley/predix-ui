This is about layout basics.


### Base Screen Sizes

- Desktop	1280x960
- Tablet	1024x768
- Mobile	320x568




## Grid Variations

There are five variations of the grid to supporting a one to six column layout, allowing a designer to choose a layout that matches the information to display.

### Six Column Grid
For information-dense screens and workflows such as cases, or asset records

```react
const {Grid} = px;
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
const {Grid} = px;
<Grid container>
  <Grid item>Item 1</Grid>
  <Grid item>Item 2</Grid>
  <Grid item>Item 3</Grid>
</Grid>
```




### Single Column
Commonly used for dashboards or layouts with large widgets displaying high level information.

```react
const {Grid} = px;
<Grid container>
  <Grid item>Item 1</Grid>
</Grid>
```
