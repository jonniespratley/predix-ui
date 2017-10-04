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














```code
responsive: true
frame: true
---

<div class="demo">
  <link rel="stylesheet" href="/px-components-react.css"/>
  <style media="screen">
  .demo .flex > *,
  .demo  .layout > * {
    text-align: center;
    font-size: 1.2rem;
  }
  .demo .layout > .layout__item{
    background-color: rgba(0, 0, 0, 0.1);
  }

  .demo .layout__item p {
    background-color: rgba(0, 0, 0, 0.3);
  }
  </style>





<h2>Auto Sizing</h2>

<div class="responsive-demo">
  <div class="layout">
    <div class="layout__item">
      <p>1</p>
    </div>
  </div>
  <div class="layout">
    <div class="layout__item">
      <p>1/2</p>
    </div>
    <div class="layout__item">
      <p>1/2</p>
    </div>
  </div>
  <div class="layout">
    <div class="layout__item">
      <p>1/3</p>
    </div>
    <div class="layout__item">
      <p>1/3</p>
    </div>
    <div class="layout__item">
      <p>1/3</p>
    </div>
  </div>
  <div class="layout">
    <div class="layout__item">
      <p>1/4</p>
    </div>
    <div class="layout__item">
      <p>1/4</p>
    </div>
    <div class="layout__item">
      <p>1/4</p>
    </div>
    <div class="layout__item">
      <p>1/4</p>
    </div>
  </div>
  <div class="layout">
    <div class="layout__item">
      <p>1/6</p>
    </div>
    <div class="layout__item">
      <p>1/6</p>
    </div>
    <div class="layout__item">
      <p>1/6</p>
    </div>
    <div class="layout__item">
      <p>1/6</p>
    </div>
    <div class="layout__item">
      <p>1/6</p>
    </div>
    <div class="layout__item">
      <p>1/6</p>
    </div>
  </div>
</div>





</div>
```


## Layout Sizing

```code
responsive: true
---

<div class="demo">
  <link rel="stylesheet" href="/px-components-react.css"/>
  <style media="screen">
  .demo .flex > *,
  .demo  .layout > * {
    text-align: center;
    font-size: 1.2rem;
  }
  .demo .layout > .layout__item{
    background-color: rgba(0, 0, 0, 0.1);
  }

  .demo .layout__item p {
    background-color: rgba(0, 0, 0, 0.3);
  }
  </style>

    <!-- layout/small -->
    <h2>layout--small</h2>
    <div class="layout layout--small">
      <div class="layout__item">
        <p>1/2</p>
      </div>
      <div class="layout__item">
        <p>1/2</p>
      </div>
    </div>

      <!-- layout/large -->
      <h2>layout--large</h2>
      <div class="layout layout--large">
        <div class="layout__item">
          <p>1/2</p>
        </div>
        <div class="layout__item">
          <p>1/2</p>
        </div>
      </div>

      <!-- layout/huge -->
      <h2>layout--huge</h2>
      <div class="layout layout--huge">
        <div class="layout__item">
          <p>1/2</p>
        </div>
        <div class="layout__item">
          <p>1/2</p>
        </div>
      </div>

      <!-- layout/flush -->
      <h2>layout--flush</h2>
      <div class="layout layout--flush">
        <div class="layout__item">
          <p>1/2</p>
        </div>
        <div class="layout__item">
          <p>1/2</p>
        </div>
      </div>
</div>
```

## Layout Position

```code
responsive: true
frame: true
---

<div class="demo">
  <link rel="stylesheet" href="/px-components-react.css"/>
  <style media="screen">
  .demo .flex > *,
  .demo  .layout > * {
    text-align: center;
    font-size: 1.2rem;
  }
  .demo .layout > .layout__item{
    background-color: rgba(0, 0, 0, 0.1);
  }

  .demo .layout__item p {
    background-color: rgba(0, 0, 0, 0.3);
  }
  </style>
  <!-- layout/middle -->
  <h2>layout--middle</h2>
  <div class="layout layout--middle">
    <div class="layout__item">
      <p>1/2</p>
    </div>
    <div class="layout__item">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>

  <!-- layout/bottom -->
  <h2>layout--bottom</h2>
  <div class="layout layout--bottom">
    <div class="layout__item">
      <p>1/2</p>
    </div>
    <div class="layout__item">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>

  <!-- layout/bottom -->
  <h2>layout----full</h2>
  <div class="layout layout--full">
    <div class="layout__item">
      <p>1/2</p>
    </div>
    <div class="layout__item">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>
```
