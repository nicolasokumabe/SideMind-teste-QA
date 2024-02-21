const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 50000,
  viewportWidth: 1440,
  viewportHeight: 900,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },  

    video: true
  },
});
