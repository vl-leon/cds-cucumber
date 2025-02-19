/** @namespace UI **/

/**
 * @module Plain
 * @memberof UI
*/

const { When } = require('@cucumber/cucumber');

When('we login with username {string} and password {string}', async function(username, password) {
  await this.controller.enterTextInElementWithId(username, 'j_username')
  await this.controller.enterTextInElementWithId(password, 'j_password')
  await this.controller.clickOnElementWithId('logOnFormSubmit')
  try {
    await this.controller.initializeLibrary()
  } catch(e) {}
})

When('click on element with id {string}', async function(id) {
  await this.controller.clickOnElementWithId(id)
})

When('click on element with value {string}', async function(value) {
  await this.controller.clickOnElementWithValue(value)
})

When('element with text {string} exists', async function(text) {
  await this.controller.existsElementWithText(text)
})
