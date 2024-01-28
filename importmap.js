const importmap = {
  imports: {
    lit: "./node_modules/lit/index.js",
    "lit/": "./node_modules/lit/",
    "lit-element/lit-element.js": "./node_modules/lit-element/lit-element.js",
    "lit-html/": "./node_modules/lit-html/",
    "lit-html": "./node_modules/lit-html/lit-html.js",
    "@lit/reactive-element":
      "./node_modules/@lit/reactive-element/reactive-element.js",
    "@lit/reactive-element/": "./node_modules/@lit/reactive-element/",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.currentScript.after(element);
};

injectImportmap(importmap);
