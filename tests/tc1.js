module.exports = {
  'ED treatment is only available to men' : function(browser) {
    let registration = browser.page.registrationPage();
    let field = browser.page.textField();

    registration.navigate()
      .start();

    field.verifyQuestionText("5149")
      .fillZipCode('10021')
      .verifyQuestionText("5150")
      .fillDOB('10101990')
      .verifyQuestionText("5151")
      .fillEmail('galewska.joanna@gmail.com')
      .verifyQuestionText("5152");

    browser.end();
  }
};
