import { Browser, chromium, Locator, Page } from "@playwright/test";

(async()=>{

let browser:Browser=await chromium.launch({headless:false, channel:'chrome'});

let page:Page=await browser.newPage();

await page.goto('https://ui.freecrm.com/calendar/new/')


await page.getByRole('textbox', { name: 'email' }).fill('khope.tanmay2020@gmail.com');
await page.getByPlaceholder('password').fill('13Fb@1993');
//await page.getByRole('button', { name: 'Login' }).click();
await page.getByText('Login').click();

await page.waitForTimeout(5000);

const element=  page.locator(`span:has-text("Contacts")`);
await element.hover();
await element.click();
let Addcontracts=page.locator('.plus.inverted.icon').nth(1);
await Addcontracts.click();
await page.mouse.move(300, 200);






})();