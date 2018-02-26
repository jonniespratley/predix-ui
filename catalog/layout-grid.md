The `<Grid/>` component provides layout styles that include the following options:

## How it works
The grid system is implemented with the <Grid /> component:

- It’s using CSS’s Flexible Box module for high flexibility.
- There is two type of layout: containers and items.
- Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.
- Items have padding to create the spacing between individual items.
- There are five grid breakpoints: xs, sm, md, lg, and xl.



### Using Grid


```react
const { Grid } = PxReact;

<Grid container>
  <Grid item xs={1}>
    xs=1
  </Grid>


  <Grid item xs={2} sm={4}>
    xs=2 sm=4
  </Grid>
  <Grid item xs={2} sm={4}>
    xs=2 sm=4
  </Grid>


  <Grid item xs={6} sm={3}>
    xs=6 sm=3
  </Grid>
  <Grid item xs={6} sm={3}>
    xs=6 sm=3
  </Grid>
  <Grid item xs={6} sm={3}>
    xs=6 sm=3
  </Grid>
  <Grid item xs={6} sm={3}>
    xs=6 sm=3
  </Grid>


</Grid>
```

### Using Layout
```react
const { Layout } = PxReact;

<Layout container>
  <Layout item xs={12}>
    xs=12
  </Layout>
</Layout>

```


### Layout Position

```react
const {Layout} = PxReact;

<Layout container bottom>
  <Layout item>
    Item 1
  </Layout>
  <Layout item>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Layout>
  <Layout item>
    Item 3
  </Layout>
  <style>{`
    .layout div {
      
    }
  `}</style>
</Layout>
```

```react
const {Layout} = PxReact;
<Layout container middle>
  <Layout item>
    Item 1
  </Layout>
  <Layout item>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Layout>
  <Layout item>
    Item 3
  </Layout>
</Layout>
```
