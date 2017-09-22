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

```react
<MyCoolComponent>My cool component</MyCoolComponent>
```


## License

Available under MIT. See LICENSE for more details.
