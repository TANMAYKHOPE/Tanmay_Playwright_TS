import { Browser, chromium, expect, Locator, Page } from "@playwright/test";


(async () => {

    let browser: Browser = await chromium.launch(
        { headless: false, channel: 'chrome' }
    );

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let firstname: Locator = page.locator('#input-firstname');

    expect(page.locator('#input-firstname')).toBeVisible();

    // if  locator is not found then it will throw error--
    // but in  playwtight sometime its dont show error 
    // and it will wait for the element to be visible for 30 seconds
    //  by default--if element is not visible within 30 seconds then it will throw error

    firstname.waitFor({ state: 'visible' , timeout: 5000 });
    firstname.fill('sachin');

    //waitFor() --> locator -- any kind of locators - pw=semantic roles
    //waitForSelector() --> page --only for xpath/css selectors

    // expect(page.locator('#input-firstname')).toBeVisible();



})();