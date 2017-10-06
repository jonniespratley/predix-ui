# predix-ui

> React Components that Implement Predix's Design System.
> https://www.predix-ui.com/#/home

Why? Well the current `px` component library is built with Polymer and Web Components. So this port will attempt to bring those components to a React compatible library.

[![Build Status](https://travis-ci.org/jonniespratley/predix-ui.svg?branch=master)](https://travis-ci.org/jonniespratley/predix-ui)
[![bitHound Score](https://www.bithound.io/github/jonniespratley/predix-ui/badges/score.svg)](https://www.bithound.io/github/jonniespratley/predix-ui) [![codecov](https://codecov.io/gh/jonniespratley/predix-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/jonniespratley/predix-ui)

[![GitHub tag](https://img.shields.io/github/tag/jonniespratley/predix-ui.svg)]()
[![Dependency Status](https://img.shields.io/david/jonniespratley/predix-ui.svg)](https://david-dm.org/jonniespratley/predix-ui)
[![devDependencies Status](https://david-dm.org/jonniespratley/predix-ui/dev-status.svg)](https://david-dm.org/jonniespratley/predix-ui?type=dev)
[![peerDependencies Status](https://david-dm.org/jonniespratley/predix-ui/peer-status.svg)](https://david-dm.org/jonniespratley/predix-ui?type=peer)


## Install
To use this library simply install it with `npm` or `yarn`:

```
$ npm install predix-ui
```

Then import the library or just components you want.

```
import px from 'predix-ui';
import {Button} from 'predix-ui';

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
