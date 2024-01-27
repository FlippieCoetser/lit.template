const importmap = {
  imports: {
    lit: "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js",
    "lit/decorators.js": "./node_modules/lit/decorators.js",
    "@lit/reactive-element": "./node_modules/@lit/reactive-element",
    "@lit/reactive-element/decorators/":
      "./node_modules/@lit/reactive-element/decorators/",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.currentScript.after(element);
};

injectImportmap(importmap);
