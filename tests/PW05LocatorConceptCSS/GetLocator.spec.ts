
//IIFE Function
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();
    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    //99% of for iamge
    await page.getByAltText('naveenopencart').click();

    //data-testid--using getByTestId() method
    await page.getByTestId

})();