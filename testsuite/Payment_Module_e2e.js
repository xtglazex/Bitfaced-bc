const {Builder, By, Key, until} = require('selenium-webdriver');
const {Logout,Create_Normal_Trial,Payment_Module_Test,Login_To_Admin,Client_Seach_Chargify} = require('../testcomponents/testcomponents');

const Payment_Module_e2e = async () => {
driver = new Builder()
.forBrowser('firefox')
.build();
await Create_Normal_Trial(driver)
await Logout(driver)
await Payment_Module_Test(driver)
await Login_To_Admin(driver)
await Client_Seach_Chargify(driver)
}

Payment_Module_e2e()
