import { Browser, chromium, Page, Locator } from "@playwright/test";

(async()=>{



let browser:Browser=await chromium.launch({ headless:false, channel:'chrome'});

let page:Page=await browser.newPage();

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//getbytext locator  hit button

//let text:string=await page.getByText('New Customer', { exact: true } ).innerText();
//console.log(text);

let RegA:Locator= page.locator('h1', {hasText:'Register Account'});
let text1:string=await RegA.innerText();
console.log(text1);


})();