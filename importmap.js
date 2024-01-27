const importmap = {
  imports: {
    lit: "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.currentScript.after(element);
};

injectImportmap(importmap);
