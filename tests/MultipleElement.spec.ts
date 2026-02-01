import { Browser, chromium, Page, Locator } from "@playwright/test";

(async () => {
    console.log("This is Multiple Element spec file where we test multielement handling");
    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'
    });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    let rightpanallist: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log("The list of right panel items are: " + rightpanallist.length);

    console.log(rightpanallist);

    //for off  loops iteration
    for (let e of rightpanallist) {
        console.log(e);
        if (e === 'Forgotten Password') {
            await page.getByText(e).first().click();
            break;
        };


    };

    console.log("===***===");
    console.log("intex based logic for  for  loops iteration");

    //index based logic for  for  loops iteration
    for (let i = 0; i < rightpanallist.length; i++) {
        console.log(rightpanallist[i]);
    }


    //capture all link on footer

    //let allfooterlink:string[]=await page.locator('footer a').allInnerTexts();
    //console.log(allfooterlink.length);


    let allfooterlink2: Locator[] = await page.locator('footer a').all();
    console.log(allfooterlink2.length);
    for (let e of allfooterlink2) {
        console.log(await e.allInnerTexts());
        console.log(await e.getAttribute('href'));
    }




})();