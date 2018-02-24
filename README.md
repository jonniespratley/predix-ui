# predix-ui
Unoffical React components that implement Predix's Design System CSS.

> For more information on Predix UI visit https://www.predix-ui.com/#/home

Why? Well the current `px` component library is built with Polymer and Web Components. So this port will attempt to bring those components to a React compatible library.

[![Build Status](https://travis-ci.org/jonniespratley/predix-ui.svg?branch=master)](https://travis-ci.org/jonniespratley/predix-ui)
[![bitHound Score](https://www.bithound.io/github/jonniespratley/predix-ui/badges/score.svg)](https://www.bithound.io/github/jonniespratley/predix-ui)
[![codecov](https://codecov.io/gh/jonniespratley/predix-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/jonniespratley/predix-ui)

[![Dependency Status](https://img.shields.io/david/jonniespratley/predix-ui.svg)](https://david-dm.org/jonniespratley/predix-ui)
[![devDependencies Status](https://david-dm.org/jonniespratley/predix-ui/dev-status.svg)](https://david-dm.org/jonniespratley/predix-ui?type=dev)
[![peerDependencies Status](https://david-dm.org/jonniespratley/predix-ui/peer-status.svg)](https://david-dm.org/jonniespratley/predix-ui?type=peer)

[![npm](https://img.shields.io/npm/dw/predix-ui.svg)]()
[![npm](https://img.shields.io/npm/v/predix-ui.svg)]()


## Usage
To use this library simply install it with `npm` or `yarn`:

```code
$ npm install predix-ui
```

Then import the components you want to use.

```js
import { Card } from 'predix-ui';

<Card headerText='My Card'>
    This is a card
</Card>
```

### Theme
The component styles are all in separate .css files or you can use the entire theme.

```code
<link rel='stylesheet prefetch' href='https://unpkg.com/predix-ui@0.0.9/dist/predix-ui.min.css'/>
<link rel='stylesheet prefetch' href='https://unpkg.com/predix-ui@0.0.9/dist/css/Theme/px-dark-theme.min.css'/>
```

## Starter Project
You can get started quickly with this starter project.

```html
<div class="glitch-embed-wrap" style="height: 450px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/jps-react-predix-ui-starter?path=src/components/App/index.js&previewSize=100" alt="jps-react-predix-ui-starter on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
```




---

## License
See LICENSE for more details.
