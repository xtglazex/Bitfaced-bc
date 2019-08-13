const {Builder, By, Key, until} = require('selenium-webdriver');
const {ignore,suite} = require('selenium-webdriver/testing')

// const LoginApp = (driver) => {
//     driver.get('http://dev.app.bombbomb.com/app')
//         .then(_ => 
//            driver.findElement(By.name('email')).sendKeys('tyler.glaze@bombbomb.com'))     
//         .then(_ =>    
//             driver.findElement(By.name('password')).sendKeys('vg1dyv68', Key.RETURN))
//         .then(_ => driver.quit());
    // }
const Create_Quicky_Trial = async (driver) => {
    await driver.get('http://dev.app.bombbomb.com/app')
    await driver.findElement(By.name('email')).sendKeys('tyler.glaze@bombbomb.com')
    await driver.findElement(By.name('password')).sendKeys("vg1dyv68", Key.RETURN)
    await driver.wait(until.elementsLocated(By.className('myAccountDownArrow')))
    await driver.findElement(By.className('myAccountDownArrow')).click()
    await driver.findElement(By.css("#myAccount > div.myAccountDropDown")).click()
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#myAccount > div.myAccountDropDown > ul:nth-child(2) > li:nth-child(3) > a"))))
    await driver.findElement(By.css("#myAccount > div.myAccountDropDown > ul:nth-child(2) > li:nth-child(3) > a")).click()
    await driver.findElement(By.css("body > div.admin-grey-box > div.admin-header-links.header-padding > a:nth-child(14)")).click()
    Trial_First_Name = await driver.findElement(By.name("firstname")).getAttribute("value")
    Trial_Last_Name = await driver.findElement(By.name("lastname")).getAttribute("value")
    await driver.findElement(By.name("email")).clear()
    await driver.findElement(By.name("email")).sendKeys("tyler.glaze",'+',Trial_First_Name + Trial_Last_Name, "@bombbomb.com")
    await driver.findElement(By.css(".quickieForm > input:nth-child(13)")).click() 
}

const Logout = async (driver) => {
    await driver.get('http://dev.app.bombbomb.com/app')
    await driver.wait(until.elementsLocated(By.className('myAccountDownArrow')))
    await driver.findElement(By.css("#myAccount > div.myAccountDropDown")).click()
    await driver.findElement(By.xpath("/html/body/div[1]/header/div/div[3]/div[2]/ul[1]/li[4]/a")).click()
}

const Ceate_Normal_Trial = async (driver) => {
    await driver.get('http://dev.app.bombbomb.com/app')
    await driver.findElement(By.css('body > article > div > div.clearfix.links-container.multi-link > div.link-container.signupButton > a')).click()
    await driver.findElement(By.name('email')).sendKeys()
}

    module.exports={
        Create_Quicky_Trial,
        Logout
    }