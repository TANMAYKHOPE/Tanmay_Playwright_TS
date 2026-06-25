import { Browser, chromium, Page } from "@playwright/test";

(async()=>{

let browser:Browser=await chromium.launch({ headless:false, channel:'chrome'});
let page:Page=await browser.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');



})();