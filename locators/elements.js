var homePageElements = function () {
    var referenceDropdown = element(by.xpath('//a[normalize-space()="Reference"]'))
    var protractorAPI = element(by.xpath("//*[contains(text(), 'Protractor API')]"))

    this.get = async () => {
        await browser.get('https://www.protractortest.org/#/')
        await browser.driver.sleep(1000)
        browser.waitForAngularEnabled(false)
    }

    this.clickReferenceDropdown = async function () {
        await referenceDropdown.click()
        await browser.driver.sleep(2000)
    }

    this.clickProtractorAPI = async () => {
        await protractorAPI.click()
    }
}

module.exports = new homePageElements