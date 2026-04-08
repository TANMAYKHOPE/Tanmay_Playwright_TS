import { Browser, chromium, Page } from "@playwright/test";

(async()=>{

const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});

let page:Page=await browser.newPage();

await page.goto('https://api.cogmento.com/register/?lang=en-GB');

await page.getByRole('checkbox', { name: 'I agree to the' }).check();
//await page.getByText('I agree to the', { exact: true }).click();

})();