const path = require("path");

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    proxies: {
      "/node_modules/": "/base/node_modules/",
    },
    files: [
      { pattern: "importmap.js" },
      { pattern: "./node_modules/lit/index.js", type: "module" },
      { pattern: "./node_modules/lit/decorators.js", type: "module" },
      { pattern: "./node_modules/lit-html/*.js", type: "module" },
      { pattern: "./node_modules/lit-element/lit-element.js", type: "module" },
      {
        pattern: "./node_modules/@lit/reactive-element/decorators/*.js",
        type: "module",
      },
      { pattern: "./node_modules/@lit/reactive-element/*.js", type: "module" },
      { pattern: "./src/**/*.js", type: "module" },
      { pattern: "./test/**/*.js", type: "module" },
    ],
    preprocessors: {
      "src/**/!(*.test).js": ["karma-coverage-istanbul-instrumenter"],
    },
    reporters: ["spec", "coverage-istanbul"],
    coverageIstanbulInstrumenter: {
      esModules: true,
    },
    coverageIstanbulReporter: {
      reports: ["html", "text", "lcovonly"],
      dir: path.join(__dirname, "coverage"),
      skipFilesWithNoCoverage: true,
    },
    browsers: ["ChromeHeadless"],
    singleRun: true,
    logLevel: config.DEBUG,
  });
};
