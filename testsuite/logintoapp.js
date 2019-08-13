
const {Builder, By, Key, until} = require('selenium-webdriver');
const {loginapp, createtrial} = require('../testcomponents/testcomponents');

var driver = new Builder()
.forBrowser('firefox')
.build();

loginapp(driver)


