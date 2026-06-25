import { Browser, chromium, Locator, Page } from "@playwright/test";


(async () => {

    let browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome',

    });

    let page: Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let rightpanellinks: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightpanellinks.length);
    console.log(rightpanellinks);


    //for off loop:-

    for (let e of rightpanellinks) {
        console.log(e);
        if (e === 'Forgotten Password') {
            await page.getByText(e).first().click();
            break;

        }

    }

    //normal for loops
    console.log('===========');

    for (let i = 0; i < rightpanellinks.length; i++) {
        console.log(rightpanellinks[i]);
    }

    console.log('===capture all footer using .all methode which  return  locator  array[]===');


    let footerlink: Locator[] = await page.locator('footer a').all();
    console.log(footerlink.length)

    for (let e of footerlink) {
        console.log(await e.allInnerTexts());
        console.log(await e.getAttribute('herf'));
    }



})();