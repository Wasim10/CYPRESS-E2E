const { defineConfig } = require("cypress");
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = defineConfig({
  video: true,                        // record videos
  videoUploadOnPasses: true,          // keep videos even on pass
  videoCompression: 32,               // compress video size
  screenshotsFolder: "cypress/screenshots",  
  screenshotOnRunFailure: true,       

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,        
    inlineAssets: true,
    overwrite: true,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss",     
    quiet: false,
    reportFilename: "my_custom_report",
    saveAllAttempts: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    supportFile: "cypress/support/e2e.js",   // ✅ tell Cypress to load custom commands
  },

  env: {
    RegisterURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    LoginURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  }
});
