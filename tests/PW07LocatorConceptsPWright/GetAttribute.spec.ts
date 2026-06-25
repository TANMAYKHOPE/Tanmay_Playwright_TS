import { Browser, chromium, Page } from "@playwright/test";

(async()=>{
let browser:Browser=await chromium.launch({ headless:false, channel:'chrome'});
let page:Page=await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
let emailattribute=await page.locator('#input-email').getAttribute('name');
console.log(emailattribute);


/*await page.locator('#input-email').fill('tanmaykhope@gmail.com');
let newvalue=await page.locator('#input-email').getAttribute('value');
console.log(newvalue);*/
//we can not used getattribute method for get the value of the input field because value is not attribute it is property 
// so we have to used inputValue() method for get the value of the input fiel
//refer  below code for get the value of the input field

await page.locator('#input-email').fill('tanmaykhope@gmail.com');
let newvalue=await page.locator('#input-email').inputValue()    ;
console.log(newvalue);

})();