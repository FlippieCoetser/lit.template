# D3 Typescript Template

Bundle free d3 typescript template used to create a browser compatible es6 module, including unit tests and documentation.

This template embraces ES6 modules and require the same from any other dependency library.
Unfortunately, D3 library is not made available as es6 downloadable modules. Here is a [link](https://github.com/d3/d3/issues/3597) with a discussion related to es6 modules. However, an es6 based d3 library is available via vendor provided **CND**. In order to enable off-line development, importmaps are used as part of a module resolution strategy to redirect requests based on bare specifiers to a **CDN** or **NPM package** resource.

Below are two examples how to lead the d3 library as an es6 module into the browser.

## CDN Usage

CDN's assumes an internet connection and is not suitable for offline development. However, using CND simplifies dependency management and is easy to setup.

This template has a small demo app that uses a CDN to load the latest version of the d3 package, see `./demo/index.html`:

```html
<script type="importmap">
  {
    "imports": {
      "calculator": "../lib/calculator.js",
      "d3": "https://cdn.jsdelivr.net/npm/d3@7/+esm"
    }
  }
</script>
```

`d3` points to the latest version of the d3 library on the jsdelivr CDN with all other d3 module dependencies resolved directory by the CDN.

## NPM Package Usage

NPM is suitable for offline development. However, using NPM requires additional configuration and is more complex to setup: `d3` and `d3-*` point to the locally installed d3 packages in the `node_modules` folder.

This template has an integrate unit test framework that redirects requests to a locally installed NPM Package. See the importmap injected into the test web app: `importmaps.js`:

```js
const importmap = {
  imports: {
    d3: "./node_modules/d3/src/index.js",
    "d3-array": "./node_modules/d3-array/src/index.js",
    "d3-axis": "./node_modules/d3-axis/src/index.js",
    "d3-chord": "./node_modules/d3-chord/src/index.js",
    "d3-brush": "./node_modules/d3-brush/src/index.js",
    "d3-color": "./node_modules/d3-color/src/index.js",
    "d3-contour": "./node_modules/d3-contour/src/index.js",
    "d3-delaunay": "./node_modules/d3-delaunay/src/index.js",
    "d3-dispatch": "./node_modules/d3-dispatch/src/index.js",
    "d3-drag": "./node_modules/d3-drag/src/index.js",
    "d3-dsv": "./node_modules/d3-dsv/src/index.js",
    "d3-ease": "./node_modules/d3-ease/src/index.js",
    "d3-fetch": "./node_modules/d3-fetch/src/index.js",
    "d3-force": "./node_modules/d3-force/src/index.js",
    "d3-format": "./node_modules/d3-format/src/index.js",
    "d3-geo": "./node_modules/d3-geo/src/index.js",
    "d3-hierarchy": "./node_modules/d3-hierarchy/src/index.js",
    "d3-interpolate": "./node_modules/d3-interpolate/src/index.js",
    "d3-path": "./node_modules/d3-path/src/index.js",
    "d3-polygon": "./node_modules/d3-polygon/src/index.js",
    "d3-quadtree": "./node_modules/d3-quadtree/src/index.js",
    "d3-random": "./node_modules/d3-random/src/index.js",
    "d3-scale": "./node_modules/d3-scale/src/index.js",
    "d3-scale-chromatic": "./node_modules/d3-scale-chromatic/src/index.js",
    "d3-selection": "./node_modules/d3-selection/src/index.js",
    "d3-shape": "./node_modules/d3-shape/src/index.js",
    "d3-time": "./node_modules/d3-time/src/index.js",
    "d3-time-format": "./node_modules/d3-time-format/src/index.js",
    "d3-timer": "./node_modules/d3-timer/src/index.js",
    "d3-transition": "./node_modules/d3-transition/src/index.js",
    "d3-zoom": "./node_modules/d3-zoom/src/index.js",
    internmap: "./node_modules/internmap/src/index.js",
    delaunator: "./node_modules/delaunator/index.js",
    "robust-predicates": "./node_modules/robust-predicates/index.js",
  },
};
```

See the `karma.conf.js` which load the specified node_modules into unit test runner context:

```js
 proxies: {
      "/node_modules/": "/base/node_modules/",
    },
    files: [
      { pattern: "importmap.js" },
      { pattern: "./node_modules/d3/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-array/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-axis/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-chord/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-brush/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-color/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-contour/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-delaunay/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-dispatch/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-drag/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-dsv/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-ease/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-fetch/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-force/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-format/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-geo/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-hierarchy/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-interpolate/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-path/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-polygon/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-quadtree/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-random/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-scale/src/**/*.js", type: "module" },
      {
        pattern: "./node_modules/d3-scale-chromatic/src/**/*.js",
        type: "module",
      },
      { pattern: "./node_modules/d3-selection/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-shape/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-time/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-time-format/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-timer/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-transition/src/**/*.js", type: "module" },
      { pattern: "./node_modules/d3-zoom/src/**/*.js", type: "module" },
      { pattern: "./node_modules/internmap/**/*.js", type: "module" },
      { pattern: "./node_modules/delaunator/**/*.js", type: "module" },
      { pattern: "./node_modules/robust-predicates/**/*.js", type: "module" }
    ]
```
