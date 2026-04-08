import { Browser, chromium, Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch(
        {
            headless: false, channel: 'chrome'
        });

    let page: Page = await browser.newPage();

    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    

    await page.getByPlaceholder('First Name').fill('Sachin');   
    await page.getByPlaceholder('Last Name').fill('Tendulkar');
    await page.getByPlaceholder('E-Mail').fill('test122@gmail.com');

    //enter value using pressSequentially() method with delay of 300ms between 
    // each key press-character by character
    await page.getByPlaceholder('Telephone').pressSequentially('8600421149', {delay:300});

    //hihgligh locator using  highlight() method
   // await page.getByPlaceholder('E-Mail').highlight();
    /*await page.getByPlaceholder('Telephone').fill('9876543210');
    await page.getByPlaceholder('Password').fill('test@123');
    await page.getByPlaceholder('Password Confirm').fill('test@123');
     //page.locator('#input-firstname').highlight();*/
   




})();

