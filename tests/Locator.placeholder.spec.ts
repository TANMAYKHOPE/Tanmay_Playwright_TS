import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

let  browser:Browser=await chromium.launch({
headless:false, channel:'chrome'

});

let page:Page=await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
let title:string=await page.title();
console.log("Title of the page is "+title);
//await page.getByPlaceholder('First Name').highlight();



//await page.getByPlaceholder('Telephone').highlight();

//highlight the element--debug mode
//await page.locator('#input-firstname').highlight();

await page.getByLabel('input-lastname').highlight();




})();