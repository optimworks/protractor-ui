var loginPageLocators = require('../locators/loginPageLocators')
var Sync = require('../Utilities/sync')

var VERYSHORTWAIT = browser.params.timeouts.VERYSHORTWAIT;

var loginPage = function () {

    this.clickLoginButtonText = async () => {
        await loginPageLocators.loginButtonText()
    }

    this.verifyURL = async () => {
        var expectedValue = 'login'
        var booleanValue = await Sync.getAndVerifyURL(expectedValue, VERYSHORTWAIT)
        console.log(`Login page is succesfully opened :- ${booleanValue}`)
    }

    this.enterUsername = async (_name) => { 
        await loginPageLocators.enterUsername(_name)
    }

    this.enterPassword = async (_pwd) => { 
        await loginPageLocators.enterPassword(_pwd)
    }

    this.clickLoginButton = async () => { 
        await loginPageLocators.loginButton()
    }

    this.enterStatusName = async (_statusName) => {
        await loginPageLocators.enterStatusName(_statusName)
    }

   

}

module.exports = new loginPage