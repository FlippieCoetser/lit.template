# D3 Typescript Template

Bundle free d3 typescript template used to create a browser compatible es6 module, including unit tests and documentation.

Lit can be loaded from a CDN or from NPM. See importmaps below.

## Usage

### CDN

```html
<script type="importmap">
  {
    "imports": {
      "calculator": "../lib/calculator.js",
      "lit": "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js",
      "lit/": "https://cdn.jsdelivr.net/npm/lit@3/",
      "@lit/reactive-element": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.3/reactive-element.js",
      "@lit/reactive-element/": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.3/",
      "@lit/reactive-element/decorators/": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.3/decorators/"
    }
  }
</script>
```

### NPM

```html
<script type="importmap">
  {
    "imports": {
      "calculator": "../lib/Calculator.js",
      "lit": "../node_modules/lit/index.js",
      "lit/": "../node_modules/lit/",
      "lit-element/lit-element.js": "../node_modules/lit-element/lit-element.js",
      "lit-html/": "../node_modules/lit-html/",
      "lit-html": "../node_modules/lit-html/lit-html.js",
      "@lit/reactive-element": "../node_modules/@lit/reactive-element/reactive-element.js",
      "@lit/reactive-element/": "../node_modules/@lit/reactive-element/"
    }
  }
</script>
```
