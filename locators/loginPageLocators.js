const Sync = require("../Utilities/sync")
const {browser, element} = require("protractor")

var loginPageElements = function () {
    var SHORTWAIT = browser.params.timeouts.SHORTWAIT
    var loginButtonText = element(by.xpath('(//span[contains(text(),"Login")][1])[1]'))
    var inputUserNameField = element(by.xpath('//input[@name="username"]'))
    var inputPasswordField = element(by.xpath('//input[@name="password"]'))
    var loginButton = element(by.css('#loginButton'))
    var boardName = element(by.xpath('//*[normalize-space()="Kanban Board"]'))
    var addNewStatus = element(by.css('div.simple-board > app-board-simple > div.cell-placeholder > div.col-content'))

    this.waitForBoardName = async () => {
        await Sync.waitUntilVisibilityOfElement(boardName, SHORTWAIT)
    }

    this.getBoardName = () => {
        return boardName
    }
    
    this.loginButtonText = async () => {
        await Sync.waitUntilVisibilityAndClickabilityOfElement(loginButtonText, SHORTWAIT)
        await loginButtonText.click()
    }

    this.enterUsername = async (_name) => {
        await Sync.waitUntilVisibilityOfElement(inputUserNameField, SHORTWAIT)
        await inputUserNameField.sendKeys(_name)
    }

    this.enterPassword = async (_pwd) => {
        await Sync.waitUntilVisibilityOfElement(inputPasswordField, SHORTWAIT)
        await inputPasswordField.sendKeys(_pwd)
    }

    this.loginButton = async () => {
        await Sync.waitUntilVisibilityAndClickabilityOfElement(loginButton, SHORTWAIT)
        await loginButton.click()
        await browser.driver.sleep(10000)
    }

    this.enterStatusName = async (_statusName) => {
        await Sync.waitUntilVisibilityOfElement(addNewStatus, SHORTWAIT)
        await browser.executeScript("arguments[0].click()", addNewStatus.getWebElement())
        await addNewStatus.sendKeys(_statusName)
    }
    
}

module.exports = new loginPageElements