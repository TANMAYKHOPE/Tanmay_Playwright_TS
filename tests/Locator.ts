import { Browser, chromium, Locator, Page } from "@playwright/test";

//IIFE Function without test block
(async () => {

    let browser: Browser = await chromium.launch(
        { headless: false, channel: 'chrome' }
    );

    //find locator and perform actions
    let page: Page = await browser.newPage();
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
//     //1st approch
//     //await page.locator('#input-email').fill('tanmayqa323@gmail.com');
//     //await page.locator('#input-password').fill('13Fb@1993');
//     //await page.locator('input[value="Login"]').click();
//     //new approch


//     //find element using  locator--css selecotor--resuable approch user point of  view while login with  multiple  user
//     let Emailid:Locator= page.locator('#input-email');
//     let password:Locator=page.locator('#input-password');
//     let loginbutton:Locator=page.locator('input[value="Login"]');

//     //actions on locators
//     await Emailid.fill('tanmayqa323@gmail.com');
//     await password.fill('13Fb@1993');
//     await loginbutton.click();

//    //let header:string|null =await page.getByText('My Account').textContent();
//    //her we have 8-8 My account likns--it will  take first one
//    //let header:string|null =await page.getByText('My Account').first().textContent();
//    //first()--capture first out of  6/8 myaccount
//    let header:string|null =await page.getByText('My Account').nth(5).textContent();

//    let xpath:string|null=await page.locator(`//h2[text()='My Account']`).textContent();

//    console.log("Header of the page is :"+header);
//    console.log("Header of the page using xpath is :"+xpath);




})();