import { test, expect, chromium, Browser, BrowserContext, Page,Locator } from '@playwright/test';
test('check the  title of page', async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let context1: BrowserContext = await browser.newContext();
    let context2: BrowserContext = await browser.newContext();

    let page1: Page = await context1.newPage();
    let page2: Page = await context2.newPage();
    
    
    //User is admin number 1
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page1.locator('#input-email').fill('tanmayqa323@gmail.com');
    await page1.locator('#input-password').fill('13Fb@1993');
    let button =await page1.getByRole('button', { name: 'Login' });
    await button.click();

    //User is admin number 2
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);





})