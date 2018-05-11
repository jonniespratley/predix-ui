# predix-ui
Unoffical React components that implement Predix's Design System CSS.

[![Build Status](https://travis-ci.org/jonniespratley/predix-ui.svg?branch=develop)](https://travis-ci.org/jonniespratley/predix-ui) [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) [![Dependency Status](https://img.shields.io/david/jonniespratley/predix-ui.svg)](https://david-dm.org/jonniespratley/predix-ui)
[![npm downloads](https://img.shields.io/npm/dm/predix-ui.svg)]() [![npm version](https://img.shields.io/npm/v/predix-ui.svg)]() [![Module Formats](https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg)]()

> For more information on Predix UI visit [https://www.predix-ui.com/#/home](https://www.predix-ui.com/#/home)

Why? Well the `predix-ui` library is built with Polymer. This project attempts to bring those components to React.


## Usage
To use this library simply install it with `npm` or `yarn`:

```code
$ npm install predix-ui
```

Then import the components you want to use.

If you're not using a module bundler or package manager we also have a global ("UMD") build hosted on the unpkg CDN. Simply add the following `<script>` tag to the bottom of your HTML file:

```code
<script src="https://unpkg.com/predix-ui/dist/predix-ui.min.js"></script>
```

```js
import { Card } from 'predix-ui';                  
<Card headerText='My Card'>
    This is a card
</Card>
```

### Theme
The component styles are all in separate `.css` files or you can use the entire theme.

```code
<link rel='stylesheet prefetch' href='https://unpkg.com/predix-ui/dist/predix-ui.min.css'/>
<link rel='stylesheet prefetch' href='https://unpkg.com/predix-ui/dist/px-dark-theme.min.css'/>
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
