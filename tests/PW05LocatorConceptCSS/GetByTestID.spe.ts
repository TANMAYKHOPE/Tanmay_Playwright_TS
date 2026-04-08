import { Browser, chromium, Locator, Page } from "@playwright/test"

(async () => {

    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'
    })

    let page: Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html')
    //data-testid="username-input"
    let username: Locator = page.getByTestId('username-input',);
    await username.fill('test@example.com');


    //using simple normal  id for  getByTestId() method--not work because getByTestId() method only work with data-testid attribute
    //let username:Locator =  page.getByTestId('input-email');
    //await page.locator('#email-input').fill(' 4544554')
    //normal id we can not used with this methode




})();

console.log("=============================================");

(async () => {

    let browser: Browser = await chromium.launch({
        headless: false, channel: 'chrome'
    })

    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    await page.getByTitle('naveenopencart').click();
    

})();
