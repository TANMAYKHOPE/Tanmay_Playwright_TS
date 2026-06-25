
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome',

    });

    let page: Page = await browser.newPage();

    await page.goto('https://react-select.com/home');

    await page.waitForLoadState();

    await page.locator('#react-select-3-input').click();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    await page.keyboard.press('Enter');


})();