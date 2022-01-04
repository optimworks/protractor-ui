exports.config = {
    baseUrl: 'https://www.scrumdo.com/',
    framework: 'jasmine',
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['testSuites/TC_001.spec.js'],

    onPrepare: ()=>{
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
    },

    params: {
        username: 'Caleb123',
        password: 'HealthNWealth',
        timeouts: {
          "VERYSHORTWAIT" : 5,
          "SHORTWAIT" : 15,
          "MEDIUMWAIT" : 35,
          "LONGWAIT" : 60,
          "VERYLONGWAIT" : 300,
          "IMPLICITWAIT" : 90
        }
      },
}