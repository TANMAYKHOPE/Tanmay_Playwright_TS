import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {


    let browser: Browser = await chromium.launch({

        headless: false,
        channel: 'chrome',
    })

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    // let userdata: string[] = await page.locator(`//td[text()='Joe.Root']/following-sibling::td`).allInnerTexts();
    //console.log(userdata);

    //Get Total Rows
    const rows = page.locator('table tbody tr');
    console.log('row number is:--' + await rows.count());

    //Get Total Columns
    const columns = page.locator('table thead th');
    console.log('columns number is:--' + await columns.count());

    let JoeName = await getuserdata(page, 'Joe.Root');
    console.log(JoeName);





})();
/**
 * 
 * @param page 
 * @param userdata 
 * @returns 
 */

async function getuserdata(page: Page, userdata: string): Promise<string[]> {

    return await page.locator(`//td[text()='${userdata}']/following-sibling::td`).allInnerTexts();
}