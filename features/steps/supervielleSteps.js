
const { Given, When, Then } = require('cucumber');
const { clickElement, llenarCampo, assertText, obtenerTexto, buscarElemento } = require('../support/functions');
const { assert } = require('chai');
const { Driver } = require('selenium-webdriver/chrome');
const { log } = require(`${process.cwd()}/logger`);
const urls = require(`${process.cwd()}/urls.json`);
const { By, Key, until } = require('selenium-webdriver');
require(`${process.cwd()}/features/support/functions.js`);

When(/^Hago click en ACCOUNTS$/, async function () {

    var winHandles= await this.driver.getAllWindowHandles();
    await console.log(winHandles)

    var element = await this.driver.findElement(By.xpath('//a[@title="Accounts"]'))
    this.driver.actions().moveToElement(element).click().build().perform();
    try {
      await element.click();  
    } catch (error) {
      await element.click();
    }
    




    
})