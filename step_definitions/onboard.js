const { Given, Then, When } = require('cucumber');
const { client} = require('nightwatch-cucumber');
let registration = browser.page.registrationPage();
let field = browser.page.textField();
let singleChoice = browser.page.singleChoiceField();

  Given(/^I want to be a Roman user$/, () => {
    return registration.navigate().start();
  });

  Given(/^I provide my personal details$/, () => {
    return field.verifyQuestionText("5149")
      .fillZipCode('10021')
      .verifyQuestionText("5150")
      .fillDOB('10101990')
      .verifyQuestionText("5151")
      .fillEmail('galewska.joanna@gmail.com');
  });

  When(/^I set my biological sex to "Female"$/, () => {
    field.verifyQuestionText("5152");
    return singleChoice.clickOption("9760");
  });

  Then(/^I am informed that ED treatment is currently only available to men"$/, () => {
    browser.pause(5000);
  });
