import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

let  browser:Browser=await chromium.launch({
headless:false, channel:'chrome'

});

let page:Page=await browser.newPage();
await page.goto('https://www.cricbuzz.com/');
await page.getByRole('link',{name:'whitespace-nowrap text-ellipsis  overflow-hidden'}).click();
let WPLTitle=await page.title();
console.log("The title of WPL page is :"+WPLTitle);

//console.log("WPL link clicked");


})();