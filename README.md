[![build status](https://secure.travis-ci.org/jonniespratley/px-components-react.svg)](http://travis-ci.org/jonniespratley/px-components-react) [![bitHound Score](https://www.bithound.io/github/jonniespratley/px-components-react/badges/score.svg)](https://www.bithound.io/github/jonniespratley/px-components-react) [![Dependency Status](https://david-dm.org/jonniespratley/px-components-react.svg)](https://david-dm.org/jonniespratley/px-components-react)

# px-components-react -
Boilerplate for React.js components This is a simple boilerplate that has been developed to make it easier to develop React components and small projects.



### Common Tasks

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

### Testing

The test setup is based on Jest. Code coverage report is generated to `coverage/`. The coverage information is also uploaded to codecov.io after a successful Travis build.

* Running tests once - **npm test**
* Running tests continuously - **npm run test:watch**
* Running individual tests - **npm test -- <pattern>** - Works with `test:watch` too.
* Linting - **npm run test:lint** - Runs ESLint.

### Documentation Site

The boilerplate includes a [GitHub Pages](https://pages.github.com/) specific portion for setting up a documentation site for the component. The main commands handle with the details for you. Sometimes you might want to generate and deploy it by hand, or just investigate the generated bundle.

* Building - **npm run gh-pages** - Builds the documentation into `./gh-pages` directory.
* Deploying - **npm run deploy-gh-pages** - Deploys the contents of `./gh-pages` to the `gh-pages` branch. GitHub will pick this up automatically. Your site will be available through *<user name>.github.io/<project name>`.
* Generating stats - **npm run stats** - Generates stats that can be passed to [webpack analyse tool](https://webpack.github.io/analyse/). This is useful for investigating what the build consists of.

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
