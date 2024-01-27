module.exports = function (wallaby) {
  return {
    files: [
      "importmap.js",
      "src/**/*.ts",
      "node_modules/lit/decorators.js",
      "node_modules/@lit/reactive-element/decorators/*.js",
      "node_modules/@lit/reactive-element/*.js",
    ],
    tests: ["test/*.ts"],
    trace: true,
    compilers: {
      "**/*.ts": wallaby.compilers.typeScript({
        module: "es2020",
        target: "es2020",
        moduleResolution: "node",
        sourceMap: true,
        inlineSources: true,
      }),
    },
  };
};
