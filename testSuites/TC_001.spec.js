var LoginPageLocators = require('../locators/loginPageLocators')
var LoginPage = require('../Pages/loginPage')
var URL = browser.baseUrl
var credentials = require('../testSuites/testData.json')
var statusNames = require('../testSuites/statusNames.json')

describe('Scrum Do App testing', function () {

    beforeAll(async () => {
        await browser.get(URL)
        await browser.driver.sleep(1000)
    })

    it('Login to application', async () => {
        await LoginPage.clickLoginButtonText()
        await LoginPage.verifyURL()
        await LoginPage.enterUsername(credentials.username)
        await LoginPage.enterPassword(credentials.password)
        await LoginPage.clickLoginButton()
        await LoginPageLocators.waitForBoardName()
        expect(LoginPageLocators.getBoardName().getText()).toEqual("Kanban Board")
    })

    it('Add new statuses', async () => {
        await LoginPage.enterStatusName(statusNames.statusName1)
        await LoginPage.enterStatusName(statusNames.statusName2)
        await LoginPage.enterStatusName(statusNames.statusName3)
    })

   
}) 