# px-components-react
Why? Well the current `px` component library is built with Polymer and Web Components. So this port will attempt to bring those components to a React compatible library.

[![Build Status](https://travis-ci.org/jonniespratley/px-components-react.svg?branch=master)](https://travis-ci.org/jonniespratley/px-components-react) [![bitHound Score](https://www.bithound.io/github/jonniespratley/px-components-react/badges/score.svg)](https://www.bithound.io/github/jonniespratley/px-components-react) [![Dependency Status](https://david-dm.org/jonniespratley/px-components-react.svg)](https://david-dm.org/jonniespratley/px-components-react) [![codecov](https://codecov.io/gh/jonniespratley/px-components-react/branch/master/graph/badge.svg)](https://codecov.io/gh/jonniespratley/px-components-react)

## Getting Started
To use this library simply install it with `npm` or `yarn`:

```
$ npm install px-components-react
```

### Download
You can grab the latest release below:

```download
title: px-components-react-v0.0.1(.zip)
subtitle: 150 KB
url: https://github.com/jonniespratley/px-components-react/archive/v0.0.1.zip
```

### Build

* Start dev server - `$ npm start`
* Creating a version - `$ npm version <x.y.z>`
* Publishing a version - `$ npm publish`
* Create a dist build - `$ npm run dist`

### Test
* Running tests: `$ npm test`
* Running code coverage: `$ npm run test:coverage`
* Running tests continuously: `$ npm run test:watch`
* Running individual tests: `$ npm test -- <pattern>`
* Linting with eslint: `$ npm run test:lint`

### Docs
* Building documentation: `$ npm run gh-pages`
* Deploying documentation: `$ npm run gh-pages:deploy`
* Generating bundle stats: `$ npm run gh-pages:stats`


---

## Highlighting Demo for the Site

```js
var a = 5;
var b = 10;

// just trying out code highlighting feature here
console.log(a + b);
```


```html
iframe: true
---
<style media="screen">
  :root{
    --px-btn-background: pink;
    --px-drawer-background-color: red;
  }
</style>

<script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js'></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<link rel="stylesheet" href="../dist/px-components-react.css"/>
<script src="../dist/px-components-react.js"></script>
<script type="text/babel">
  const { Component } = React;
  const { render } = ReactDOM;
  const { px } = PxReact;

  const List = (props) => (
    <ul class="list">
      {props.children}
    </ul>
  );

  class App extends Component {
    render(){
      return (
        <div id="app">
          <div class="box">
            <h1>PxReact Component Example</h1>
            <p>Here is an example.</p>
          </div>
          <px.Button label='Button'></px.Button>
        </div>
      )
    }
  }

  render(<App />, document.querySelector('#app'));
</script>
```


## License

Available under MIT. See LICENSE for more details.
