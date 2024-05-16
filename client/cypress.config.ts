"use strict";
exports.__esModule = true;
var cypress = require("cypress");
module.exports = {
  ...(0, cypress.defineConfig)({
    e2e: {
      baseUrl: "http://localhost:3000",
      setupNodeEvents: function (on, config) {
        on("task", {});
      },
    },
  }),

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
};
