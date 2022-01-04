var loginPageLocators = require('../locators/loginPageLocators')
var timeout = require('../Utilities/timeouts')
var Sync = require('../Utilities/sync')

var loginPage = function () {

    this.launchLoginPage = async () => {
        await loginPageLocators.loginButtonText().click()
    }

    this.verifyURL = async () => {
        var expectedValue = 'login'
        var value = await Sync.getAndVerifyURL(expectedValue, timeout.SHORTWAIT);
        console.log("Return value is:" +value)
    }

}

module.exports = new loginPage