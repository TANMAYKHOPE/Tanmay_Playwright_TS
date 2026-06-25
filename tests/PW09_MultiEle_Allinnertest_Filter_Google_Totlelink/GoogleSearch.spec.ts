import { Browser, chromium, Locator, Page } from "@playwright/test";

(async()=>{

let  browser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome'
})

let page:Page= await browser.newPage();

await page.goto('https://www.google.com/');

await page.locator('[name="q"]').fill('Selenium ide');


await page.locator(`ul[role='listbox'] li div[role='option']`).filter({hasText:'websites'}).click();
})()