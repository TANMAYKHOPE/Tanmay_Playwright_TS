import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

    let browser:Browser=await chromium.launch({

    headless:false,
    channel:'chrome',
});

    let page:Page = await browser.newPage();

    await page.goto('https://test-myayvens-erffese5hvevbdez.westeurope-01.azurewebsites.net/ma-fleet');

    //await page.waitForLoadState();

    await page.getByText('Login as customer or supplier').click();
    await page.getByPlaceholder('Email Address').fill('tanmay');
    await page.getByPlaceholder('Password').fill('766767');
})();