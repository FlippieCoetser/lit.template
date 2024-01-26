module.exports = function (wallaby) {
  return {
    files: ["importmap.js", "src/**/*.ts"],
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
