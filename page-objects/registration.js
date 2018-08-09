let registrationCommands = {
  start: function() {
      this
        .waitForElementPresent('@consentCheckbox', this.api.globals.waitTime)
        .click('@consentCheckbox');

      return this;
  }
};

module.exports = {
  commands: [registrationCommands],
  url: function() {
		return this.api.launchUrl;
	},
  elements: {
    consentCheckbox: {
      selector: '.checkbox-label'
    },
    questionText: {
      selector: '.flow-question-header-title'
    },
    logo: {
      selector: '.chat-assistant-avatar-img'
    }
  }
};
