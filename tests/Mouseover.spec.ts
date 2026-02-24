import { Browser, chromium, Page } from "@playwright/test";

(async () => {

    let browser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

    let page:Page = await browser.newPage();
   /* await page.goto('https://www.spicejet.com/');
    const page1Promise = page.waitForEvent('popup');
    const page1 = await page1Promise;
    await page1.getByRole('link', { name: 'Add-Ons' }).click();
  await page.getByTestId(`test-id-Extra Seat`).click();*/

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
      await page.getByRole('link', { name: 'Components', exact: true }).hover();



})();