let registrationCommands = {
  start: function() {
    this
      .waitForElementPresent('@logo', this.api.globals.waitTime)
      .waitForElementPresent('@consentCheckbox', this.api.globals.waitTime)
      .click('@consentCheckbox')
      .waitForElementPresent('@getStartedButton', this.api.globals.waitTime)
      .click('@getStartedButton');

    return this;
  }
};

module.exports = {
  commands: [registrationCommands],
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    consentCheckbox: '.checkbox-label',
    getStartedButton: {
      selector: '//button[text()="Get started"]',
      locateStrategy: 'xpath'
    },
    logo: '.chat-assistant-avatar-img'
  }
};
