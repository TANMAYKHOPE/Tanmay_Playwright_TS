import { Browser, chromium, Page } from "@playwright/test";


(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', { name: 'First Name' }).fill('tanmay');
    await page.getByRole('textbox', { name: 'Telephone' }).fill('8600421149');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Continue' }).click();




})();