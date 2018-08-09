module.exports = {
  'User gets to 1 question' : function(browser) {
    let registration = browser.page.registration();

    registration.navigate()
      .start();

    browser.end();
  }
};
