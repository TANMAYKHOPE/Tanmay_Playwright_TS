import { Browser, chromium, Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'

    });

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //await page.getByText('Register Account', { exact: true }).highlight();
    //await page.getByText('Login',{exact:true}).highlight();--right approchh
   // await page.getByText('Login').highlight();//wrong approch--it will highlight login and login page both
   // await page.locator('h1',{ hasText: 'Register Account' }).highlight();
    //await page.locator('h1').filter({ hasText: 'Register Account' }).highlight();
    await page.locator('a',{hasText:'Login page'}).highlight();




})();