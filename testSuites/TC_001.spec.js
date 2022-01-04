var loginPage = require('../Pages/loginPage')
var URL = browser.baseUrl

describe('Scrum Do App testing', function () {

    beforeAll(async () => {
        await browser.get(URL)
        await browser.driver.sleep(1000)
    })

    it('Login to application', async () => {
        await loginPage.launchLoginPage()
        await loginPage.verifyURL()
    })
}) 