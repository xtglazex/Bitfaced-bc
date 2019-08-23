const {Builder, By, Key, until} = require('selenium-webdriver');
const {Logout,Create_Normal_Trial} = require('../testcomponents/testcomponents');

const Create_Trial_User = async () => {
driver = new Builder()
.forBrowser('firefox')
.build();

await Create_Normal_Trial(driver)
await Logout(driver)
}

Create_Trial_User()
