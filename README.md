# px-components-react

> React Components that Implement Predix's Design System.
> https://www.predix-ui.com/#/home

Why? Well the current `px` component library is built with Polymer and Web Components. So this port will attempt to bring those components to a React compatible library.

[![Build Status](https://travis-ci.org/jonniespratley/px-components-react.svg?branch=master)](https://travis-ci.org/jonniespratley/px-components-react) [![bitHound Score](https://www.bithound.io/github/jonniespratley/px-components-react/badges/score.svg)](https://www.bithound.io/github/jonniespratley/px-components-react) [![codecov](https://codecov.io/gh/jonniespratley/px-components-react/branch/master/graph/badge.svg)](https://codecov.io/gh/jonniespratley/px-components-react) [![Dependency Status](https://david-dm.org/jonniespratley/px-components-react.svg)](https://david-dm.org/jonniespratley/px-components-react) [![devDependencies Status](https://david-dm.org/jonniespratley/px-components-react/dev-status.svg)](https://david-dm.org/jonniespratley/px-components-react?type=dev)  [![peerDependencies Status](https://david-dm.org/jonniespratley/px-components-react/peer-status.svg)](https://david-dm.org/jonniespratley/px-components-react?type=peer)


## Install
To use this library simply install it with `npm` or `yarn`:

```
$ npm install px-components-react
```

Then import the library or just components you want.

```
import px from 'px-components-react';
import {Button} from 'px-components-react';

<Button label='My Button' primary/>
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

## License

Available under MIT. See LICENSE for more details.
