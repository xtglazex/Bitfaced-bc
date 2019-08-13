const {Builder, By, Key, until} = require('selenium-webdriver');
const {Create_Quicky_Trial,Logout} = require('../testcomponents/testcomponents');

const Create_Trial_User = async () => {
driver = new Builder()
.forBrowser('firefox')
.build();

await Create_Quicky_Trial(driver)
await Logout(driver)
}

Create_Trial_User()
