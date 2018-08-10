let questions = require('../data/questions.json');

let textFieldCommands = {
  verifyQuestionText: function(qid){
    let question = questions[qid];
    let questionXPath = `//div[@class='flow-question-header-title'][text()="` + question + `"]`;

    this
      .api.useXpath()
      .waitForElementPresent(questionXPath, this.api.globals.waitTime)
      .expect.element(questionXPath).text.to.contain(question);

    return this;
  },

  fillZipCode: function(code) {
    this
      .waitForElementPresent('@zipCodeField', this.api.globals.waitTime)
      .setValue('@zipCodeField', code);

    return this;
  },

  fillDOB: function(date) {
    this
      .waitForElementPresent('@dobField', this.api.globals.waitTime)
      .setValue('@dobField', date);

    return this;
  },

  fillEmail: function(email){
    this
      .waitForElementPresent('@standardField', this.api.globals.waitTime)
      .setValue('@standardField', email)
      .waitForElementPresent('@continueButton', this.api.globals.waitTime)
      .click('@continueButton');

    return this;
  }

};

module.exports = {
  commands: [textFieldCommands],
  elements: {
    zipCodeField: '#id_chat_quesiton_whats_your_zip_code',
    dobField: '#id_chat_quesiton_whats_your_birthdate',
    standardField: '.flow-question-text_field-input',
    continueButton: {
      selector: '//button[text()="Continue"]',
      locateStrategy: 'xpath'
    }
  }
};
