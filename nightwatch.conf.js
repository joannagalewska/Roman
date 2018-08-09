const cucumber = require('nightwatch-cucumber');
const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  "src_folders": ["tests"],
  "output_folder": "reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "page_objects_path": "page-objects",
  "globals_path": "./data/globals.js",
  "selenium": {
    "start_process": true,
    "host": "127.0.0.1",
    "server_path": seleniumServer.path,
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": chromedriver.path,
      "webdriver.gecko.driver": geckodriver.path
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "https://app.getroman.com/",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": true,
        "path": "screenshots",
        "on_failure": true
      },
      "desiredCapabilities": {
        "browserName": "chrome",
      }
    }
  }
}
