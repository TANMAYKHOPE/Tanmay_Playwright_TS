import { Browser, chromium, Page } from "@playwright/test";

(async () => {

let  browser:Browser=await chromium.launch({
headless:false, channel:'chrome'

});

let page:Page=await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await  page.getByRole('textbox',{name:'* First Name'}).fill('Tanmay');
//lable name--await page.getByLabel('* First Name').fill('Tanmay');
//if lable is not then we cannot use getByLable method
await page.getByRole('textbox',{name:'* Last Name'}).fill('QA');  
await page.getByRole('radio',{name:'Yes'}).click();
//await page.getByRole('checkbox').click();//dont used becoz no lable is there
await page.locator('input[name="agree"]').click();//use locator if no lable is there
//await page.getByRole('link',{name:'Forgotten Password'}).click();//Register
await page.getByRole('link',{name:'Register'}).click();

let header:string=await page.getByRole('heading',{name:'Register Account '}).innerText();
console.log("Header is "+header);




})();