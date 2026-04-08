import { Browser, Page, chromium } from "@playwright/test";

(async () => {
    const browser: Browser = await chromium.launch({ channel: "chrome", headless: false });
    let browserContext = await browser.newContext();
    const page: Page = await browserContext.newPage();

    //create  background listner for popup event
    page.on(`framenavigated`, async () => {

        let acceptcookiesbutton = page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`);
        if (await acceptcookiesbutton.isVisible()) {
            await acceptcookiesbutton.click();
        }
    });

    await page.goto(`https://orangehrm.com/en/contact-sales`); //parent windowa

    let parentWindowTitle = await page.title();

    console.log(parentWindowTitle); //OrangeHRM | Contact Sales
    await page.locator(`//a[contains(@href, 'linkedin')]`).click();
    await page.locator(`//a[contains(@href, 'facebook')]`).click();
    await page.locator(`//a[contains(@href, 'youtube')]`).click();

    await page.waitForTimeout(3000);
    let allpages: Page[] = await browserContext.pages();
    console.log(`Number of pages: ${allpages.length}`); //3

    for (let pg of allpages) {
        //close the child windows and print the title of parent window--
        // but its closed  parent window is closed because of the close method called on child window--
        // so we will get error--page is closed
        console.log(await pg.title());
        if (await pg.title() !== parentWindowTitle) {
            await pg.close();
        }


    }

    await page.bringToFront();
    console.log(await page.title());
    console.log(page.url());
    await page.locator(`#Form_getForm_FullName`).fill(`sachin`);





})();