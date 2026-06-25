import { Browser, chromium, Page } from "@playwright/test"

//IIFE
(async () => {

    let browser: Browser = await chromium.launch({

        headless: false,
        channel: 'chrome',
    });

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('#input-email').fill('tanmayqa2023@gmail.com');
     await page.locator('#input-password').fill('Tanmay@123');
    //page.locator('input[value="Login"]').click();
    await page.waitForTimeout(3000);
    let header:string |null=await page.locator('//h2[text()="New Customer"]').textContent();
    console.log(header);
    //await browser.close();







})()