import { Browser, chromium, FrameLocator, Locator, Page } from "@playwright/test";

(async () => {

let  browser:Browser=await chromium.launch({
headless:false, channel:'chrome'

});

let page:Page=await browser.newPage();
await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();
//iframe loaded
let frameelemen:FrameLocator= await page.frameLocator(`iframe[id*='frame-one']`);
frameelemen.locator(`#RESULT_TextField-1`).fill('Tanmay');
let header= await page.locator(`h3.details__form-preview-title`).innerText();
console.log(header);
})();