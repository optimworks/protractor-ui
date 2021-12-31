var homePage = require('../locators/homepage')
var URL = browser.baseURL

describe('Launch Protractor App', function () {

    beforeAll(async () => {
        await browser.get(URL)
        await browser.driver.sleep(1000)
        await browser.manage().window().maximize()
    })

    it('Goto Protractor API', async () => {
        await homePage.load()
        await browser.manage().window().maximize()
        await homePage.referenceDropdown()
        await homePage.protractorAPI()
    })
}) 