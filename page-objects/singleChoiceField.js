let answers = require('../data/answers.json');

let singleChoiceCommands = {
  clickOption: function(aid) {
    let answer = answers[aid];
    let answerXPath = `//button[@class='flow-choice_list-link'][text()="` + answer + `"]`;

    this
      .api.useXpath()
      .waitForElementPresent(answerXPath, this.api.globals.waitTime)
      .click(answerXPath);

    return this;
  }

};

module.exports = {
  commands: [singleChoiceCommands],
  elements: {}
};
