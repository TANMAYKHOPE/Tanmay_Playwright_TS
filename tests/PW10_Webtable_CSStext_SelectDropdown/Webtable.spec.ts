import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {


    let browser: Browser = await chromium.launch({

        headless: false,
        channel: 'chrome',
    })

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    /*await page.locator(`//td[text()='Daniel.Thompson']/preceding-sibling::td/input[@type='checkbox']`).click();
    await page.locator(`//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']`).click();
    await page.locator(`//td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']`).click();*/

    //utiltiy methode


    await selectUser(page, 'Daniel.Thompson');
    await selectUser(page, 'Joe.Root');
    await selectUser(page, 'John.Smith');

})();

async function selectUser(page: Page, username: string): Promise<void> {

    await page.locator(`//td[text()='${username}']/preceding-sibling::td/input[@type='checkbox']`).click();


}

