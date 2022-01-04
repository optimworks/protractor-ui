var EC = protractor.ExpectedConditions;

var sync = function () {

    this.getAndVerifyURL = async (expectedValue, timeout) => {
        await browser.wait(EC.urlContains(expectedValue), timeout);
    }
}

module.exports = new sync