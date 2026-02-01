import { Browser, chromium, Page } from "@playwright/test";

(async()=>{

    let browser:Browser=await chromium.launch({
        headless:false, channel:'chrome'
    });

    let page:Page=await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.locator('#input-email').fill('tanmayqa323@gmail.com');
    await page.locator('#input-password').getAttribute('name').then((value)=>{
        console.log("The attribute value is: "+value);
    });


})();