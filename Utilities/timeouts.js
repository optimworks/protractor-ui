var Timeouts = function () {
	var VERYSHORTWAIT = browser.params.timeouts.VERYSHORTWAIT;
	var SHORTWAIT = browser.params.timeouts.SHORTWAIT;
	var MEDIUMWAIT = browser.params.timeouts.MEDIUMWAIT;
	var LONGWAIT = browser.params.timeouts.LONGWAIT;
	var VERYLONGWAIT = browser.params.timeouts.VERYLONGWAIT;
	var IMPLICITWAIT = browser.params.timeouts.IMPLICITWAIT;

	this.VERYSHORTWAIT = function () {
		return VERYSHORTWAIT;
	}

	this.SHORTWAIT = function () {
		return SHORTWAIT;
	}

	this.MEDIUMWAIT = function () {
		return MEDIUMWAIT;
	}

	this.LONGWAIT = function () {
		return LONGWAIT;
	}

	this.VERYLONGWAIT = function () {
		return VERYLONGWAIT;
	}

	this.IMPLICITWAIT = function () {
		return IMPLICITWAIT;
	}

}

module.exports = new Timeouts