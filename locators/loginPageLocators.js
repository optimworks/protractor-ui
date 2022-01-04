var loginPageElements = function () {
    var loginButtonText = element(by.xpath('(//span[contains(text(),"Login")][1])[1]'))

    this.loginButtonText = function () {
        return loginButtonText
    }
    
}

module.exports = new loginPageElements