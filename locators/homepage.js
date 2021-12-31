var homePageElements = require('../locators/elements')

var homePage = function () {

    this.load = async () => {
        await homePageElements.get()
    }

    this.referenceDropdown = async function () {
        await homePageElements.clickReferenceDropdown()
    }

    this.protractorAPI = async () => {
        await homePageElements.clickProtractorAPI()
    }
}

module.exports = new homePage