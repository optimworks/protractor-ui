var EC = protractor.ExpectedConditions;

var sync = function () {

    this.getAndVerifyURL = async (expectedValue, timeout) => {
        return await browser.wait(EC.urlContains(expectedValue), timeout);
    }

    this.waitUntilVisibilityOfElement = async (loc, timeout) => {
        await browser.wait(EC.visibilityOf(loc), timeout)
    }

    this.waitUntilElementToBeClickable = async (loc, timeout) => {
        await browser.wait(EC.elementToBeClickable(loc), timeout)
    }

    this.waitUntilVisibilityAndClickabilityOfElement = async (loc, timeout) => {
        await this.waitUntilVisibilityOfElement(loc, timeout)
        await this.waitUntilElementToBeClickable(loc, timeout)
    }
}

module.exports = new sync