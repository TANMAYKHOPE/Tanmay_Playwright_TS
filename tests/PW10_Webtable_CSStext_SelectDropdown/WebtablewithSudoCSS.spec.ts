import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {


    let browser: Browser = await chromium.launch({

        headless: false,
        channel: 'chrome',
    })

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');


    //CSS working
    //await page.locator(`tr:has(td:text('Kevin.Mathews'))`).locator('td').first().click();
   await  selectUserwithCSS(page,'Kevin.Mathews');



})();

async function selectUserwithCSS(page: Page, username: string): Promise<void> {

   await page.locator(`tr:has(td:text('${username}'))`).locator('td').first().click();


}