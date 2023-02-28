const {Builder, By, Key, until} = require('selenium-webdriver');

test();

async function test(){
// Abrir el navegador
let driver = await new Builder().forBrowser('chrome').build();

// Acceder a la página de inicio de sesión
await driver.get('https://aaa29.lightning.force.com/lightning/page/home');

// Ingresar las credenciales y hacer clic en el botón de inicio de sesión
await driver.findElement(By.id('username')).sendKeys('franciscodotitexeira-gwml@force.com');
await driver.findElement(By.id('password')).sendKeys('Yosoyyo123!', Key.RETURN);

// Esperar a que la página de inicio de sesión cargue completamente
await driver.wait(until.elementLocated(By.xpath('//span[text()="Accounts"]')), 10000);

// Hacer clic en el tab de Accounts
await driver.findElement(By.xpath('//span[text()="Accounts"]')).click();

// Esperar a que la página de Accounts cargue completamente
await driver.wait(until.elementLocated(By.xpath('//div[text()="Accounts"]/following-sibling::div//a[@title="New"]')), 10000);

// Hacer clic en el botón de New
await driver.findElement(By.xpath('//div[text()="Accounts"]/following-sibling::div//a[@title="New"]')).click();

// Completar el formulario con datos dummy
await driver.findElement(By.name('Name')).sendKeys('Dummy Account');
await driver.findElement(By.name('Phone')).sendKeys('1234567890');
await driver.findElement(By.name('Website')).sendKeys('http://www.dummyaccount.com');
await driver.findElement(By.name('Industry')).sendKeys('Technology', Key.RETURN);

// Hacer clic en el botón de Save
await driver.findElement(By.name('SaveEdit')).click();

// Esperar a que la página de Accounts cargue completamente
await driver.wait(until.elementLocated(By.xpath('//div[text()="Accounts"]/following-sibling::div//span[text()="Dummy Account"]')), 10000);

// Revisar que la account se haya creado en la home page
let accountName = await driver.findElement(By.xpath('//div[text()="Accounts"]/following-sibling::div//span[text()="Dummy Account"]')).getText();
console.log(`La account "${accountName}" se ha creado exitosamente.`);

// Cerrar el navegador
await driver.quit();


}
