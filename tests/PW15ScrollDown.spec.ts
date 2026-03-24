import { Browser, chromium, expect, Locator, Page } from "@playwright/test";

(async () => {

    let browser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

    let page:Page = await browser.newPage();
    await page.goto('https://orangehrm.com/');
    await page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`).click();
    
    //scrollIntoViewIfNeeded() method scrolls the element into view if it is not already visible in the viewport. It ensures that the element is brought into view before performing any actions on it, such as clicking or interacting with it.
    /*await page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`).click();
    await page.locator(`//a[contains(text(), 'Careers')]`).nth(2).scrollIntoViewIfNeeded();
    page.waitForTimeout(3000);
    await page.locator(`//a[contains(text(), 'Careers')]`).nth(2).click();*/

    //2:- Scroll down by 1000 pixels
    /*await page.evaluate(() => {window.scrollBy(0, 1000);});
    await page.waitForTimeout(3000);
    await page.evaluate(() => {window.scrollBy(0, 2000);});*/

    //3. scroll to the bottom of the page
    await page.evaluate(() => {window.scrollTo(0, document.body.scrollHeight);});
   

    



    })();