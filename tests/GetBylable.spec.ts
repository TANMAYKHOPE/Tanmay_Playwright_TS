import { Browser, chromium, Page } from "@playwright/test";

(async () => {

let  browser:Browser=await chromium.launch({
headless:false, channel:'chrome'

});

let page:Page=await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.getByRole('textbox',{name:'first name'}).fill('Tanmay');
await page.getByRole('textbox',{name:'last name'}).fill('QA');  
await page.getByRole('button',{name:'Continue'}).click();   
await page.getByRole('checkbox').click(); 



})();