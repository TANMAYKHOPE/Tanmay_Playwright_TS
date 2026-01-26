import { Browser, chromium, Locator, Page } from "@playwright/test";
//IIFE Function without test block
(async () => {

    let browser: Browser = await chromium.launch({ headless: false });
    let page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    let title: string = await page.title();
    console.log("The title of the page is :" + title);
    let url: string = page.url();
    console.log("The url of the page is :" + url);
    let emaillocator: Locator =  page.locator('#input-email');
    await emaillocator.fill('tanmayqa323@gmail.com');
    let passwordlocator: Locator = page.locator('#input-password');
    await passwordlocator.fill('13Fb@1993');
    let loginbuttonlocator: Locator =  page.getByRole('button', { name: 'Login' });
    await loginbuttonlocator.click();
   // await page.close();
})();
