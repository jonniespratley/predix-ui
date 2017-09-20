# px-components-react
Why? Well the current `px` component library is built with Polymer and Web Components. So this port will attempt to bring those components to a React compatible library.

[![build status](https://secure.travis-ci.org/jonniespratley/px-components-react.svg)](http://travis-ci.org/jonniespratley/px-components-react)
[![bitHound Score](https://www.bithound.io/github/jonniespratley/px-components-react/badges/score.svg)](https://www.bithound.io/github/jonniespratley/px-components-react)
[![Dependency Status](https://david-dm.org/jonniespratley/px-components-react.svg)](https://david-dm.org/jonniespratley/px-components-react)





### Common Tasks

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

### Testing

The test setup is based on Jest. Code coverage report is generated to `coverage/`.
> The coverage is uploaded to codecov.io after successful Travis build.

* Running tests once:
  ```
  $ npm test
  ```
* Running tests continuously:
  ```
  $ npm run test:watch
  ```
* Running individual tests:
  ```
  $ npm test -- <pattern>
  ```
* Linting with eslint:
  ```
  $ npm run test:lint
  ```

### Documentation Site

The boilerplate includes a [GitHub Pages](https://pages.github.com/) specific portion for setting up a documentation site for the component. The main commands handle with the details for you. Sometimes you might want to generate and deploy it by hand, or just investigate the generated bundle.

* Building documentation:
  ```
  $ npm run gh-pages
  ```
  > Builds the documentation into `./gh-pages` directory.

* Deploying documentation:
  ```
  $ npm run deploy-gh-pages
  ```
  > Deploys the contents of `./gh-pages` to the `gh-pages` branch.

* Generating bundle stats:
  ```
  $ npm run stats
  ```
  > Generates stats that can be passed to [webpack analyse tool](https://webpack.github.io/analyse/).




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
