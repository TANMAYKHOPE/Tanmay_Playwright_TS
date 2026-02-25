import { Browser, chromium, Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({

        headless: false,
        channel: 'chrome',
    });

    let page: Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.locator(`#input-firstname`).focus();
    await page.locator(`#input-firstname`).pressSequentially('Tanmay', { delay: 200 });
    await page.keyboard.press(`Tab`);
    await page.keyboard.type(`QA`, { delay: 200 });
    await page.keyboard.press(`Tab`);
    await page.keyboard.type(getrandomemail(), { delay: 200 });
    await page.keyboard.press(`Tab`);
    await page.keyboard.type(`8998898989`, { delay: 200 });
    await page.keyboard.press(`Tab`);
    await page.keyboard.type(`1235`, { delay: 200 });
    await page.keyboard.press(`Tab`);
    await page.keyboard.type(`1233`, { delay: 200 });
    await page.keyboard.press(`Tab`);
    await page.keyboard.press(`Tab`);
    await page.keyboard.press(`Tab`);
    await page.keyboard.press(`space`);
    await page.keyboard.press(`Tab`);
    await page.keyboard.press(`enter`);
    console.log("The registration is successful");  

})();

function getrandomemail(): string {
    return 'opencard' +Date.now() + '@gmail.com';

}