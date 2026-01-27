import { Browser, chromium, Locator, Page } from "@playwright/test";

//IIFE Function without test block
(async () => {

    let browser: Browser = await chromium.launch(
        { headless: false, channel: 'chrome' }
    );

    //find locator and perform actions
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    //1st approch
    //await page.locator('#input-email').fill('tanmayqa323@gmail.com');
    //await page.locator('#input-password').fill('13Fb@1993');
    //await page.locator('input[value="Login"]').click();
    //new approch


    //find element using  locator--css selecotor
    let Emailid:Locator= page.locator('#input-email');
    let password:Locator=page.locator('#input-password');
    let loginbutton:Locator=page.locator('input[value="Login"]');

    //actions on locators
    await Emailid.fill('tanmayqa323@gmail.com');
    await password.fill('13Fb@1993');
    await loginbutton.click();



})();