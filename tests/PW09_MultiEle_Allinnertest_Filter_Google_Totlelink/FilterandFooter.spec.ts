import { Browser, chromium, Locator, Page } from "@playwright/test";


(async () => {

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome'
        }
    )

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //test--->
    //get all footer and capture privacy  policy
    let allfooter: Locator = page.locator('footer a');
    allfooter.filter({ hasText: 'Privacy Policy', visible: true }).click();
    let title=await page.title();
    console.log(title);



})();

