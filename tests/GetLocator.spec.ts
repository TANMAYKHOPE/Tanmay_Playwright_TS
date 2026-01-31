import { Browser, chromium, Locator, Page } from "@playwright/test";

//IIFE Function without test block
(async () => {

    let browser: Browser = await chromium.launch(
        { headless: false, channel: 'chrome' }
    );

    //find locator and perform actions
    let page: Page = await browser.newPage();
    //await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
    //await page.getByAltText('naveenautomationlabs').highlight();
    //await page.getByAltText('naveenautomationlabs').click();
    //getbyalttext--used for image
    //getbytest--used for text
    //await page.getByTestId('username-label').highlight();
    //
    await page.getByTestId('home-nav-btn').click();



})();