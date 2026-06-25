import { Browser, chromium, Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'
    });

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let naveenopencartElement = await page.getByTitle('naveenopencart');

    var title = await page.title();

    console.log('Page Title:', title);

    await naveenopencartElement.click();

    var title2 = await page.title();

    console.log('Page Title:', title2);



})();