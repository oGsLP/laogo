// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "default e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#main", 5000)
      .assert.containsText("h1", "Laogo")
      .assert.elementCount("img", 3)
      .end();
  }
};
