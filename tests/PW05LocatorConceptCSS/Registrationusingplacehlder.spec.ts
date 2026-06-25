import { Browser, chromium, Page } from "@playwright/test";


(async()=>{


let browser:Browser=await chromium.launch({ headless: false, channel:'chrome'});
let page:Page=await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   /* var title = await page.title();

    console.log('Page Title:', title);*/


    await page.getByPlaceholder('First Name').fill('Test');
    await page.getByPlaceholder('Last Name').fill('playwright');
    await page.getByPlaceholder('E-Mail').fill('test.playwright@example.com');
    await page.getByPlaceholder('Telephone').fill('8600421149');

    await page.getByPlaceholder('Password').nth(0).fill('test@123');
    await page.getByPlaceholder('Password Confirm').fill('test@123');


    await page.getByRole('checkbox').check();


    await page.locator("//input[@class='btn btn-primary']").click();


//New username and password
//test.playwright@example.com/test@123





})();