import { Browser, chromium, Page } from "@playwright/test";

(async()=>{

let browser:Browser=await  chromium.launch(
    {
        headless:false,
        channel:'chrome'
    }
);

let page:Page=await browser.newPage();
await page.goto('https://www.flipkart.com/');

let links:string[]=await page.locator('a[href]').allInnerTexts();
console.log(links.length);


})();